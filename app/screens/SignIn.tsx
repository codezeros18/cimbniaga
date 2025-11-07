import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className="text-xl font-semibold mb-4">Sign In Screen</Text>
      <Text className="text-gray-600 mb-6">
        Halaman login CIMB kamu di sini nanti
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-gray-800 px-6 py-3 rounded-md"
      >
        <Text className="text-white text-base font-medium">Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}
