import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AnimatePresence } from "moti";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import FloatingMenu from "./FloatingMenu";

export default function BottomNavbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <>
      {/* Floating Menu */}
      <AnimatePresence>
        {isMenuVisible && <FloatingMenu onClose={() => setMenuVisible(false)} />}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <LinearGradient
        colors={["#1A1A1A", "#3A0A0A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute bottom-0 left-0 right-0 flex-row justify-between items-center px-8 py-4"
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "#C8102E",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 8,
        }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Feather name="home" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Feather name="credit-card" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setMenuVisible(!isMenuVisible)}
          style={{
            width: 64,
            height: 64,
            backgroundColor: "#C8102E",
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            shadowColor: "#C8102E",
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 10,
          }}
        >
          <Feather name={isMenuVisible ? "x" : "plus"} size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Feather name="repeat" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Feather name="user" size={22} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}
