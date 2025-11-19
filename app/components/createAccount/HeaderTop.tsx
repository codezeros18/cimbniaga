import { Image, Text, View } from "react-native";

export default function HeaderTop() {
  return (
    <View className="px-6 pt-8 flex-row items-center justify-between">
      <Image
        source={require("../../../assets/images/cimb-logo.webp")}
        style={{ width: 150, height: 60 }}
        resizeMode="contain"
      />
      <View className="rounded-full px-3 py-1 border border-gray-200">
        <Text
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-xs text-gray-700"
        >
          EN
        </Text>
      </View>
    </View>
  );
}
