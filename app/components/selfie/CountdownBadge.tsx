import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CountdownBadgeProps {
  visible: boolean;
  value: number;
}

export default function CountdownBadge({
  visible,
  value,
}: CountdownBadgeProps) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.badge}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 40,
            color: "#FFFFFF",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: "32%",
    alignSelf: "center",
  },
  badge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderWidth: 2,
    borderColor: "#C8102E",
    alignItems: "center",
    justifyContent: "center",
  },
});
