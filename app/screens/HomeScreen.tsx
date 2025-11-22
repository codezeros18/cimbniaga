import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View } from "react-native";
import AccountSummary from "../components/home/AccountSummary";
import CardCarousel from "../components/home/CardCarousel";
import HomeHeader from "../components/home/HomeHeader";
import SubscriptionSection from "../components/home/SubscriptionSection";
import UserGreeting from "../components/home/UserGreeting";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#2A0000", "#C8102E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 40,
        }}
      >
        {/* Header */}
        <HomeHeader />

        {/* Greeting */}
        <UserGreeting />

        {/* Account Summary */}
        <AccountSummary />

        {/* Card Carousel */}
        <CardCarousel />

        {/* Subscription Section */}
        <SubscriptionSection />

        {/* Spacer */}
        <View className="h-10" />
      </ScrollView>
    </LinearGradient>
  );
}
