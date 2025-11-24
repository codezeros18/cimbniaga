import React from "react";
import { Image, View } from "react-native";

export default function BackgroundArt() {
  return (
    <View
      style={{
        width: 260,
        height: 160,
        borderRadius: 28,
        backgroundColor: "rgba(255,255,255,0.04)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.15)",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 18,
        elevation: 10,
      }}
    >
      <Image
        source={require("../../../assets/images/card.png")}
        style={{ width: 240, height: 140 }}
        resizeMode="contain"
      />
    </View>
  );
}
