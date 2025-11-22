import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import OTPInput from "../components/OTPField";

export default function OTPVerification() {
  const router = useRouter();
  const [otpCode, setOtpCode] = useState<string[]>(Array(4).fill(''));

  const isOtpComplete = otpCode.every(digit => digit !== '') && otpCode.length === 4;

  const handleVerify = () => {
    const fullOtp = otpCode.join('');
    console.log("Verifying OTP:", fullOtp);
    router.push("/screens/UploadKTP");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-5">

        <Text style={{ fontSize: 26, fontFamily: "Poppins-Bold", color: "#1F2937", marginBottom: 20 }}>
          Verify Phone
        </Text>

        <Image
          source={require('../../assets/images/otp.png')}
          className="w-120 h-80 mb-8"
          resizeMode="contain"
        />

        <Text style={{ fontSize: 16, fontFamily: "Poppins-Medium", color: "#6B7280", textAlign: "center", marginBottom: 4 }}>
          Please enter the 4 digit code sent to
        </Text>

        <Text style={{ fontSize: 16, fontFamily: "Poppins-Bold", color: "#1F2937", marginBottom: 40 }}>
          ****** 9122?
        </Text>

        <OTPInput code={otpCode} setCode={setOtpCode} numberOfDigits={4} />

        <TouchableOpacity className="mt-5 mb-8">
          <Text style={{ color: "#C8102E", fontFamily: "Poppins-Bold", fontSize: 16 }}>
            Resend Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleVerify}
          disabled={!isOtpComplete}
          className="w-full rounded-2xl overflow-hidden max-w-sm"
        >
          <LinearGradient
            colors={isOtpComplete ? ['#C8102E', '#9E0B22'] : ['#E57373', '#CF8E8E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 items-center justify-center"
          >
            <Text style={{ color: "white", fontSize: 18, fontFamily: "Poppins-Bold" }}>
              Verify
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
