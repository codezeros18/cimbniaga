import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountSummary() {
  return (
    <View style={{ paddingHorizontal: 24, marginTop: 18 }}>
      <LinearGradient
        colors={["#3D0C0C", "#7A0E0E", "#150404"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 24,
          padding: 20,
          shadowColor: "#000",
          shadowOpacity: 0.35,
          shadowRadius: 16,
          elevation: 8,
          position: "relative",
        }}
      >
        {/* Settings Icon */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            padding: 6,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
        >
          <Feather name="settings" size={18} color="#F9FAFB" />
        </TouchableOpacity>

        {/* Name */}
        <View style={{ alignItems: "center", marginTop: 4 }}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 12,
              color: "#9CA3AF",
            }}
          >
            Mr.
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 20,
              color: "#F9FAFB",
              marginTop: 4,
              textAlign: "center",
            }}
          >
            Lintang Balakosa Ardhana
          </Text>
        </View>

        {/* Divider */}
        <View
          style={{
            height: 1,
            backgroundColor: "rgba(249,250,251,0.12)",
            marginVertical: 16,
          }}
        />

        {/* Balance & Bonus */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* Balance */}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 11,
                color: "#9CA3AF",
                letterSpacing: 1,
              }}
            >
              BALANCE
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 18,
                  color: "#F9FAFB",
                  marginRight: 6,
                }}
              >
                Rp 24.092.890
              </Text>
              <View
                style={{
                  backgroundColor: "#C8102E",
                  borderRadius: 999,
                  padding: 4,
                }}
              >
                <Feather name="arrow-right" size={14} color="#FFFFFF" />
              </View>
            </View>
          </View>

          {/* Bonuses */}
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 11,
                color: "#9CA3AF",
                letterSpacing: 1,
              }}
            >
              BONUSES
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 18,
                  color: "#F9FAFB",
                  marginRight: 6,
                }}
              >
                Rp 12.550
              </Text>
              <View
                style={{
                  backgroundColor: "#C8102E",
                  borderRadius: 999,
                  padding: 4,
                }}
              >
                <Feather name="arrow-right" size={14} color="#FFFFFF" />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
