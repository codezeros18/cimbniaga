import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function SelfieVerification() {
  const router = useRouter();
  const cameraRef = useRef<any>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const [borderColor, setBorderColor] = useState("#DC2626");
  const [timer, setTimer] = useState(5);
  const [selfieUri, setSelfieUri] = useState<string | null>(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [guide, setGuide] = useState("Position your face");

  const animateGuide = (text: string) => {
    setGuide(text);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  if (!permission?.granted) requestPermission();

  /** Border & Text Animation Flow **/
  useEffect(() => {
    if (selfieUri) return;
    animateGuide("Position your face");

    const interval = setInterval(() => {
      setTimer((t) => {
        if (t === 4) animateGuide("Hold Still...");
        if (t === 2) animateGuide("Perfect alignment!");
        if (t === 1) {
          setBorderColor("#16A34A");
          animateGuide("Ready to capture!");
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selfieUri]);

  const captureSelfie = async () => {
  const photo = await cameraRef.current.takePictureAsync();
    setSelfieUri(photo.uri);
  };

  return (
    <LinearGradient
      colors={["#3D0C0C", "#7A0E0E", "#150404"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          marginHorizontal: 24,
        }}
      >
        {/* STEP INDICATOR */}
                  <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <Text
                      style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: 13,
                        color: "#D1D5DB",
                      }}
                    >
                      Step <Text style={{ color: "#C8102E" }}>4</Text> of 7
                    </Text>
                  </View>
        {/**************** CAMERA MODE ****************/}
        {!selfieUri && (
          <>
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

            <Animated.Text
              style={{
                opacity: fadeAnim,
                fontFamily: "Poppins-Regular",
                fontSize: 15,
                color: borderColor === "#16A34A" ? "#16A34A" : "#D1D5DB",
                textAlign: "center",
                marginBottom: 30,
              }}
            >
              {guide}
            </Animated.Text>

            {/* Premium Camera Box */}
            <View
              style={{
                width: 320,
                height: 440,
                borderRadius: 32,
                overflow: "hidden",
                backgroundColor: "#0A0A0A",
                borderWidth: 1.5,
                borderColor: "#C8102E44",
                shadowColor: "#C8102E",
                shadowOpacity: 0.35,
                shadowRadius: 22,
                elevation: 18,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CameraView
                ref={cameraRef}
                facing="front"
                style={{ width: "100%", height: "100%" }}
              />

              {/* Premium Oval Border */}
              <View
                style={{
                  position: "absolute",
                  width: 240,
                  height: 300,
                  borderRadius: 160,
                  borderWidth: 5,
                  borderColor,
                }}
              />
            </View>

            {/* Capture Button */}
            <TouchableOpacity
              disabled={borderColor !== "#16A34A"}
              onPress={captureSelfie}
              style={{
                marginTop: 34,
                width: 90,
                height: 90,
                borderRadius: 45,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  borderColor !== "#16A34A" ? "#6B7280" : "#C8102E",
                shadowColor: "#C8102E",
                shadowRadius: 10,
                shadowOpacity: 0.5,
                elevation: 8,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "#ffffff",
                }}
              />
            </TouchableOpacity>
          </>
        )}

        {/**************** REVIEW MODE ****************/}
        {selfieUri && (
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 26,
                color: "#FFFFFF",
                marginBottom: 18,
                textAlign: "center",
              }}
            >
              Confirm Your Selfie
            </Text>

            {/* PREMIUM SELFIE CARD */}
            <View
              style={{
                width: "100%",
                borderRadius: 28,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.06)",
                borderWidth: 1.5,
                borderColor: "#C8102E55",
                shadowColor: "#C8102E",
                shadowOpacity: 0.45,
                shadowRadius: 24,
                elevation: 12,
                padding: 10,
                marginBottom: 18,
              }}
            >
              <Image
                source={{ uri: selfieUri }}
                style={{
                  width: "100%",
                  height: 420,
                  borderRadius: 20,
                }}
                resizeMode="cover"
              />
            </View>

            {/* RETAKE AS PREMIUM TEXT */}
            <TouchableOpacity
              onPress={() => {
                setSelfieUri(null);
                setTimer(5);
                setBorderColor("#DC2626");
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  color: "#D1D5DB88",
                  marginBottom: 22,
                }}
              >
                Retake Selfie
              </Text>
            </TouchableOpacity>

            {/* CONTINUE BUTTON - NOW FULL WIDTH & PREMIUM */}
            <PrimaryButton
              title="Continue"
              variant="gradient"
              onPress={() => router.push("/screens/IdentityValidation")}
              style={{
                width: "100%",
                marginTop: 4,
              }}
            />
            {/* FOOTER */}
                            <Text
                              style={{
                                fontFamily: "Poppins-Light",
                                fontSize: 10,
                                color: "#FFFFFF55",
                                marginTop: 28,
                                textAlign: "center",
                              }}
                            >
                              © 2025 CIMB Niaga Digital Banking
                            </Text>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
