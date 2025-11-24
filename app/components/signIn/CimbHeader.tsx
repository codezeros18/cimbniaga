import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CimbHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 8,
      }}
    >
      <Image
        source={require("../../../assets/images/cimb-logo.webp")}
        style={{ width: 140, height: 40 }}
        resizeMode="contain"
      />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 12 }}
        >
          <Feather name="headphones" size={22} color="#F9FAFB" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderWidth: 1,
            borderColor: "rgba(249,250,251,0.7)",
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 999,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 11,
              color: "#F9FAFB",
            }}
          >
            EN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
