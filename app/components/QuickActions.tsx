import { View, Image, Text, TouchableOpacity } from "react-native";

export default function QuickActions() {
  const actions = [
    { name: "Flazz", icon: require("../../assets/images/flazz.png") },
    { name: "Scan QRIS", icon: require("../../assets/images/qr.png") },
    { name: "QRIS Transfer", icon: require("../../assets/images/qris.png") },
    { name: "Cardless", icon: require("../../assets/images/cardless.png") },
  ];

  return (
    <View className="px-6">
      <View
        className="flex-row justify-between py-4 px-2 rounded-2xl shadow-sm"
        style={{
          backgroundColor: "#FFF5F5", // 👈 Merah lembut khas CIMB
        }}
      >
        {actions.map((a, i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            className="items-center flex-1"
          >
            <View
              className="p-3 rounded-xl mb-1"
              style={{ backgroundColor: "rgba(200,16,46,0.06)" }} // merah semi-transparan
            >
              <Image
                source={a.icon}
                className="w-8 h-8"
                resizeMode="contain"
              />
            </View>
            <Text className="text-cimb-dark text-xs font-medium">{a.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
