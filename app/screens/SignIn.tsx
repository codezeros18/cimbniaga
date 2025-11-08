import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import TopHeader from "../components/TopHeader";
import HeaderSlider from "../components/HeaderSlider";
import AccountInfo from "../components/AccountInfo";
import QuickActions from "../components/QuickActions";
import FooterLinks from "../components/FooterLinks";
import BottomSlider from "../components/BottomSlider";

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Full-screen layout */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* ✅ Top Header */}
        <TopHeader />

        {/* ✅ Slider Section */}
        <HeaderSlider />

        {/* ✅ Account Info */}
        <AccountInfo />

        {/* ✅ Quick Action Buttons */}
        <QuickActions />

        {/* ✅ Login Section */}
        <View className="px-6 mt-10">
          <TouchableOpacity
            onPress={() => router.push("/screens/HomeScreen")}
            className="bg-cimb-red py-4 rounded-full shadow-lg active:bg-red-700"
          >
            <Text className="text-center text-white text-lg font-semibold">
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="mt-6">
            <Text className="text-center text-gray-600 text-sm">
              Want to Login with a different account?{" "}
            </Text>
              <Text className="text-cimb-red text-center font-semibold pt-1">Change Account</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Footer */}
        <FooterLinks />

        {/* ✅ Bottom mini-slider */}
        <BottomSlider />
      </ScrollView>
    </View>
  );
}
