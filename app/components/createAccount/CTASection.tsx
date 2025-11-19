import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function CTASection() {
  const router = useRouter();

  return (
    <View className="px-6 mt-6 space-y-8">
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push("/screens/PersonalForm")}
        style={{
          backgroundColor: "#C8102E",
          paddingVertical: 16,
          borderRadius: 14,
          alignItems: "center",
          shadowColor: "#C8102E",
          shadowOpacity: 0.18,
          shadowRadius: 18,
          elevation: 6,
        }}
        className="mb-3"
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold" }}
          className="text-white text-lg"
        >
          Open a New Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push("/screens/SignIn")}
        style={{
          borderWidth: 1,
          borderColor: "#C8102E",
          paddingVertical: 14,
          borderRadius: 14,
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-Medium" }}
          className="text-cimb-red text-base"
        >
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
