import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white px-6">
      {/* Header */}
      <View className="pt-12 pb-4">
        <Text className="text-2xl font-semibold text-cimb-dark">
          Welcome back,
        </Text>
        <Text className="text-cimb-red text-xl font-bold">
          Lintang Balakosa Ardhana
        </Text>
      </View>

      {/* Balance Card */}
      <View className="bg-cimb-red rounded-2xl p-5 shadow-md mt-3">
        <Text className="text-white text-sm">Available Balance</Text>
        <Text className="text-white text-3xl font-semibold mt-1">
          Rp 12.340.000
        </Text>
      </View>

      {/* Quick Actions */}
      <View className="mt-8">
        <Text className="text-lg font-semibold text-cimb-dark mb-4">
          Quick Actions
        </Text>
        <View className="flex-row justify-between">
          <TouchableOpacity className="items-center flex-1">
            <Image
              source={require("../../assets/images/transfer-icon.webp")}
              className="w-12 h-12"
              resizeMode="contain"
            />
            <Text className="mt-2 text-sm font-medium text-gray-700">
              Transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center flex-1">
            <Image
              source={require("../../assets/images/transfer-icon.webp")}
              className="w-12 h-12"
              resizeMode="contain"
            />
            <Text className="mt-2 text-sm font-medium text-gray-700">
              Top Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center flex-1">
            <Image
              source={require("../../assets/images/transfer-icon.webp")}
              className="w-12 h-12"
              resizeMode="contain"
            />
            <Text className="mt-2 text-sm font-medium text-gray-700">
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* News / Promo Section */}
      <View className="mt-10">
        <Text className="text-lg font-semibold text-cimb-dark mb-3">
          Latest News & Promo
        </Text>
        <View className="bg-gray-50 rounded-2xl p-4 shadow-sm">
          <Image
            source={require("../../assets/images/transfer-icon.webp")}
            className="w-full h-36 rounded-xl mb-3"
            resizeMode="cover"
          />
          <Text className="text-gray-800 font-semibold text-base">
            Cashback up to 20% for new users 🎉
          </Text>
          <Text className="text-gray-500 text-sm mt-1 leading-5">
            Enjoy exclusive cashback for all transactions using CIMB Digital
            Debit. Limited time offer.
          </Text>
        </View>
      </View>

      {/* Logout Button */}
      <View className="mt-12 mb-8">
        <TouchableOpacity
          onPress={() => router.replace("/screens/SignIn")}
          className="bg-gray-100 py-3 rounded-2xl"
        >
          <Text className="text-center text-cimb-red font-semibold text-base">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
