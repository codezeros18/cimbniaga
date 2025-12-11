import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const accountOptions = [
  {
    id: "octo_savers",
    title: "OCTO Savers",
    description: "Daily transactions with zero admin fees.",
  },
  {
    id: "xtra_dana",
    title: "Xtra Dana",
    description: "Flexible savings with competitive interest.",
  },
  {
    id: "xtra_premier",
    title: "Xtra Premier",
    description: "Higher limits & priority premium services.",
  },
];

export default function AccountTypeSelection() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleNext = () => {
    const selected = accountOptions.find((o) => o.id === selectedId);
    if (!selected) return;
    router.push({
      pathname: "/screens/ReviewAndSign",
      params: {
        accountTypeId: selectedId,
        accountTypeName: selected.title,
      },
    });
  };

  return (
    <LinearGradient
      colors={["#3D0C0C", "#7A0E0E", "#150404"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 24,
            paddingBottom: 100,
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {/* STEP INDICATOR */}
                    <View style={{ alignItems: "center", marginBottom: 20 }}>
                      <Text
                        style={{
                          fontFamily: "Poppins-Medium",
                          fontSize: 13,
                          color: "#D1D5DB",
                        }}
                      >
                        Step <Text style={{ color: "#C8102E" }}>6</Text> of 7
                      </Text>
                    </View>
          {/* Heading */}
          <View style={{ marginBottom: 32 }}>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 28,
                color: "#FFFFFF",
                textAlign: "center",
                marginBottom: 6,
              }}
            >
              Choose Your Account
            </Text>

            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 14,
                color: "#CFCFCF",
                textAlign: "center",
              }}
            >
              Select the best fit for your financial needs.
            </Text>
          </View>

          {/* Tip Box */}
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              padding: 18,
              borderRadius: 18,
              borderWidth: 1.2,
              borderColor: "rgba(200,16,46,0.45)",
              marginBottom: 32,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
                color: "#FFB1B1",
                marginBottom: 2,
              }}
            >
              💡 Tip
            </Text>

            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#D4D4D4",
                lineHeight: 18,
              }}
            >
              You can still change your selection before signing the agreement.
            </Text>
          </View>

          {/* Option Cards */}
          {accountOptions.map((item) => {
            const active = selectedId === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.88}
                onPress={() => setSelectedId(item.id)}
                style={{
                  padding: 20,
                  borderRadius: 24,
                  marginBottom: 18,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderWidth: active ? 2 : 1,
                  borderColor: active
                    ? "rgba(200,16,46,0.9)"
                    : "rgba(255,255,255,0.12)",
                  shadowColor: active ? "#C8102E" : "#000",
                  shadowOpacity: active ? 0.32 : 0.08,
                  shadowRadius: active ? 14 : 4,
                  elevation: active ? 10 : 1,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 17,
                        color: "#FFFFFF",
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 13,
                        color: "#BEBEBE",
                        marginTop: 4,
                      }}
                    >
                      {item.description}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 27,
                      height: 27,
                      borderRadius: 14,
                      backgroundColor: active ? "#C8102E" : "transparent",
                      borderWidth: 2,
                      borderColor: active ? "#C8102E" : "#6B6B6B",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {active && <Feather name="check" size={14} color="#FFF" />}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* CTA Button */}
          <PrimaryButton
            title="Continue"
            disabled={!selectedId}
            onPress={handleNext}
            style={{ marginTop: 40 }}
          />
          {/* FOOTER */}
                <Text
                  style={{
                    fontFamily: "Poppins-Light",
                    fontSize: 10,
                    color: "#FFFFFF55",
                    marginTop: 28,
                    textAlign: "center",
                  }}
                >
                  © 2025 CIMB Niaga Digital Banking
                </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
