import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  Text,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const { width } = Dimensions.get("window");

export default function FraudScore() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number | null>(null);

  // Animated ring progress
  const ringAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulated fraud scoring pipeline
    setTimeout(() => {
      const staticScore = 87; // intentionally not random → "confidence"
      setScore(staticScore);
      setLoading(false);

      // Animate score
      Animated.timing(ringAnim, {
        toValue: staticScore,
        duration: 1200,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }, 2800);
  }, []);

  const ringStroke = ringAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"],
  });

  const riskLabel =
    score && score >= 85
      ? "LOW RISK"
      : score && score >= 60
      ? "NEUTRAL"
      : "HIGH RISK";

  const riskColor =
    riskLabel === "LOW RISK"
      ? "#16A34A"
      : riskLabel === "NEUTRAL"
      ? "#FACC15"
      : "#DC2626";

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1, justifyContent: "center", paddingHorizontal: 26 }}
    >
      {/* STEP INDICATOR */}
      {/* Title */}
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 32,
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        FraudScore™
      </Text>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          color: "#D1D5DB",
          textAlign: "center",
          marginBottom: 44,
          lineHeight: 20,
        }}
      >
        Validating digital identity integrity
      </Text>

      {/* Score Card */}
      <View
        style={{
          width: width - 60,
          borderRadius: 26,
          paddingVertical: 32,
          paddingHorizontal: 20,
          backgroundColor: "rgba(255,255,255,0.04)",
          borderWidth: 1.4,
          borderColor: "rgba(255,255,255,0.12)",
          shadowColor: "#C8102E",
          shadowOpacity: 0.25,
          shadowRadius: 16,
          elevation: 14,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        {!score && (
          <>
            <ActivityIndicator size="large" color="#C8102E" />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                marginTop: 18,
                color: "#D1D5DB",
              }}
            >
              Analyzing biometric & document trust signals...
            </Text>
          </>
        )}

        {score !== null && (
          <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>
            {/* Circular Score */}
            <Animated.View
              style={{
                width: 160,
                height: 160,
                borderRadius: 80,
                borderWidth: 8,
                borderColor: riskColor + "55",
                justifyContent: "center",
                alignItems: "center",
                transform: [{ rotate: ringStroke }],
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 64,
                  color: riskColor,
                }}
              >
                {score}
              </Text>
            </Animated.View>

            {/* Risk Label */}
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 16,
                color: riskColor,
                marginTop: 4,
              }}
            >
              {riskLabel}
            </Text>

            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 13,
                color: "#D1D5DB",
                marginTop: 6,
              }}
            >
              Identity confidence level is acceptable
            </Text>

            {/* Breakdowns */}
            <View style={{ marginTop: 26, width: "100%", gap: 10 }}>
              {[
                "e-KTP authenticity validated",
                "Selfie biometrics matched",
                "Device integrity verified",
              ].map((item, i) => (
                <View
                  key={i}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      marginRight: 10,
                      backgroundColor: riskColor,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 13,
                      color: "#E5E7EB",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </Animated.View>
        )}
      </View>

      {/* Continue Button */}
      <PrimaryButton
        title={loading ? "Please wait..." : "Continue"}
        disabled={loading}
        onPress={() => router.push("/screens/InterviewScreen")}
        style={{ marginTop: 44 }}
      />

      {/* Footer */}
      <Text
        style={{
          fontFamily: "Poppins-Light",
          fontSize: 10,
          color: "#FFFFFF55",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        © 2025 CIMB Niaga Digital Banking
      </Text>
    </LinearGradient>
  );
}
