import { MotiView } from "moti";
import { Dimensions, Image, View } from "react-native";
const { width } = Dimensions.get("window");

export default function Illustration() {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 450 }}
    >
      <View
        style={{
          alignItems: "center",
          shadowColor: "#C8102E",
          shadowOpacity: 0.35,
          shadowRadius: 25,
          elevation: 15,
        }}
      >
        <Image
          source={require("../../../assets/images/illustration-onboarding.webp")}
          style={{
            width: Math.min(width - 120, 250),
            height: Math.min(width - 120, 250),
          }}
          resizeMode="contain"
        />
      </View>
    </MotiView>
  );
}
