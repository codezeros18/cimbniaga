import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SelfieFrame from "../components/selfie/SelfieFrame";

export default function SelfieVerification() {
  const router = useRouter();
  const [selfieUri, setSelfieUri] = useState<string | null>(null);

  const takeSelfie = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("Camera Required", "Please allow camera access.");
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelfieUri(result.assets[0].uri);
    }
  };

  const canContinue = !!selfieUri;

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingBottom: 40,
          }}
        >

          {/* Title */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 28,
              color: "#FFFFFF",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Selfie Verification
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
            Align your face within the frame
          </Text>

          {/* Selfie Frame */}
          <SelfieFrame selfieUri={selfieUri} />

          {/* Buttons */}
          <View style={{ width: "100%", marginTop: 40, gap: 14 }}>
            <PrimaryButton
              title={selfieUri ? "Retake Selfie" : "Take a Selfie"}
              variant="outline"
              onPress={takeSelfie}
            />
            <PrimaryButton
              title="Confirm & Continue"
              variant="gradient"
              onPress={() => router.push("/screens/InterviewScreen")}
              disabled={!canContinue}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
