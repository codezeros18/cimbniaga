import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

export default function BottomSlider() {
  const items = [
    {
      name: "KPR CIMB Application",
      icon: require("../../assets/images/cimb.webp"),
    },
    {
      name: "OCTO by CIMB Digital",
      icon: require("../../assets/images/cimb.webp"),
    },
    {
      name: "CIMB Syariah",
      icon: require("../../assets/images/cimb.webp"),
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-6 px-4 mb-8"
    >
      {items.map((item, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={0.85}
          className="flex-row items-center rounded-2xl px-3 py-2 mr-3"
          style={{
            backgroundColor: "#FFF5F5", // 👈 Merah lembut khas CIMB
          }}
        >
          {/* Logo container */}
          <View
            style={{
              backgroundColor: "rgba(200,16,46,0.06)", // merah muda lembut di belakang icon
              borderRadius: 12,
              padding: 6,
              marginRight: 8,
            }}
          >
            <Image
              source={item.icon}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </View>

          {/* Text */}
          <Text
            className="text-xs font-medium"
            style={{ color: "#8B0000", width: 110 }} // merah gelap untuk teks
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
