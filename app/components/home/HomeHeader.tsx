import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function HomeHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      {/* Profile */}
      <TouchableOpacity activeOpacity={0.85}>
        <LinearGradient
          colors={["#FFFFFF", "#FFE1E1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: 0.35,
            shadowRadius: 10,
            elevation: 7,
          }}
        >
          <Feather name="user" size={20} color="#C8102E" />
        </LinearGradient>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require("../../../assets/images/cimb-logo.webp")}
        style={{ width: 150, height: 60 }}
        resizeMode="contain"
      />

      {/* Chat */}
      <TouchableOpacity activeOpacity={0.85}>
        <LinearGradient
          colors={["#FFFFFF", "#FFE1E1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: 0.35,
            shadowRadius: 10,
            elevation: 7,
          }}
        >
          <Feather name="message-circle" size={20} color="#C8102E" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
