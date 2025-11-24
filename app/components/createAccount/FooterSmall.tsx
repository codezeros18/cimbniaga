import { Text, View } from "react-native";

export default function FooterSmall() {
  return (
    <View style={{ marginTop: 50, alignItems: "center", paddingBottom: 30 }}>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 11,
          color: "#9CA3AF"
        }}
      >
        © 2025 CIMB Niaga Digital Banking
      </Text>
    </View>
  );
}
