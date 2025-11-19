import { LinearGradient } from "expo-linear-gradient";
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
    <View className="mt-10 px-6 mb-10">
      {/* Section Title */}
      <Text
        style={{ fontFamily: "Poppins-SemiBold" }}
        className="text-white text-lg mb-5"
      >
        Your Subscriptions
      </Text>

      {/* Subscription Cards */}
      <View className="flex-row justify-between">
        {items.map((item, i) => (
          <LinearGradient
            key={i}
            colors={["#FFFFFF", "#FFEAEA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "30%",
              borderRadius: 20,
              paddingVertical: 16,
              paddingHorizontal: 10,
              shadowColor: "#C8102E",
              shadowOpacity: 0.25,
              shadowRadius: 8,
              elevation: 8,
              position: "relative",
            }}
          >
            {/* Red subtle overlay for harmony */}
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 20,
                backgroundColor: "rgba(200,16,46,0.06)",
              }}
            />

            {/* Content */}
            <View className="items-center">
              {/* Icon */}
              <View className="bg-[#C8102E]/10 rounded-full p-3 mb-2">
                <Image
                  source={item.icon}
                  className="w-8 h-8"
                  resizeMode="contain"
                />
              </View>

              {/* Name */}
              <Text
                style={{ fontFamily: "Poppins-Medium" }}
                className="text-[11px] text-cimb-dark text-center leading-tight"
                numberOfLines={2}
              >
                {item.name}
              </Text>

              {/* Price */}
              <Text
                style={{ fontFamily: "Poppins-Regular" }}
                className="text-[11px] text-cimb-red mt-1"
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
