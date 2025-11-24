import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const cards = [
  {
    name: "Lintang Balakosa Ardhana",
    balance: "7.835.290",
    number: "4092 09** **** 0043",
    valid: "04/28",
  },
  {
    name: "Lintang Balakosa Ardhana",
    balance: "12.100.500",
    number: "5231 43** **** 0099",
    valid: "05/27",
  },
];

export default function CardCarousel() {
  return (
    <View style={{ marginTop: 24 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        {cards.map((card, i) => (
          <View
            key={i}
            style={{
              width: width * 0.82,
              borderRadius: 26,
              marginRight: 16,
              shadowColor: "#000",
              shadowOpacity: 0.4,
              shadowRadius: 14,
              elevation: 10,
              overflow: "hidden",
            }}
          >
            {/* Dark premium gradient background */}
            <LinearGradient
              colors={["#050816", "#17121C", "#2A0F15"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFillObject}
            />

            {/* Subtle highlight overlay */}
            <LinearGradient
              colors={[
                "rgba(255,255,255,0.15)",
                "transparent",
                "rgba(200,16,46,0.14)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[StyleSheet.absoluteFillObject, { borderRadius: 26 }]}
            />

            {/* Card Content */}
            <View style={{ padding: 20 }}>
              {/* Top row: logo & balance */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../../assets/images/cimb-logo.webp")}
                  style={{ width: 100, height: 40 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 18,
                    color: "#F9FAFB",
                  }}
                >
                  Rp {card.balance}
                </Text>
              </View>

              {/* Chip + number row */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 28,
                }}
              >
                <View>
                  <Image
                    source={require("../../../assets/images/card.png")}
                    style={{ width: 38, height: 30 }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 13,
                      color: "#E5E7EB",
                      marginTop: 10,
                      letterSpacing: 3,
                    }}
                  >
                    {card.number}
                  </Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 11,
                      color: "#9CA3AF",
                    }}
                  >
                    VALID THRU
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 13,
                      color: "#F9FAFB",
                      marginTop: 4,
                    }}
                  >
                    {card.valid}
                  </Text>
                </View>
              </View>

              {/* Footer */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 22,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 13,
                    color: "#E5E7EB",
                  }}
                >
                  {card.name}
                </Text>
                <Feather name="credit-card" size={20} color="#F97373" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Pagination (static mock) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: 18,
            height: 4,
            borderRadius: 999,
            backgroundColor: "#C8102E",
            marginHorizontal: 4,
          }}
        />
        <View
          style={{
            width: 8,
            height: 4,
            borderRadius: 999,
            backgroundColor: "rgba(249,250,251,0.4)",
            marginHorizontal: 4,
          }}
        />
      </View>
    </View>
  );
}
