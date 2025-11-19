import { Dimensions, Image, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Illustration() {
  return (
    <View className="items-center mt-8">
      <Image
        source={require("../../../assets/images/illustration-onboarding.webp")}
        style={{
          width: Math.min(width - 80, 280),
          height: Math.min(width - 80, 280),
        }}
        resizeMode="contain"
      />
    </View>
  );
}
