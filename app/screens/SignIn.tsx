import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Easing } from "react-native-reanimated";
import CimbHeader from "../components/createAccount/HeaderTop";
import PrimaryButton from "../components/PrimaryButton"; // ⬅️ Replace LoginButton import
import BackgroundArt from "../components/signIn/BackgroundArt";
import QuickServices from "../components/signIn/QuickServices";

export default function SignIn() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1A0A0A", "#3B0F12", "#7A0E18"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: 20,
          }}
        >
          {/* HEADER */}
          <MotiView
            from={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "timing",
              duration: 400,
              easing: Easing.out(Easing.cubic),
            }}
          >
            <CimbHeader />
          </MotiView>

          {/* CARD / BACKGROUND ART */}
          <MotiView
            from={{ opacity: 0, scale: 0.96, translateY: 10 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{
              type: "timing",
              duration: 450,
              delay: 120,
              easing: Easing.out(Easing.cubic),
            }}
            style={{ marginTop: 48, marginBottom: 48 , alignItems: "center" }}
          >
            <BackgroundArt />
          </MotiView>

          {/* TAGLINE */}
          <MotiView
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "timing",
              duration: 400,
              delay: 220,
              easing: Easing.out(Easing.cubic),
            }}
            style={{ marginTop: 24 }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 26,
                color: "#F9FAFB",
                lineHeight: 32,
              }}
            >
              Banking made{" "}
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  color: "#F97373",
                }}
              >
                simple
              </Text>{" "}
              and{" "}
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  color: "#F97373",
                }}
              >
                smarter.
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 13,
                color: "#D1D5DB",
                marginTop: 6,
              }}
            >
              Log in to manage your accounts, cards, and daily transactions.
            </Text>
          </MotiView>

          {/* QUICK SERVICES */}
          <MotiView
            from={{ opacity: 0, translateY: 12 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              damping: 16,
              stiffness: 160,
              delay: 320,
            }}
            style={{ marginTop: 24 }}
          >
            <QuickServices />
          </MotiView>

          {/* LOGIN BUTTON replaced with PRIMARY BUTTON */}
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "timing",
              duration: 350,
              delay: 420,
              easing: Easing.out(Easing.cubic),
            }}
            style={{ marginTop: 30 }}
          >
            <PrimaryButton
              title="Login to CIMB"
              onPress={() => router.push("/screens/LoginForm")}
            />

            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 13,
                color: "#9CA3AF",
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Want to login with a different account?
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
                color: "#F97373",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              Change account
            </Text>
          </MotiView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
