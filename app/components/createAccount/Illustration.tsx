import { Dimensions, Image, View } from "react-native";
const { width } = Dimensions.get("window");

export default function Illustration() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/images/illustration-onboarding.webp")}
        style={{
          width: Math.min(width - 100, 260),
          height: Math.min(width - 100, 260),
        }}
        resizeMode="contain"
      />
    </View>
  );
}
