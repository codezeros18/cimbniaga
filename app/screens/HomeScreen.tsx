import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, View } from "react-native";
import AccountSummary from "../components/home/AccountSummary";
import CardCarousel from "../components/home/CardCarousel";
import HomeHeader from "../components/home/HomeHeader";
import SubscriptionSection from "../components/home/SubscriptionSection";
import UserGreeting from "../components/home/UserGreeting";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#050505"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 60,
        }}
      >
        {/* Header */}
        <HomeHeader />

        {/* Greeting + Search */}
        <UserGreeting />

        {/* Account Summary */}
        <AccountSummary />

        {/* Card Carousel */}
        <CardCarousel />

        {/* Subscription Section */}
        <SubscriptionSection />

        {/* Spacer */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </LinearGradient>
  );
}
