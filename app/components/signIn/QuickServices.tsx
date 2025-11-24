import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const services = [
  { name: "Flazz", icon: require("../../../assets/images/flazz.png") },
  { name: "QRIS", icon: require("../../../assets/images/qr.png") },
  { name: "Transfer", icon: require("../../../assets/images/qris.png") },
  { name: "Cardless", icon: require("../../../assets/images/card.png") },
];

export default function QuickServices() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {services.map((s, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={0.85}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              padding: 10,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.16)",
              shadowColor: "#000",
              shadowOpacity: 0.18,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <Image
              source={s.icon}
              style={{ width: 32, height: 32 }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 11,
              color: "#E5E7EB",
              marginTop: 6,
            }}
          >
            {s.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
