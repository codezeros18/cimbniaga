import { Image, Text, TouchableOpacity, View } from "react-native";

export default function QuickServices() {
  const services = [
    { name: "Flazz", icon: require("../../../assets/images/flazz.png") },
    { name: "QRIS", icon: require("../../../assets/images/qr.png") },
    { name: "Transfer", icon: require("../../../assets/images/qris.png") },
    { name: "Cardless", icon: require("../../../assets/images/card.png") },
  ];

  return (
    <View className="flex-row justify-between px-8 mt-10">
      {services.map((s, i) => (
        <TouchableOpacity key={i} className="items-center">
          <View className="bg-[#FFF5F5] p-3 rounded-2xl shadow-sm">
            <Image
              source={s.icon}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </View>
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-xs text-gray-700 mt-2"
          >
            {s.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
