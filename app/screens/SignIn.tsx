import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiView } from "moti";
import { Text, View } from "react-native";
import { Easing } from "react-native-reanimated";
import BackgroundArt from "../components/signIn/BackgroundArt";
import CimbFooter from "../components/signIn/CimbFooter";
import CimbHeader from "../components/signIn/CimbHeader";
import LoginButton from "../components/signIn/LoginButton";
import QuickServices from "../components/signIn/QuickServices";

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* 🖼️ Background Gradient */}
      <View className="absolute top-0 left-0 right-0 h-[360px] z-0">
        <LinearGradient
          colors={["#C8102E", "#FFF5F5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="absolute top-0 left-0 right-0 h-full"
        />
      </View>

      {/* 📱 Konten Utama */}
      <View className="flex-1 justify-between">
        {/* 🔺 Header animasi */}
        <MotiView
          from={{ translateY: -15, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            type: "timing",
            duration: 400,
            easing: Easing.out(Easing.cubic),
          }}
        >
          <CimbHeader />
        </MotiView>

        {/* ✨ Background Illustration muncul pelan */}
        <MotiView
          from={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "timing",
            duration: 500,
            delay: 150,
            easing: Easing.out(Easing.cubic),
          }}
          className="-mt-16"
        >
          <BackgroundArt />
        </MotiView>

        {/* 💬 Tagline muncul cepat tapi halus */}
        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 250,
            easing: Easing.out(Easing.cubic),
          }}
          className="px-8 mt-[220px]"
        >
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-4xl text-cimb-dark leading-snug"
          >
            Finances made{"\n"}
            <Text className="text-cimb-red font-semibold">simpler</Text> and{" "}
            <Text className="text-cimb-red font-semibold">smarter!</Text>
          </Text>
        </MotiView>

        {/* ⚡ Quick Services muncul bertahap cepat */}
        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "spring",
            damping: 14,
            stiffness: 180,
            delay: 350,
          }}
        >
          <QuickServices />
        </MotiView>

        {/* 🔘 Login Button muncul cepat */}
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "timing",
            duration: 350,
            delay: 450,
            easing: Easing.out(Easing.cubic),
          }}
        >
          <LoginButton
            variant="solid"
            onPress={() => router.push("/screens/HomeScreen")}
          />
        </MotiView>

        {/* 🧾 Text di bawah login */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 550,
            easing: Easing.out(Easing.cubic),
          }}
          className="mt-6 px-6 items-center"
        >
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            className="text-gray-600 text-sm text-center"
          >
            Want to login with a different account?
          </Text>
          <Text
            style={{ fontFamily: "Poppins-SemiBold" }}
            className="text-cimb-red text-base text-center mt-1"
          >
            Change Account
          </Text>
        </MotiView>

        {/* 🏦 Footer */}
        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: "timing",
            duration: 400,
            delay: 700,
            easing: Easing.out(Easing.cubic),
          }}
        >
          <CimbFooter />
        </MotiView>
      </View>
    </View>
  );
}
