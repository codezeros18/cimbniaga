import { View, Image, ScrollView, Dimensions } from "react-native";
import React from "react";

export default function HeaderSlider() {
  const banners = [
    require("../../assets/images/cimb.webp"),
    require("../../assets/images/cimb.webp"),
    require("../../assets/images/cimb.webp"),
  ];

  const { width } = Dimensions.get("window"); // ambil lebar layar

  return (
    <View className="bg-white mt-8 -mb-4">
    <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="h-56"
    >
        {banners.map((img, i) => (
        <Image
            key={i}
            source={img}
            style={{
            width: width - 40,
            height: 160,
            marginHorizontal: 20,
            borderRadius: 16,
            resizeMode: "cover",
            }}
        />
        ))}
    </ScrollView>
    </View>
  );
}
