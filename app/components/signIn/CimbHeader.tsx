import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CimbHeader() {
  return (
    <View className="flex-row justify-between items-center px-6 pt-12">
      <Image
        source={require("../../../assets/images/cimb-logo.webp")}
        style={{ width: 150, height: 60 }}
        resizeMode="contain"
      />
      <View className="flex-row items-center space-x-3">
        <TouchableOpacity>
          <Feather name="headphones" size={22} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity className="border border-white/60 px-3 py-1 rounded-full">
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-xs text-white"
          >
            EN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
