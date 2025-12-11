import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import HeaderTop from "../components/createAccount/HeaderTop";
import HeroSection from "../components/createAccount/HeroSection";
import Illustration from "../components/createAccount/Illustration";
import PrimaryButton from "../components/PrimaryButton";

export default function CreateAccount() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1A0A0A", "#3B0F12", "#7A0E18"]}
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
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <HeroSection />

            <MotiView
              from={{ opacity: 0, scale: 0.88, translateY: 30 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ type: "timing", duration: 600, delay: 300 }}
              style={{ marginTop: 24 }}
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
                  color: "#FFFFFFAA",
                }}
              >
                Already have an account?{" "}
                <Text style={{ color: "#FF6E6E" }}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
