import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Text,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function IdentityValidationEngine() {
  const router = useRouter();

  // Simulated extracted data from OCR and form
  const formName = "Lintang Balakosa Ardhana";
  const ktpName = "LINTANG BALAKOSA ARDHANA"; // OCR result

  const [progress, setProgress] = useState(0);
  const [validated, setValidated] = useState<null | boolean>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current += 12; // increment speed

      if (progressRef.current <= 100) {
        setProgress(progressRef.current);
      } else {
        clearInterval(timer);

        const normalizedForm = formName.trim().toLowerCase();
        const normalizedKtp = ktpName.trim().toLowerCase();

        const isMatch = normalizedForm === normalizedKtp;
        setValidated(isMatch);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }).start();
      }
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#1A0A0A", "#3B0F12", "#7A0E18"]}
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 26,
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 28,
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Identity Validation
      </Text>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          color: "#D1D5DB",
          textAlign: "center",
          marginBottom: 46,
        }}
      >
        Matching your submitted information with ID data
      </Text>

      {/* Box */}
      <View
        style={{
          height: 260,
          borderRadius: 26,
          borderWidth: 1.4,
          borderColor: "rgba(255,255,255,0.15)",
          backgroundColor: "rgba(255,255,255,0.05)",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#C8102E",
          shadowOpacity: 0.35,
          shadowRadius: 20,
          elevation: 20,
          paddingHorizontal: 20,
        }}
      >
        {/* LOADING UI */}
        {validated === null && (
          <>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#FFFFFFCC",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              Extracting & authenticating identity...
            </Text>

            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 46,
                color: "#C8102E",
              }}
            >
              {progress}%
            </Text>
          </>
        )}

        {/* RESULT */}
        {validated !== null && (
          <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 62,
                color: validated ? "#16A34A" : "#DC2626",
                marginBottom: 6,
              }}
            >
              {validated ? "MATCH" : "MISMATCH"}
            </Text>

            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 14,
                color: "#E5E7EB",
                textAlign: "center",
              }}
            >
              {validated
                ? "Identity successfully verified"
                : "Details differ from ID. Please recheck data."}
            </Text>
          </Animated.View>
        )}
      </View>

      {/* Continue */}
      <PrimaryButton
        title={validated === null ? "Validating..." : "Continue"}
        disabled={validated === null}
        onPress={() => router.push("/screens/FraudScore")}
        style={{ marginTop: 50 }}
      />

      {/* Footer */}
      <Text
        style={{
          fontFamily: "Poppins-Light",
          fontSize: 10,
          color: "#FFFFFF66",
          textAlign: "center",
          marginTop: 24,
        }}
      >
        © 2025 CIMB Niaga Digital Banking
      </Text>
    </LinearGradient>
  );
}
