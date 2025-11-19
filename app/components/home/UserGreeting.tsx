import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, View } from "react-native";

export default function UserGreeting() {
  return (
    <View className="px-6 mt-6">
      {/* Greeting */}
      <Text
        style={{ fontFamily: "Poppins-Medium" }}
        className="text-white text-lg text-center"
      >
        Hello, <Text className="text-[#FFD7D7]">Lintang 👋</Text>
      </Text>

      {/* Search bar (light gradient + rounded fix) */}
      <LinearGradient
        colors={["#FFFFFF", "#FFECEC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 9999, // pill shape
          overflow: "hidden", // clip child corners
          marginTop: 16,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4, // for Android shadow
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}
        >
          <Feather name="search" size={18} color="#C8102E" />
          <TextInput
            placeholder="Search anything..."
            placeholderTextColor="#666"
            style={{
              marginLeft: 8,
              flex: 1,
              fontFamily: "Poppins-Regular",
              fontSize: 16,
              color: "#1A1A1A",
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
