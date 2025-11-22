import { Text, View } from "react-native";

export default function FooterSmall() {
  return (
    <View className="mt-10 items-center">
      <Text
        style={{ fontFamily: "Poppins-Regular" }}
        className="text-gray-400 text-xs"
      >
        © 2025 CIMB Niaga Digital Banking
      </Text>
    </View>
  );
}
