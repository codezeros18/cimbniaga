import { Image, View } from "react-native";

export default function BackgroundArt() {
  return (
    <View className="absolute top-10 left-0 right-0 items-center">
      <Image
        source={require("../../../assets/images/card.png")}
        className="w-[320px] h-[200px] opacity-90"
        resizeMode="contain"
      />
    </View>
  );
}
