import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function CTASection() {
  const router = useRouter();

  return (
    <View style={{ gap: 14, marginBottom: 28 }}>
      
      {/* PRIMARY CTA */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={() => router.push("/screens/PersonalForm")}
        style={{ borderRadius: 50, overflow: "hidden" }}
      >
        <LinearGradient
          colors={["#C8102E", "#9E0B22"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            paddingVertical: 16,
            alignItems: "center",
            shadowColor: "#C8102E",
            shadowOpacity: 0.3,
            shadowRadius: 16,
            elevation: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 18,
              color: "#FFF",
            }}
          >
            Open a New Account
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* SECONDARY CTA */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push("/screens/SignIn")}
        style={{ paddingVertical: 10 }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 15,
            textAlign: "center",
            color: "#FFFFFFCC",
          }}
        >
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>

    </View>
  );
}
