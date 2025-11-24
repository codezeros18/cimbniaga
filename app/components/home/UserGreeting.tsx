import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TextInput, View } from "react-native";

export default function UserGreeting() {
  return (
    <View style={{ paddingHorizontal: 24, marginTop: 18 }}>
      {/* Greeting */}
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 18,
          color: "#F9FAFB",
          textAlign: "center",
        }}
      >
        Hello, <Text style={{ color: "#FED7D7" }}>Lintang 👋</Text>
      </Text>

      {/* Search */}
      <LinearGradient
        colors={["#FFFFFF", "#FFECEC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 9999,
          overflow: "hidden",
          marginTop: 16,
          marginBottom: 10,
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
        >
          <Feather name="search" size={18} color="#C8102E" />
          <TextInput
            placeholder="Search anything..."
            placeholderTextColor="#6B7280"
            style={{
              marginLeft: 8,
              flex: 1,
              fontFamily: "Poppins-Regular",
              fontSize: 14.5,
              color: "#111827",
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
