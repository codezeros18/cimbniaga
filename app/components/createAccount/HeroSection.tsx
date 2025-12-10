import { Text, View } from "react-native";

export default function HeroSection() {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 32,
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 42,
        }}
      >
        Welcome to{" "}
        <Text style={{ color: "#C8102E" }}>CIMB Digital</Text>
      </Text>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 15,
          color: "#ECECEC",
          textAlign: "center",
          marginTop: 10,
          opacity: 0.85,
          maxWidth: 300,
        }}
      >
        Open your account in minutes. Secure, fast, and totally paperless.
      </Text>
    </View>
  );
}
