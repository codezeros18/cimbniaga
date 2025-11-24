import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OTPInput from "../components/OTPField";
import PrimaryButton from "../components/PrimaryButton";

export default function OTPVerification() {
  const router = useRouter();
  const [otpCode, setOtpCode] = useState(["", "", "", ""]);

  const isOtpComplete = otpCode.every((d) => d !== "");

  useEffect(() => {
    if (isOtpComplete) Keyboard.dismiss();
  }, [isOtpComplete]);

  const handleVerify = () => {
    if (!isOtpComplete) return;
    router.push("/screens/UploadKTP");
  };

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 26,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 26,
              color: "#F9FAFB",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Verify Phone
          </Text>

          <Image
            source={require("../../assets/images/otp.png")}
            resizeMode="contain"
            style={{ width: 200, height: 160, marginBottom: 22 }}
          />

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D1D5DB",
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Enter the 4-digit code sent to:
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              color: "#FFFFFF",
              marginBottom: 26,
            }}
          >
            ****** 9122
          </Text>

          {/* OTP input */}
          <OTPInput code={otpCode} setCode={setOtpCode} numberOfDigits={4} />

          {/* Resend */}
          <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 12 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
                color: "#F97373",
              }}
            >
              Resend Code
            </Text>
          </TouchableOpacity>

          {/* Continue */}
          <View style={{ width: "100%", marginTop: 34 }}>
            <PrimaryButton
              title="Verify"
              disabled={!isOtpComplete}
              onPress={handleVerify}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
