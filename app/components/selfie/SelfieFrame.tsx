import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface SelfieFrameProps {
  selfieUri: string | null;
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A component that displays a selfie with a glowing outer ring and a dark inner circle.
 * If the selfieUri is null, it displays the Cimb logo instead.
 * @param {SelfieFrameProps} props - The selfieUri to be displayed.
 * @returns {React.ReactElement} - The React component to be rendered.
 */
/*******  bcb24216-82bf-4358-856f-caf0ceb2df29  *******/export default function SelfieFrame({ selfieUri }: SelfieFrameProps) {
  return (
    <View style={styles.wrapper}>
      {/* Outer glowing ring */}
      <LinearGradient
        colors={["#C8102E", "#FFD1D1", "#3A0A0A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.outerRing}
      >
        {/* Inner dark circle */}
        <View style={styles.innerCircle}>
          {selfieUri ? (
            <Image
              source={{ uri: selfieUri }}
              style={styles.selfieImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder}>
              <Image
                source={require("../../../assets/images/cimb-logo.webp")}
                style={{ width: 80, height: 32, opacity: 0.8 }}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

const SIZE = 230;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  outerRing: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    padding: 6,
    shadowColor: "#C8102E",
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 10,
  },
  innerCircle: {
    flex: 1,
    borderRadius: (SIZE - 12) / 2,
    backgroundColor: "rgba(0,0,0,0.7)",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  selfieImage: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
