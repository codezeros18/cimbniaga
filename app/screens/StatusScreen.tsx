import { View, Text } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useRouter } from "expo-router"

export default function StatusScreen() {
  const router = useRouter()
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-semibold mb-4 text-gray-800">Account Created!</Text>
      <Text className="text-gray-600 mb-6">Your application is under review.</Text>
      <PrimaryButton title="Back to Home" onPress={() => router.push("/")} />
    </View>
  )
}
