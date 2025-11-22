import { Image, Text, View } from "react-native";

export default function FeatureCard() {
  return (
    <View
      style={{
        marginTop: -30,
        marginHorizontal: 24,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 5,
        padding: 18,
      }}
    >
      <View className="flex-row items-center justify-between">
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-gray-800 text-lg"
          >
            Fast Onboarding
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Regular" }}
            className="text-gray-500 text-sm mt-1"
          >
            Verify with NIK & selfie — no paperwork required.
          </Text>
        </View>

        <View className="ml-3 items-center">
          <View
            style={{
              backgroundColor: "rgba(200,18,30,0.06)",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Image
              source={require("../../../assets/images/illustration-onboarding.webp")}
              style={{ width: 64, height: 64 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
