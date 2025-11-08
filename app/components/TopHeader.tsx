import { View, Text, Image, TouchableOpacity } from "react-native";

export default function TopHeader() {
  return (
    <View className="px-6 pt-16 pb-2 bg-white">
      <View className="flex-row items-center justify-between">
        {/* Left: CIMB Logo */}
        <Image
          source={require("../../assets/images/cimb-logo.webp")}
          style={{ width: 120, height: 38 }}
          resizeMode="contain"
        />

        {/* Right: Icons */}
        <View className="flex-row items-center space-x-3">
          {/* Help Center Icon */}
          <TouchableOpacity
            className="p-2 mx-4 rounded-full border border-gray-200"
            activeOpacity={0.8}
          >
            <Image
              source={require("../../assets/images/cimb.webp")} // tambahkan icon headset
              style={{ width: 18, height: 18 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* Language Selector */}
          <TouchableOpacity
            className="rounded-full px-3 py-1 border border-gray-200"
            activeOpacity={0.8}
          >
            <Text className="text-xs text-gray-600 font-medium">EN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
