import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function KTPPicker({ imageUri, setImageUri }: any) {
  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted")
      return Alert.alert("Permission Denied", "Gallery access required.");

    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!res.canceled) setImageUri(res.assets[0].uri);
  };

  const scanFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted")
      return Alert.alert("Permission Denied", "Camera permission required.");

    const res = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (!res.canceled) setImageUri(res.assets[0].uri);
  };

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      {imageUri ? (
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 14,
              color: "#FFFFFF",
              marginBottom: 10,
            }}
          >
            KTP Preview
          </Text>

          <View
            style={{
              width: "100%",
              height: 220,
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.18)",
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: imageUri }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <TouchableOpacity onPress={() => setImageUri(null)}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
                color: "#FF6B6B",
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Remove photo
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ width: "100%", gap: 14 }}>
          <UploadBtn label="Upload from Gallery" onPress={pickFromGallery} />
          <UploadBtn label="Scan using Camera" onPress={scanFromCamera} />
        </View>
      )}
    </View>
  );
}

const UploadBtn = ({ label, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingVertical: 16,
      borderRadius: 18,
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,0.06)",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.14)",
    }}
  >
    <Text
      style={{
        fontFamily: "Poppins-Medium",
        fontSize: 15,
        color: "#FFFFFF",
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);
