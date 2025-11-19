import { Text, View } from "react-native";

export default function HeroSection() {
  return (
    <View className="px-6 mt-4">
      <View
        style={{
          backgroundColor: "#C8102E",
          borderRadius: 28,
          paddingVertical: 28,
          paddingHorizontal: 22,
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold" }}
          className="text-white text-2xl"
        >
          Welcome to CIMB Digital
        </Text>
        <Text
          style={{ fontFamily: "Poppins-Regular" }}
          className="text-white/90 text-sm mt-2 leading-5"
        >
          Open your digital savings account in just a few minutes. Fast,
          secure, and paperless.
        </Text>
      </View>
    </View>
  );
}
