import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import KTPPicker from "../components/KTPPicker";

export default function UploadKTP() {
  const router = useRouter();
  const [ktpImageUri, setKtpImageUri] = useState<string | null>(null);

  const handleNext = () => {
    console.log("Image URI:", ktpImageUri);
    // router.push("/screens/SelfieVerification"); 
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        contentContainerClassName="flex-grow justify-center p-6" 
        showsVerticalScrollIndicator={false}
      >
        
        {/* TITLE */}
        <Text
          className="text-2xl font-poppins-bold text-gray-800 mb-4 text-center"
          style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        >
          Upload Your KTP
        </Text>

        {/* SUBTITLE */}
        <Text
          className="text-base font-poppins text-gray-600 text-center mb-8"
          style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}
        >
          Please provide a clear photo of your KTP (ID Card).
        </Text>

        <View className="items-center mb-8">
          <Image
            source={require('../../assets/images/ktppp.png')} 
            className="w-80 h-60"
            resizeMode="contain"
          />
        </View>
        
        <KTPPicker 
          imageUri={ktpImageUri} 
          setImageUri={setKtpImageUri} 
        />

        <View className="w-full pt-10">
          <TouchableOpacity
            onPress={handleNext}
            disabled={!ktpImageUri}
            className="w-full rounded-2xl overflow-hidden"
          >
            <LinearGradient
              colors={ktpImageUri ? ['#C8102E', '#9E0B22'] : ['#E57373', '#CF8E8E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-4 items-center justify-center"
            >
              <Text
                className="text-white text-lg font-poppins-bold"
                style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}
              >
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView> 
    </SafeAreaView>
  );
}
