import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiText, MotiView } from "moti";
import React from "react";
import { Image, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StatusScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1A0A0A", "#3B0F12", "#7A0E18"]}
      style={{
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* SUCCESS ICON */}
      <MotiView
        from={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 200 }}
        style={{
          width: 130,
          height: 130,
          borderRadius: 65,
          backgroundColor: "rgba(200,16,46,0.15)",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#C8102E",
          shadowOpacity: 0.4,
          shadowRadius: 20,
          marginBottom: 20,
        }}
      >
        <Image
          source={require("../../assets/images/check.png")}
          style={{ width: 70, height: 70, tintColor: "#C8102E" }}
          resizeMode="contain"
        />
      </MotiView>

      {/* TITLE */}
      <MotiText
        from={{ opacity: 0, translateY: 14 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 320 }}
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 28,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        You're All Set!
      </MotiText>

      {/* SUBTITLE */}
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 450 }}
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          color: "#FFFFFF99",
          textAlign: "center",
          lineHeight: 22,
          marginTop: 10,
        }}
      >
        Your account is now being reviewed securely.
        We’ll notify you once it's ready to use.
      </MotiText>

      {/* SECURITY & TRUST INDICATOR */}
      <MotiView
        from={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 600 }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 14,
          borderRadius: 14,
          backgroundColor: "rgba(255,255,255,0.06)",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.10)",
        }}
      >
        <Feather name="shield" size={16} color="#C8102E" />
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 12,
            color: "#FFFFFFCC",
            marginLeft: 8,
          }}
        >
          Biometric + document identity successfully matched.
        </Text>
      </MotiView>

      {/* STATUS CARD */}
      <View
        style={{
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: 22,
          padding: 20,
          marginTop: 34,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        {[
          "Document verification in progress",
          "Identity validation completed",
          "Final approval pending",
        ].map((item, index) => (
          <MotiView
            key={index}
            from={{ opacity: 0, translateX: -12 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 750 + index * 200 }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: index !== 2 ? 14 : 0,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#C8102E",
                borderRadius: 4,
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 13,
                color: "#FFFFFFCC",
              }}
            >
              {item}
            </Text>
          </MotiView>
        ))}
      </View>

      {/* CTA */}
      <PrimaryButton
        title="Back to Home"
        onPress={() => router.push("/")}
        style={{ marginTop: 46 }}
      />

      {/* FOOTER */}
      <Text
        style={{
          fontFamily: "Poppins-Light",
          fontSize: 10,
          color: "#FFFFFF55",
          marginTop: 28,
        }}
      >
        © 2025 CIMB Niaga Digital Banking
      </Text>
    </LinearGradient>
  );
}
