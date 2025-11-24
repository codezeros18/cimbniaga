import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { height } = Dimensions.get("window");

type Option = {
  icon: React.ComponentProps<typeof Feather>["name"];
  label: string;
};

export default function FloatingMenu({ onClose }: { onClose: () => void }) {
  const options: Option[] = [
    { icon: "arrow-up", label: "Transfer" },
    { icon: "credit-card", label: "Pay Bills" },
    { icon: "plus", label: "Add Subscription" },
    { icon: "user", label: "Invite Friend" },
  ];

  return (
    <>
      {/* Overlay */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Floating card */}
      <MotiView
        from={{ translateY: height, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: height, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
        style={{ position: "absolute", left: 0, right: 0, bottom: 100, paddingHorizontal: 24 }}
      >
        <View
          style={{
            backgroundColor: "rgba(15,15,18,0.96)",
            borderRadius: 24,
            paddingVertical: 16,
            paddingHorizontal: 16,
            shadowColor: "#C8102E",
            shadowOpacity: 0.3,
            shadowRadius: 12,
            elevation: 12,
          }}
        >
          {options.map((opt, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              onPress={onClose}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomWidth: i !== options.length - 1 ? 1 : 0,
                borderBottomColor: "rgba(255,255,255,0.08)",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name={opt.icon} size={20} color="#F9FAFB" />
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: 14,
                    color: "#F9FAFB",
                    marginLeft: 10,
                  }}
                >
                  {opt.label}
                </Text>
              </View>
              <Feather name="chevron-right" size={18} color="#E5E7EB" />
            </TouchableOpacity>
          ))}
        </View>
      </MotiView>
    </>
  );
}
