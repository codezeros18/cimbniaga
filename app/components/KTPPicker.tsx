import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

interface KTPPickerProps {
  imageUri: string | null;
  setImageUri: (uri: string | null) => void;
}

const KTPPicker: React.FC<KTPPickerProps> = ({ imageUri, setImageUri }) => {

  const handleUploadFile = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Izin Ditolak', 'Maaf, kami butuh izin untuk mengakses galeri fotomu.');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleScanCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Izin Ditolak', 'Maaf, kami butuh izin untuk mengakses kameramu.');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View className="w-full items-center">
      {imageUri ? (
        <View className="w-full items-center">
          <Text className="text-lg font-poppins-semibold text-gray-800 mb-3">
            KTP Preview
          </Text>
          <View className="w-full h-52 rounded-2xl border-2 border-dashed border-gray-300 p-2">
            <Image
              source={{ uri: imageUri }}
              className="w-full h-full rounded-xl"
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            onPress={() => setImageUri(null)}
            className="mt-4 bg-gray-200 py-2 px-6 rounded-full"
          >
            <Text className="font-poppins-medium text-gray-700">Ganti Foto</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="w-full">
          <TouchableOpacity
  onPress={handleUploadFile}
  className="w-full flex-row items-center justify-center rounded-2xl bg-white p-6 border border-gray-300"
>
  <Ionicons
    name="image"
    size={24}
    color="#C8102E"
    style={{ marginRight: 12 }}
  />
  <Text className="text-lg font-poppins-medium text-gray-800">
    Upload from File
  </Text>
</TouchableOpacity>


          {/* PERUBAHAN DI SINI: mt-6 menjadi mt-4 */}
          <TouchableOpacity
  onPress={handleScanCamera}
  className="w-full flex-row items-center justify-center gap-3 rounded-2xl bg-white p-6 border border-gray-300 mt-4"
>
  <Ionicons name="camera" size={24} color="#C8102E" />
  <Text className="text-lg font-poppins-medium text-gray-800">
    Scan with Camera
  </Text>
</TouchableOpacity>

        </View>
      )}
    </View>
  );
};

export default KTPPicker;