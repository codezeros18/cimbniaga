import { LinearGradient } from "expo-linear-gradient";
import { AnimatePresence, MotiView } from "moti";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({
  title,
  onPress,
  disabled,
  style,
}: any) {
  const gradientColors = disabled
    ? (["#3A3A3A", "#2A2A2A"] as const)
    : (["#C8102E", "#9E0B22"] as const);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      disabled={disabled}
      style={[
        {
          width: "100%",
          borderRadius: 50,
          overflow: "hidden",
        },
        style,
      ]}
    >
      {/* Animated Container */}
      <MotiView
        from={{ scale: 1 }}
        animate={{ scale: disabled ? 1 : 1 }}
        transition={{ type: "timing", duration: 200 }}
      >
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            height: 54,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: disabled ? "#000" : "#C8102E",
            shadowOpacity: disabled ? 0.15 : 0.55,
            shadowRadius: disabled ? 4 : 12,
            elevation: disabled ? 2 : 8,
          }}
        >
          {/* Glow Pulse Animation (only when enabled) */}
          <AnimatePresence>
            {!disabled && (
              <MotiView
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.4, scale: 1.15 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "timing",
                  duration: 1600,
                  loop: true,
                }}
                style={{
                  position: "absolute",
                  width: "90%",
                  height: "85%",
                  borderRadius: 50,
                  backgroundColor: "#C8102E44",
                }}
              />
            )}
          </AnimatePresence>

          {/* Button Text */}
          <Text
            style={{
              color: disabled ? "#A1A1A1" : "#FFFFFF",
              fontSize: 17,
              fontFamily: "Poppins-SemiBold",
              letterSpacing: 0.4,
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </MotiView>
    </TouchableOpacity>
  );
}
