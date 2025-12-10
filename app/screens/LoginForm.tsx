import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { AnimatePresence, MotiView } from "moti";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

export default function LoginForm() {
  const router = useRouter();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong" | null>(null);
  const [showBiometrics, setShowBiometrics] = useState(false);
  const [bioError, setBioError] = useState(false);

  const canLogin = emailOrPhone && password;

  // SMART INPUT DETECTION
  const getInputType = () => {
    if (emailOrPhone.includes("@")) return "email";
    if (/^(\+?62|08)\d+$/.test(emailOrPhone)) return "phone";
    return null;
  };

  // PASSWORD STRENGTH
  useEffect(() => {
    if (!password) return setPasswordStrength(null);
    if (password.length < 6) return setPasswordStrength("weak");
    if (password.length < 10) return setPasswordStrength("medium");
    return setPasswordStrength("strong");
  }, [password]);

  // BIOMETRICS AUTH
  const triggerBiometrics = async () => {
    const has = await LocalAuthentication.hasHardwareAsync();
    if (!has) return;

    const supported = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (supported.length === 0) return;

    setShowBiometrics(true);

    setTimeout(async () => {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate",
      });

      if (result.success) {
        setShowBiometrics(false);
        router.push("/screens/HomeScreen");
      } else {
        setBioError(true);
        setTimeout(() => setBioError(false), 900);
      }
    }, 600);
  };

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 26,
              paddingVertical: 40,
            }}
          >

            {/* ===== HEADER (LOGO + SECURITY TAG) ===== */}
            <View style={{ alignItems: "center", marginBottom: 40, marginTop: 10 ,           shadowColor: "#C8102E",
          shadowOpacity: 10,
          shadowRadius: 40,
          shadowOffset: { width: 12, height: 0 },
          elevation: 12, }}>
              
              {/* Glow */}
              <View
                style={{
                  position: "absolute",
                  width: 180,
                  height: 70,
                }}
              />

              <Image
                source={require("../../assets/images/cimb-logo.webp")}
                style={{ width: 150, height: 50 }}
                resizeMode="contain"
              />

              <Text
                style={{
                  color: "#FFFFFF66",
                  fontFamily: "Poppins-Regular",
                  fontSize: 11,
                  marginTop: 6,
                }}
              >
                Secured by CIMB Digital Identity Layer
              </Text>
            </View>

            {/* ===== HERO TEXT ===== */}
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 30,
                color: "#FFFFFF",
                marginBottom: 6,
              }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 15,
                color: "#D1D5DB",
                marginBottom: 32,
                lineHeight: 20,
              }}
            >
              Continue where you left off securely.
            </Text>

            {/* ===== INPUT FIELDS ===== */}
            <InputField
              label="Email or Phone"
              placeholder="name@gmail.com / +62..."
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
            />

            {/* Smart input helper */}
            {getInputType() && (
              <Text
                style={{
                  color: "#FFFFFF88",
                  fontFamily: "Poppins-Medium",
                  fontSize: 12,
                  marginTop: -12,
                  marginBottom: 12,
                }}
              >
                Detected as: {getInputType() === "email" ? "Email" : "Phone Number"}
              </Text>
            )}

            <InputField
              label="Password"
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* PASSWORD STRENGTH */}
            <AnimatePresence>
              {passwordStrength && (
                <MotiView
                  from={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ marginTop: -10, marginBottom: 20 }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: 12,
                      color:
                        passwordStrength === "weak"
                          ? "#C8102E"
                          : passwordStrength === "medium"
                          ? "#FACC15"
                          : "#4ADE80",
                    }}
                  >
                    Password strength: {passwordStrength}
                  </Text>
                </MotiView>
              )}
            </AnimatePresence>

            {/* Forgot Password */}
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#F97373",
                  textAlign: "right",
                  fontSize: 13,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* LOGIN CTA */}
            <PrimaryButton
              title="Login"
              disabled={!canLogin}
              style={{ marginTop: 32 }}
              onPress={() => router.push("/screens/HomeScreen")}
            />

            {/* BIOMETRICS LOGIN */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={triggerBiometrics}
              style={{
                marginTop: 26,
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Ionicons name="finger-print" size={22} color="#FFFFFF" />
              <Text
                style={{
                  color: "#FFFFFFCC",
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 14,
                }}
              >
                Login with biometrics
              </Text>
            </TouchableOpacity>

            {/* SIGN UP */}
            <Text
              style={{
                color: "#9CA3AF",
                fontFamily: "Poppins-Regular",
                textAlign: "center",
                fontSize: 12,
                marginTop: 30,
              }}
            >
              Don’t have an account?
            </Text>

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

        {/* BIOMETRICS SHEET */}
        <Modal visible={showBiometrics} transparent animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: "#000000aa",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotiView
              from={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                width: 260,
                padding: 24,
                borderRadius: 22,
                backgroundColor: "#1A1A1A",
                borderWidth: 1,
                borderColor: "#ffffff22",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="finger-print"
                size={50}
                color={bioError ? "#C8102E" : "#FFFFFF"}
              />

              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Poppins-SemiBold",
                  marginTop: 12,
                  fontSize: 16,
                }}
              >
                {bioError ? "Authentication Failed" : "Hold to Authenticate"}
              </Text>

              <TouchableOpacity
                onPress={() => setShowBiometrics(false)}
                style={{ marginTop: 18 }}
              >
                <Text style={{ color: "#F97373", fontFamily: "Poppins-Medium" }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </MotiView>
          </View>
        </Modal>

      </SafeAreaView>
    </LinearGradient>
  );
}
