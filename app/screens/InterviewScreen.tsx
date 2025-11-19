import { useRouter } from "expo-router"
import { ActivityIndicator, Dimensions, Image, Text, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const { width } = Dimensions.get("window")

export default function InterviewScreen() {
  const router = useRouter()

  // Dummy video/image untuk simulasi video call
  const dummyVideoImage = require("../../assets/images/cimb.webp")

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      {/* Video Call Preview Area - Canvas untuk dummy video */}
      <View 
        className="rounded-2xl overflow-hidden mb-6 border-2 border-gray-200"
        style={{
          backgroundColor: "#1A1A1A",
          height: 400,
          width: width - 48,
          position: "relative",
        }}
      >
        {/* Simulasi video call dengan dummy video */}
        <View className="flex-1 justify-center items-center p-6">
          {/* Video placeholder - seperti video call */}
          <View
            style={{
              width: width - 100,
              height: 350,
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#2A2A2A",
            }}
          >
            <Image
              source={dummyVideoImage}
              style={{
                width: "100%",
                height: "100%",
              }}
              resizeMode="cover"
            />
            
            {/* Overlay untuk efek video call */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            />
          </View>

          {/* Loading indicator untuk simulasi connecting */}
          <View className="absolute bottom-20 items-center">
            <ActivityIndicator size="large" color="#C8102E" />
          </View>
        </View>

        {/* Video call controls overlay (bottom) */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            paddingVertical: 16,
            paddingHorizontal: 20,
          }}
        >
          <View className="flex-row justify-center items-center space-x-4">
            {/* Microphone indicator */}
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(200, 16, 46, 0.2)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>🎤</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Status Message */}
      <View className="items-center mb-6">
        <Text
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-gray-700 text-base text-center"
        >
          Please wait while we connect you to an operator
        </Text>
      </View>

      {/* Tombol Next */}
      <PrimaryButton 
        title="Next" 
        onPress={() => router.push("/screens/AccountTypeSelection")} 
      />
    </View>
  )
}
