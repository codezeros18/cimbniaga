import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HeaderTop() {
  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LOGO + GLOW WRAPPER */}
      <View
        style={{
          shadowColor: "#FFFFFF",
          shadowOpacity: 1,
          shadowRadius: 40,
          shadowOffset: { width: 30, height: 0 },
          elevation: 12,
        }}
      >
        <Image
          source={require("../../../assets/images/cimb-logo.webp")}
          style={{ width: 140, height: 50 }}
          resizeMode="contain"
        />
      </View>

      {/* LANGUAGE BUTTON */}
      <TouchableOpacity
        style={{
          paddingVertical: 4,
          paddingHorizontal: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#ffffff55",
        }}
        activeOpacity={0.8}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 12,
            color: "#FFFFFF",
          }}
        >
          EN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
