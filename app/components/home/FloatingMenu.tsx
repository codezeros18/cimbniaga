import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { height } = Dimensions.get("window");

export default function FloatingMenu({ onClose }: { onClose: () => void }) {
  const options: { icon: React.ComponentProps<typeof Feather>["name"]; label: string }[] = [
    { icon: "arrow-up", label: "Transfer" },
    { icon: "credit-card", label: "Pay Bills" },
    { icon: "plus", label: "Add Subscription" },
    { icon: "user", label: "Invite Friend" },
  ];

  return (
    <>
      {/* 🔳 Overlay Background (buat gelap transparan pas muncul) */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"
      />

      {/* 🧩 Floating menu card */}
      <MotiView
        from={{ translateY: height, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: height, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
        className="absolute bottom-32 left-0 right-0 px-6"
      >
        <View
          className="bg-[#1A1A1A]/95 rounded-3xl py-6 px-5"
          style={{
            shadowColor: "#C8102E",
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 10,
          }}
        >
          {options.map((opt, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              className="flex-row items-center justify-between py-3 border-b border-white/10"
              onPress={onClose}
            >
              <View className="flex-row items-center space-x-3">
                <Feather name={opt.icon} size={20} color="#FFF" />
                <Text
                  style={{ fontFamily: "Poppins-Medium" }}
                  className="text-white text-base"
                >
                  {opt.label}
                </Text>
              </View>
              <Feather name="chevron-right" size={18} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>
      </MotiView>
    </>
  );
}
