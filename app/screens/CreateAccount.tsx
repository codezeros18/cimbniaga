// app/screens/CreateAccount.tsx
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import * as Font from "expo-font";
import { MotiView, AnimatePresence } from "moti";

const { width } = Dimensions.get("window");

export default function CreateAccount() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 40 }}
      className="flex-1 bg-white"
    >
      {/* Top header (white so red logo stands out) */}
      <View className="px-6 pt-8">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Image
              source={require("../../assets/images/cimb-logo.webp")}
              style={{ width: 110, height: 28 }}
              resizeMode="contain"
            />
          </View>

          <View className="flex-row items-center space-x-2">
            <View className="rounded-full px-3 py-1 border border-gray-200">
              <Text style={{ fontFamily: "Poppins-Medium" }} className="text-xs">
                EN
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Hero area: white card with red accent beneath header */}
      <View className="px-6 mt-4">
        <AnimatePresence>
          <MotiView
            from={{ translateY: -10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ type: "timing", duration: 450 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
            style={{ paddingBottom: 12 }}
          >
            {/* Red hero block */}
            <View
              style={{
                backgroundColor: "#C8102E",
                paddingTop: 28,
                paddingBottom: 28,
                paddingHorizontal: 22,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              }}
            >
              <Text
                style={{ fontFamily: "Poppins-SemiBold" }}
                className="text-white text-2xl"
              >
                Welcome to CIMB Digital
              </Text>
              <Text
                style={{ fontFamily: "Poppins-Regular" }}
                className="text-white/90 text-sm mt-2 leading-5"
              >
                Open your digital savings account in just a few minutes. Fast,
                secure, and paperless.
              </Text>
            </View>

            {/* Floating hero card (white) with subtle shadow */}
            <MotiView
              from={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 16, stiffness: 120, delay: 120 }}
              style={{
                marginTop: -36,
                marginHorizontal: 16,
                borderRadius: 18,
                backgroundColor: "#fff",
                padding: 16,
                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 20,
                elevation: 6,
              }}
            >
              <View className="flex-row items-center justify-between">
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontFamily: "Poppins-Medium" }}
                    className="text-gray-800 text-lg"
                  >
                    Fast onboarding
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins-Regular" }}
                    className="text-gray-500 text-sm mt-1"
                  >
                    Verify with NIK & selfie — no paperwork required.
                  </Text>
                </View>

                <View className="ml-4 items-center">
                  <View
                    style={{
                      backgroundColor: "rgba(200,18,30,0.06)",
                      padding: 12,
                      borderRadius: 12,
                    }}
                  >
                    <Image
                      source={require("../../assets/images/illustration-onboarding.webp")}
                      style={{ width: 64, height: 64 }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </MotiView>
          </MotiView>
        </AnimatePresence>
      </View>

      {/* Main illustration */}
      <MotiView
        from={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "timing", duration: 500, delay: 300 }}
        className="items-center mt-8"
      >
        <Image
          source={require("../../assets/images/illustration-onboarding.webp")}
          style={{ width: Math.min(width - 80, 320), height: Math.min(width - 80, 320) }}
          resizeMode="contain"
        />
      </MotiView>

      {/* Progress dots */}
      <View className="flex-row justify-center mt-2">
        <View className="w-10 h-2 rounded-full bg-cimb-red mx-1" />
        <View className="w-6 h-2 rounded-full bg-gray-200 mx-1" />
        <View className="w-6 h-2 rounded-full bg-gray-200 mx-1" />
      </View>

      {/* CTA */}
      <View className="px-6 mt-6">
        <MotiView
          from={{ translateY: 12, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 14, stiffness: 140, delay: 420 }}
        >
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/screens/PersonalForm")}
            style={{
              backgroundColor: "#C8102E",
              paddingVertical: 16,
              borderRadius: 14,
              alignItems: "center",
              shadowColor: "#C8102E",
              shadowOpacity: 0.18,
              shadowRadius: 18,
              elevation: 6,
            }}
          >
            <Text
              style={{ fontFamily: "Poppins-SemiBold" }}
              className="text-white text-lg"
            >
              Open a New Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/screens/SignIn")}
            style={{
              marginTop: 12,
              borderWidth: 1,
              borderColor: "#C8102E",
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <Text
              style={{ fontFamily: "Poppins-Medium" }}
              className="text-blue-500 text-base"
            >
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </MotiView>
      </View>

      {/* Small footer */}
      <View className="mt-10 items-center">
        <Text
          style={{ fontFamily: "Poppins-Regular" }}
          className="text-gray-400 text-xs"
        >
          © 2025 CIMB Niaga Digital Banking
        </Text>
      </View>

      {/* bottom safe area */}
      <View style={{ height: 24 }} />
    </ScrollView>
  );
}
