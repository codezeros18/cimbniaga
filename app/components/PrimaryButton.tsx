import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({
  title,
  onPress,
  disabled,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.9}
      style={{
        width: "100%",
        marginTop: 20,
        borderRadius: 50,
        overflow: "hidden",
      }}
    >
      <LinearGradient
        colors={
          disabled
            ? ["#D6D6D6", "#C4C4C4"]
            : ["#C8102E", "#9E0B22"]
        }
        style={{
          height: 52,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: disabled ? "#7A7A7A" : "#FFFFFF",
            fontSize: 17,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
