import { Text, TouchableOpacity, View } from "react-native";

export default function LoginButton({
  title = "Login",
  onPress = () => {},
  variant = "solid", // "solid" | "outline" | "gradient"
}) {
  if (variant === "solid") {
    return (
      <View className="px-6 mt-8">
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.9}
          className="bg-cimb-red py-4 rounded-3xl items-center shadow-md"
        >
          <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            className="text-white text-lg"
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ✅ Opsi 2 (Outline)
  if (variant === "outline") {
    return (
      <View className="px-6 mt-8">
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.9}
          className="border border-cimb-red py-4 rounded-3xl items-center"
        >
          <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            className="text-cimb-red text-lg"
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ✅ Opsi 3 (Gradient Red)
  return (
    <View className="px-6 mt-8">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        className="rounded-3xl items-center overflow-hidden shadow-md"
      >
        <View
          style={{
            backgroundColor: "#C8102E",
            width: "100%",
            height: 56,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            className="text-white text-lg"
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
