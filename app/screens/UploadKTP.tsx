import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import KTPPicker from "../components/KTPPicker";
import PrimaryButton from "../components/PrimaryButton";

export default function UploadKTP() {
  const router = useRouter();
  const [ktpImageUri, setKtpImageUri] = useState<string | null>(null);

  const handleNext = () => {
    if (!ktpImageUri) return;
    router.push("/screens/SelfieVerification");
  };

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 26,
            paddingBottom: 50,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 26,
              color: "#F9FAFB",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Upload Your KTP
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D1D5DB",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            Please provide a clear and valid photo of your ID card.
          </Text>

          <Image
            source={require("../../assets/images/ktppp.png")}
            style={{ width: 210, height: 150, marginBottom: 32 }}
            resizeMode="contain"
          />

          <KTPPicker imageUri={ktpImageUri} setImageUri={setKtpImageUri} />

          <View style={{ width: "100%", marginTop: 34 }}>
            <PrimaryButton
              title="Continue"
              onPress={handleNext}
              disabled={!ktpImageUri}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
