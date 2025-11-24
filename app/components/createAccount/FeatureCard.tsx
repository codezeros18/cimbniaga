import { Image, Text, View } from "react-native";

export default function FeatureCard() {
  return (
    <View style={{
      marginHorizontal: 24,
      backgroundColor: "#FFFFFF",
      borderRadius: 18,
      padding: 20,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 10,
      elevation: 4,
      marginTop: -24,
    }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 17, color: "#111827" }}>
            Fast Onboarding
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 13, color: "#6B7280", marginTop: 4 }}>
            Verify using NIK & Selfie. No paperwork.
          </Text>
        </View>

        <View style={{
          padding: 10,
          borderRadius: 14,
          backgroundColor: "#FDE3E6"
        }}>
          <Image
            source={require("../../../assets/images/illustration-onboarding.webp")}
            style={{ width: 56, height: 56 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
