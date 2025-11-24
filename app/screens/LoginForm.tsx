import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";
import { Easing } from "react-native-reanimated";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

export default function LoginForm() {
  const router = useRouter();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const canLogin = emailOrPhone && password;

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              paddingHorizontal: 24,
              paddingVertical: 40,
            }}
            showsVerticalScrollIndicator={false}
          >

            {/* Title */}
            <MotiView
              from={{ opacity: 0, translateY: -8 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: "timing", duration: 350, easing: Easing.out(Easing.cubic) }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 28,
                  color: "#FFFFFF",
                  textAlign: "center",
                  marginBottom: 6,
                }}
              >
                Welcome Back
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 14,
                  color: "#D1D5DB",
                  textAlign: "center",
                  marginBottom: 26,
                }}
              >
                Login to continue your digital banking
              </Text>
            </MotiView>

            {/* Form */}
            <InputField
              label="Email or Phone"
              placeholder="name@gmail.com / +62..."
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
              keyboardType="email-address"
            />

            <InputField
              label="Password"
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* Forgot Password */}
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#F97373",
                  textAlign: "right",
                  fontSize: 13,
                  marginTop: 6,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login CTA */}
            <PrimaryButton
              title="Login"
              style={{ marginTop: 28 }}
              disabled={!canLogin}
              onPress={() => router.push("/screens/HomeScreen")}
            />

            {/* Divider */}
            <Text
              style={{
                color: "#9CA3AF",
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                textAlign: "center",
                marginVertical: 22,
              }}
            >
              Don’t have an account?
            </Text>

            {/* Create Account CTA */}
            <TouchableOpacity onPress={() => router.push("/screens/CreateAccount")}>
              <Text
                style={{
                  color: "#F97373",
                  fontFamily: "Poppins-SemiBold",
                  textAlign: "center",
                  fontSize: 14,
                }}
              >
                Create a new account
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
