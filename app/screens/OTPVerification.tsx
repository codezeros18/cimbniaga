import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import OTPInput from "../components/OTPField";
import PrimaryButton from "../components/PrimaryButton";

export default function OTPVerification() {
  const router = useRouter();
  const [otpCode, setOtpCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(45); // resend timer

  const isOtpComplete = otpCode.every((d) => d !== "");

  useEffect(() => {
    if (isOtpComplete) Keyboard.dismiss();
  }, [isOtpComplete]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (!isOtpComplete) return;
    router.push("/screens/UploadKTP");
  };

  return (
    <LinearGradient
      colors={["#120606", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 26,
            paddingTop: 80,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Step */}
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 13,
              color: "#D1D5DB",
              marginBottom: 20,
            }}
          >
            Step <Text style={{ color: "#C8102E" }}>2</Text> of 7
          </Text>

          {/* Title */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 28,
              color: "#FFFFFF",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Verify Phone Number
          </Text>

          {/* Subtitle */}
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              textAlign: "center",
              color: "#C9C9C9",
              marginBottom: 24,
              maxWidth: 300,
            }}
          >
            Enter the 4-digit code sent to your mobile number
          </Text>

          {/* Illustration */}
          <Image
            source={require("../../assets/images/otp.png")}
            resizeMode="contain"
            style={{ width: 180, height: 150, marginBottom: 22 }}
          />

          {/* Masked Number */}
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              color: "#FFFFFF",
              marginBottom: 30,
            }}
          >
            ****** 9122
          </Text>

          {/* OTP INPUT */}
          <OTPInput code={otpCode} setCode={setOtpCode} numberOfDigits={4} />

          {/* Resend Timer */}
          {timer > 0 ? (
            <Text
              style={{
                marginTop: 16,
                fontFamily: "Poppins-Regular",
                color: "#A6A6A6",
              }}
            >
              Resend code in{" "}
              <Text style={{ color: "#FFFFFF" }}>{timer}s</Text>
            </Text>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setTimer(45)}
              style={{ marginTop: 14 }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  color: "#FF6E6E",
                  fontSize: 14,
                }}
              >
                Resend Code
              </Text>
            </TouchableOpacity>
          )}

          {/* Verify Button */}
          <PrimaryButton
            title="Verify"
            disabled={!isOtpComplete}
            onPress={handleVerify}
            style={{ marginTop: 40 }}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
