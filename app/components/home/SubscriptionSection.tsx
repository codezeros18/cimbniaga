import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";

export default function SubscriptionSection() {
  const items = [
    {
      name: "Netflix Premium",
      price: "Rp 159.000",
      icon: require("../../../assets/images/netflix.png"),
    },
    {
      name: "Spotify Premium",
      price: "Rp 54.990",
      icon: require("../../../assets/images/spotify.png"),
    },
    {
      name: "Apple Music",
      price: "Rp 59.000",
      icon: require("../../../assets/images/apple.png"),
    },
  ];

  return (
    <View style={{ marginTop: 28, paddingHorizontal: 24, marginBottom: 24 }}>
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 16,
          color: "#F9FAFB",
          marginBottom: 14,
        }}
      >
        Your Subscriptions
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {items.map((item, i) => (
          <LinearGradient
            key={i}
            colors={["#0B0B0F", "#1A141B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "30%",
              borderRadius: 18,
              paddingVertical: 14,
              paddingHorizontal: 10,
              shadowColor: "#000",
              shadowOpacity: 0.4,
              shadowRadius: 10,
              elevation: 8,
            }}
          >
            <View style={{ alignItems: "center" }}>
              {/* Icon */}
              <View
                style={{
                  backgroundColor: "rgba(249,250,251,0.08)",
                  borderRadius: 999,
                  padding: 6,
                  marginBottom: 6,
                }}
              >
                <Image
                  source={item.icon}
                  style={{ width: 22, height: 22 }}
                  resizeMode="contain"
                />
              </View>

              {/* Name */}
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 11,
                  color: "#E5E7EB",
                  textAlign: "center",
                }}
                numberOfLines={2}
              >
                {item.name}
              </Text>

              {/* Price */}
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 11,
                  color: "#F97373",
                  marginTop: 4,
                }}
              >
                {item.price}
              </Text>
            </View>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
}
