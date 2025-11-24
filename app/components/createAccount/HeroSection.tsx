import { Text, View } from "react-native";

export default function HeroSection() {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 30,
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 38,
        }}
      >
        Welcome to CIMB Digital
      </Text>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 15,
          color: "#D1D5DB",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Open your account in minutes. Secure, fast, and paperless.
      </Text>
    </View>
  );
}
