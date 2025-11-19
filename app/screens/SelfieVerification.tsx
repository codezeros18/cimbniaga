import { useRouter } from "expo-router"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const { width } = Dimensions.get("window")

export default function SelfieVerification() {
  const router = useRouter()

  // Dummy image untuk preview selfie (sementara)
  const dummySelfieImage = require("../../assets/images/cimb.webp")

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      {/* Preview Area - Canvas untuk selfie */}
      <View 
        className="rounded-2xl overflow-hidden mb-6 border-2 border-gray-200"
        style={{
          backgroundColor: "#F9F9F9",
          height: 280,
          width: width - 48,
        }}
      >
        <View className="flex-1 justify-center items-center p-6">
          {/* Circle canvas untuk selfie preview */}
          <View
            style={{
              width: 220,
              height: 220,
              borderRadius: 110,
              backgroundColor: "#FFFFFF",
              borderWidth: 3,
              borderColor: "#C8102E",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={dummySelfieImage}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
              }}
              resizeMode="cover"
            />
          </View>
          <Text 
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-gray-400 text-xs mt-4"
          >
            Preview selfie (dummy image)
          </Text>
        </View>
      </View>

      {/* Tombol Ambil Selfie */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={{
          backgroundColor: "#C8102E",
          paddingVertical: 16,
          borderRadius: 14,
          alignItems: "center",
          marginBottom: 12,
          shadowColor: "#C8102E",
          shadowOpacity: 0.18,
          shadowRadius: 18,
          elevation: 6,
          width: "100%",
        }}
        // TODO: Akan menggunakan expo-image-picker atau camera nanti
        onPress={() => {
          // Placeholder untuk expo-image-picker/camera
          console.log("Ambil Selfie - camera/image-picker akan diimplementasikan")
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold" }}
          className="text-white text-base"
        >
          Ambil Selfie
        </Text>
      </TouchableOpacity>

      {/* Tombol Lanjutkan */}
      <PrimaryButton 
        title="Lanjutkan" 
        onPress={() => router.push("/screens/InterviewScreen")} 
      />
    </View>
  )
}