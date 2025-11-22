import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, TouchableOpacity, View } from "react-native";

export default function HomeHeader() {
  return (
    <View className="flex-row justify-between items-center px-6 pt-6">
      {/* 👤 Profile Icon */}
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#ffffff", "#FFD6D6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#C8102E",
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Feather name="user" size={20} color="#C8102E" />
        </LinearGradient>
      </TouchableOpacity>

      {/* 🏦 CIMB Logo */}
      <Image
        source={require("../../../assets/images/cimb-logo.webp")}
        style={{ width: 150, height: 62 }}
        resizeMode="contain"
      />

      {/* 💬 Chat Icon */}
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#ffffff", "#FFD6D6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#C8102E",
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Feather name="message-circle" size={20} color="#C8102E" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
