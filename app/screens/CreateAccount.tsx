import { MotiView } from "moti";
import { ScrollView } from "react-native";
import CTASection from "../components/createAccount/CTASection";
import FeatureCard from "../components/createAccount/FeatureCard";
import FooterSmall from "../components/createAccount/FooterSmall";
import HeaderTop from "../components/createAccount/HeaderTop";
import HeroSection from "../components/createAccount/HeroSection";
import Illustration from "../components/createAccount/Illustration";

export default function CreateAccount() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      {/* 🔺 Header */}
      <MotiView
        from={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <HeaderTop />
      </MotiView>

      {/* 🟥 Hero Section */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600, delay: 200 }}
      >
        <HeroSection />
      </MotiView>

      {/* 💡 Feature Card */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", damping: 18, stiffness: 120, delay: 400 }}
      >
        <FeatureCard />
      </MotiView>

      {/* 🖼️ Illustration */}
      <MotiView
        from={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "timing", duration: 700, delay: 600 }}
      >
        <Illustration />
      </MotiView>

      {/* 🚀 CTA Section */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", delay: 800 }}
      >
        <CTASection />
      </MotiView>

      {/* 🧾 Footer */}
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", delay: 1000 }}
      >
        <FooterSmall />
      </MotiView>
    </ScrollView>
  );
}
