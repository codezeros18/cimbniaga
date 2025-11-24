import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import HeaderTop from "../components/createAccount/HeaderTop";
import HeroSection from "../components/createAccount/HeroSection";
import Illustration from "../components/createAccount/Illustration";
import PrimaryButton from "../components/PrimaryButton"; // 🔥 new!

export default function CreateAccount() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: 36,
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <HeaderTop />

          {/* Hero */}
          <View style={{ alignItems: "center", marginTop: 16 }}>
            <HeroSection />
            <MotiView
              from={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 250 }}
              style={{ marginTop: 18 }}
            >
              <Illustration />
            </MotiView>
          </View>

          {/* CTA Buttons */}
          <View style={{ gap: 14 }}>
            <PrimaryButton
              title="Open a New Account"
              onPress={() => router.push("/screens/PersonalForm")}
            />

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => router.push("/screens/SignIn")}
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
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
