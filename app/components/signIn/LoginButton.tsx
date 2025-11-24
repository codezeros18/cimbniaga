import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface LoginButtonProps {
  title?: string;
  onPress?: () => void;
  variant?: "solid" | "outline" | "gradient";
}

export default function LoginButton({
  title = "Login",
  onPress = () => {},
  variant = "gradient",
}: LoginButtonProps) {
  // 🔴 Gradient premium (default)
  if (variant === "gradient") {
    return (
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.9}
          style={{
            borderRadius: 999,
            overflow: "hidden",
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 16,
            elevation: 8,
          }}
        >
          <LinearGradient
            colors={["#C8102E", "#9E0B22"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingVertical: 14,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                color: "#FFFFFF",
              }}
            >
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  // 🔴 Solid
  if (variant === "solid") {
    return (
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.9}
          style={{
            backgroundColor: "#C8102E",
            paddingVertical: 14,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 6,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ⚪ Outline (rarely used, but keep)
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={{
          borderWidth: 1.5,
          borderColor: "#F9FAFB",
          paddingVertical: 14,
          borderRadius: 999,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            color: "#F9FAFB",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
