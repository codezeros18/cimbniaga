import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountSummaryDark() {
  return (
    <View className="px-6 mt-6">
      <LinearGradient
        colors={["#1A1A1A", "#3A0A0A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          borderRadius: 24,
          padding: 24,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 6,
          position: "relative", // biar absolute icon tetap di dalam card
        }}
      >
        {/* ⚙️ Setting Icon (absolute) */}
        <TouchableOpacity
          className="absolute top-4 right-4 70 p-2 rounded-full"
          activeOpacity={0.8}
        >
          <Feather name="settings" size={18} color="#fff" />
        </TouchableOpacity>

        {/* 🧍‍♂️ Centered Name */}
        <View className="items-center mt-2">
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-gray-400 text-sm"
          >
            Mr.
          </Text>
          <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            className="text-white text-2xl mt-1"
          >
            Lintang Balakosa Ardhana
          </Text>
        </View>

        {/* Divider */}
        <View className="h-[1px] bg-white/10 my-5" />

        {/* Balance & Bonuses */}
        <View className="flex-row justify-between">
          {/* Left - Balance */}
          <View className="flex-1 items-start">
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="text-gray-300 opacity-50 text-sm"
            >
              BALANCE
            </Text>
            <View className="flex-row items-center mt-2">
              <Text
                style={{ fontFamily: "Poppins-SemiBold" }}
                className="text-white text-xl pr-2"
              >
                Rp 24.092.890
              </Text>
              <Feather
                className="bg-cimb-red rounded-full p-1"
                name="arrow-right"
                size={14}
                color="#FFFFFF"
              />
            </View>
          </View>

          {/* Right - Bonuses */}
          <View className="flex-1 items-end">
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="text-gray-300 opacity-50 text-sm"
            >
              BONUSES
            </Text>
            <View className="flex-row items-center mt-2">
              <Text
                style={{ fontFamily: "Poppins-SemiBold" }}
                className="text-white text-xl pr-2"
              >
                Rp 12.550
              </Text>
              <Feather
                className="bg-cimb-red rounded-full p-1"
                name="arrow-right"
                size={14}
                color="#FFFFFF"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
