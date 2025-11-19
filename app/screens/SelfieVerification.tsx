import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native"
import { useRouter } from "expo-router"
import PrimaryButton from "../components/PrimaryButton"

const { width } = Dimensions.get("window")

export default function SelfieVerification() {
  const router = useRouter()

  // Dummy image untuk preview selfie (sementara)
  const dummySelfieImage = require("../../assets/images/cimb.webp")

  return (
    <ScrollView 
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View className="px-6 pt-8">
        {/* Header */}
        <Text 
          style={{ fontFamily: "Poppins-SemiBold" }}
          className="text-2xl text-gray-800 mb-2"
        >
          Selfie Verification
        </Text>
        <Text 
          style={{ fontFamily: "Poppins-Regular" }}
          className="text-gray-500 text-sm mb-6"
        >
          Ambil selfie untuk face match dengan KTP
        </Text>

        {/* Preview Area - Canvas untuk selfie */}
        <View 
          className="rounded-2xl overflow-hidden mb-6 border-2 border-gray-200"
          style={{
            backgroundColor: "#F9F9F9",
            minHeight: 280,
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
    </ScrollView>
  )
}