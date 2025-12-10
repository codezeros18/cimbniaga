import { Feather } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function SelfieCamera({ onCapture }: { onCapture: (uri: string) => void }) {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [previewUri, setPreviewUri] = useState<string | null>(null);

  if (!permission?.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <TouchableOpacity onPress={requestPermission}>
          <Text className="text-white">Allow Camera Access</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const capture = async () => {
    const photo = await cameraRef.current?.takePictureAsync({
      quality: 1,
      skipProcessing: true,
    });

    if (photo?.uri) setPreviewUri(photo.uri);
  };

  if (previewUri) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <Image source={{ uri: previewUri }} className="w-full h-full" />
        <View className="absolute bottom-12 flex-row gap-6">
          <TouchableOpacity onPress={() => setPreviewUri(null)}>
            <Feather name="rotate-ccw" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onCapture(previewUri)}>
            <Feather name="check-circle" size={32} color="#C8102E" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <CameraView
        ref={cameraRef}
        facing="front"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Overlay wajah premium */}
      <View className="absolute">
        {/* Import SelfieFrame overlay component di sini */}
      </View>

      {/* Capture button */}
      <TouchableOpacity
        onPress={capture}
        className="absolute bottom-16 w-20 h-20 rounded-full border-4 border-white"
      />
    </View>
  );
}
