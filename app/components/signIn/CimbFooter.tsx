import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function CimbFooter() {
  return (
    <View className="mt-10 mb-8 items-center">
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row items-center space-x-2"
      >
        <Feather name="info" size={14} color="#C8102E" />
        <Text
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-cimb-red text-xs"
        >
          About CIMB Niaga
        </Text>
      </TouchableOpacity>
    </View>
  );
}
