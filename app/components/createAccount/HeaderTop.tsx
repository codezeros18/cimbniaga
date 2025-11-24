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
      <Image
        source={require("../../../assets/images/cimb-logo.webp")}
        style={{ width: 140, height: 50 }}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={{
          paddingVertical: 4,
          paddingHorizontal: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#ffffff55",
        }}
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
