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
        paddingHorizontal: 4,
      }}
    >
      {services.map((s, i) => (
        <TouchableOpacity key={i} activeOpacity={0.85} style={{ alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              padding: 14,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.14)",
              shadowColor: "#C8102E",
              shadowOpacity: 0.26,
              shadowRadius: 12,
              elevation: 6,
            }}
          >
            <Image
              source={s.icon}
              style={{
                width: 30,
                height: 30,
                tintColor: "#FFFFFF", // <-- MAKE ICON WHITE
              }}
              resizeMode="contain"
            />
          </View>

          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 11,
              color: "#FFFFFFDD",
              marginTop: 8,
            }}
          >
            {s.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
