import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet, // ✅ tambahkan ini
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
    <View className="mt-8">
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
              borderRadius: 28,
              marginRight: 16,
              shadowColor: "#C8102E",
              shadowOpacity: 0.25,
              shadowRadius: 12,
              elevation: 8,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Base gradient background */}
            <LinearGradient
              colors={["#FFFFFF", "#FFF5F5", "#FFD7D7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFillObject}
            />

            {/* Overlay radial soft reflection */}
            <LinearGradient
              colors={[
                "rgba(255,255,255,0.5)",
                "rgba(255,255,255,0.2)",
                "transparent",
              ]}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 0.8, y: 1 }}
              style={[
                StyleSheet.absoluteFillObject,
                { borderRadius: 28 },
              ]}
            />

            {/* Subtle dark vignette to soften edges */}
            <LinearGradient
              colors={[
                "transparent",
                "rgba(0,0,0,0.08)",
                "rgba(0,0,0,0.12)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[
                StyleSheet.absoluteFillObject,
                { borderRadius: 28 },
              ]}
            />

            {/* --- Card Content --- */}
            <View style={{ padding: 20 }}>
              {/* Header */}
              <View className="flex-row justify-between items-center mb-2">
                <Image
                  source={require("../../../assets/images/cimb-logo.webp")}
                  style={{ width: 100, height: 40 }}
                  resizeMode="contain"
                />
                <Text
                  style={{ fontFamily: "Poppins-SemiBold" }}
                  className="text-cimb-dark text-lg"
                >
                  Rp {card.balance}
                </Text>
              </View>

              {/* Chip + Card number */}
              <View className="flex-row justify-between mt-6">
                <View>
                  <Image
                    source={require("../../../assets/images/card.png")}
                    style={{ width: 38, height: 30 }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{ fontFamily: "Poppins-SemiBold" }}
                    className="text-cimb-dark text-sm mt-2 tracking-widest"
                  >
                    {card.number}
                  </Text>
                </View>

                <View className="items-end">
                  <Text
                    style={{ fontFamily: "Poppins-Regular" }}
                    className="text-gray-600 text-xs"
                  >
                    VALID THRU
                  </Text>
                  <Text
                    style={{ fontFamily: "Poppins-SemiBold" }}
                    className="text-cimb-dark text-sm mt-1"
                  >
                    {card.valid}
                  </Text>
                </View>
              </View>

              {/* Footer */}
              <View className="flex-row justify-between items-center mt-6">
                <Text
                  style={{ fontFamily: "Poppins-Regular" }}
                  className="text-cimb-dark text-sm"
                >
                  {card.name}
                </Text>
                <Feather name="credit-card" size={20} color="#C8102E" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Pagination dots */}
      <View className="flex-row justify-center mt-4">
        <View className="w-8 h-2 bg-cimb-red rounded-full mx-1" />
        <View className="w-3 h-2 bg-gray-400/60 rounded-full mx-1" />
      </View>
    </View>
  );
}
