import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface SelfieFrameProps {
  selfieUri: string | null;
}

const SIZE = 260; // FRAME SIZE

export default function SelfieFrame({ selfieUri }: SelfieFrameProps) {
  return (
    <View style={styles.container}>
      {/* OUTER GLOW FRAME */}
      <LinearGradient
        colors={["#C8102E", "#6A0C0C", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.glowCircle}
      >
        {/* MASKED CIRCLE */}
        <View style={styles.innerFrame}>
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
                style={{ width: 80, height: 32, opacity: 0.6 }}
                resizeMode="contain"
              />
            </View>
          )}

          {/* ——————————————— FACE GUIDE OVERLAY ——————————————— */}

          {/* Horizontal line (eye line) */}
          <View style={styles.horizontalLine} />

          {/* Vertical line (center alignment) */}
          <View style={styles.verticalLine} />

          {/* Oval face boundary */}
          <View style={styles.faceOval} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  glowCircle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    padding: 6,
    shadowColor: "#C8102E",
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 10,
  },
  innerFrame: {
    flex: 1,
    borderRadius: (SIZE - 12) / 2,
    backgroundColor: "rgba(0,0,0,0.65)",
    overflow: "hidden",
    position: "relative",
  },
  selfieImage: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  /** ——— FACE GUIDE ELEMENTS ——— **/

  horizontalLine: {
    position: "absolute",
    top: "42%", // where eyes usually sit
    width: "70%",
    height: 2,
    backgroundColor: "rgba(255,255,255,0.4)",
    alignSelf: "center",
  },
  verticalLine: {
    position: "absolute",
    left: "50%",
    height: "70%",
    width: 2,
    backgroundColor: "rgba(255,255,255,0.35)",
    marginLeft: -1,
  },
  faceOval: {
    position: "absolute",
    width: "70%",
    height: "88%",
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.35)",
    alignSelf: "center",
    top: "6%",
  },
});
