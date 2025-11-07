import { View, Text } from "react-native"
import { useRouter } from "expo-router"
import PrimaryButton from "../components/PrimaryButton"

export default function OTPVerification() {
  const router = useRouter()
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-xl font-semibold mb-4 text-gray-800">
        OTP Verification
      </Text>
      <PrimaryButton title="Next" onPress={() => router.push("/screens/UploadKTP")} />
    </View>
  )
}
