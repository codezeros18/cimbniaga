import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function FaceTrustScore() {
  const router = useRouter();
  const [score] = useState(87); // <-- Mock score from AI model
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: score,
      duration: 1800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, []);

  const animatedScore = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, score],
  });

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}
    >
      {/* Title */}
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 28,
          color: "#FFFFFF",
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Identity Trust Score
      </Text>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          color: "#D1D5DB",
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        AI evaluates your selfie quality for secure account opening
      </Text>

      {/* Score Circle */}
      <View
        style={{
          width: 210,
          height: 210,
          borderRadius: 105,
          borderWidth: 4,
          borderColor: "#C8102E",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 56,
            color: "#FFFFFF",
          }}
          numberOfLines={1}
        >
          <Animated.Text style={{ fontSize: 56 }}>
            {animatedValue}
          </Animated.Text>
        </Animated.Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 14,
            color: "#D1D5DB",
          }}
        >
          Verification Confidence
        </Text>
      </View>

      {/* Reason Breakdown */}
      <View style={{ width: "100%", gap: 12, marginBottom: 40 }}>
        {[
          {
            label: "Face clarity detected",
            status: "✔",
            desc: "Your face is sharp and recognizable",
          },
          {
            label: "Lighting quality optimal",
            status: "✔",
            desc: "Your selfie has sufficient brightness",
          },
          {
            label: "Pose angle slightly sideways",
            status: "⚠",
            desc: "Minor tilt detected — still acceptable",
          },
        ].map((item, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 14,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.12)",
              padding: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
                color: item.status === "⚠" ? "#F97373" : "#FFFFFF",
              }}
            >
              {item.status} {item.label}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#D1D5DB",
                marginTop: 4,
              }}
            >
              {item.desc}
            </Text>
          </View>
        ))}
      </View>

      {/* CTA */}
      <PrimaryButton
        title="Continue"
        variant="gradient"
        onPress={() => router.push("/screens/InterviewScreen")}
      />
    </LinearGradient>
  );
}
