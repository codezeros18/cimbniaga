import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonEnabled,
      ]}
    >
      <Text
        style={[styles.text, disabled ? styles.textDisabled : styles.textActive]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonEnabled: {
    backgroundColor: "#C8102E", // CIMB red
  },
  buttonDisabled: {
    backgroundColor: "#E5E7EB", // gray when disabled
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  textActive: {
    color: "#FFFFFF",
  },
  textDisabled: {
    color: "#9CA3AF",
  },
});
