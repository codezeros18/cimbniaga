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
    description: "No admin fees. Best for daily transactions.",
  },
  {
    id: "xtra_dana",
    title: "Xtra Dana",
    description: "Flexible savings with competitive interest rate.",
  },
  {
    id: "xtra_premier",
    title: "Xtra Premier",
    description: "Higher limits and priority premium banking services.",
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
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 24,
            paddingBottom: 90,
          }}
        >

          {/* Heading */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 26,
              color: "#FFFFFF",
              marginBottom: 8,
            }}
          >
            Select Account Type
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D1D5DB",
              marginBottom: 26,
            }}
          >
            Choose based on your needs — can be updated before signing.
          </Text>

          {/* Tip box */}
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: 16,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "rgba(200,16,46,0.4)",
              marginBottom: 28,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
                color: "#FFB3B3",
                marginBottom: 3,
              }}
            >
              💡 Quick Tip
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#CCCCCC",
              }}
            >
              You can update your choice before digital signature.
            </Text>
          </View>

          {/* Options */}
          {accountOptions.map((item) => {
            const active = selectedId === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                onPress={() => setSelectedId(item.id)}
                style={{
                  padding: 18,
                  borderRadius: 22,
                  marginBottom: 16,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderWidth: active ? 2 : 1,
                  borderColor: active ? "#C8102E" : "rgba(255,255,255,0.12)",
                  shadowColor: active ? "#C8102E" : "#000",
                  shadowOpacity: active ? 0.3 : 0.05,
                  shadowRadius: active ? 12 : 4,
                  elevation: active ? 10 : 2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 16,
                        color: "#FFFFFF",
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 12,
                        color: "#B5B5B5",
                        marginTop: 4,
                      }}
                    >
                      {item.description}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      backgroundColor: active ? "#C8102E" : "transparent",
                      borderWidth: 2,
                      borderColor: active ? "#C8102E" : "#6B7280",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {active && (
                      <Feather name="check" size={14} color="#FFF" />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* Button */}
          <PrimaryButton
            title="Continue"
            disabled={!selectedId}
            onPress={handleNext}
            style={{ marginTop: 40 }}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
