import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import KTPPicker from "../components/KTPPicker";
import PrimaryButton from "../components/PrimaryButton";

const SCAN_STEPS = [
  "Scanning KTP edges",
  "Reading NIK & personal data",
  "Checking hologram & security pattern",
  "Validating document integrity",
];

export default function UploadKTP() {
  const router = useRouter();
  const [ktpImageUri, setKtpImageUri] = useState<string | null>(null);

  const [isScanning, setIsScanning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (!ktpImageUri || isScanning) return;

    // Mulai animasi fake OCR scan
    setIsScanning(true);
    setActiveStep(0);

    SCAN_STEPS.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
      }, index * 650); // 0.65 detik per step
    });

    // Setelah semua step selesai → lanjut ke SelfieVerification
    const totalDuration = SCAN_STEPS.length * 650 + 700;
    setTimeout(() => {
      setIsScanning(false);
      router.push("/screens/SelfieVerification");
    }, totalDuration);
  };

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
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 26,
            paddingVertical: 70,
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
                        Step <Text style={{ color: "#C8102E" }}>3</Text> of 7
                      </Text>
                    </View>
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
            Upload Your KTP
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D1D5DB",
              marginBottom: 22,
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            Please provide a valid and readable picture of your ID card.
          </Text>

          {/* 🔍 Smart Capture Guide */}
          <View
            style={{
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.12)",
              padding: 14,
              marginBottom: 26,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
                color: "#FFB3B3",
                marginBottom: 4,
              }}
            >
              🔍 Smart Capture Guide
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#D6D6D6",
                lineHeight: 18,
              }}
            >
              • Ensure your KTP fits inside the frame{"\n"}
              • Avoid glare and reflections on hologram{"\n"}
              • Make sure NIK and text are clearly visible{"\n"}
              • No blur, shadows, or cropped corners
            </Text>
          </View>

          {/* Illustration */}
          <Image
            source={require("../../assets/images/ktppp.png")}
            style={{ width: 200, height: 140, marginBottom: 28 }}
            resizeMode="contain"
          />

          {/* KTP Picker */}
          <KTPPicker imageUri={ktpImageUri} setImageUri={setKtpImageUri} />

          {/* CTA Button */}
          <View style={{ width: "100%", marginTop: 34 }}>
            <PrimaryButton
              title={isScanning ? "Analyzing..." : "Continue"}
              onPress={handleNext}
              disabled={!ktpImageUri || isScanning}
            />
          </View>
        </ScrollView>

        {/* 🔴 OCR SCAN OVERLAY */}
        {isScanning && (
          <View style={styles.overlayContainer}>
            <View style={styles.scanCard}>
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: "rgba(200,16,46,0.18)",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Feather name="file-text" size={18} color="#FFB3B3" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 14,
                      color: "#FFFFFF",
                    }}
                  >
                    Scanning your KTP
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 11,
                      color: "#D1D5DB",
                    }}
                  >
                    Extracting data securely, this only takes a moment.
                  </Text>
                </View>
              </View>

              {/* Steps */}
              <View style={{ marginTop: 8 }}>
                {SCAN_STEPS.map((step, index) => {
                  const isActive = index === activeStep;
                  const isDone = index < activeStep;

                  return (
                    <View
                      key={step}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: index !== SCAN_STEPS.length - 1 ? 8 : 0,
                      }}
                    >
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 5,
                          marginRight: 10,
                          backgroundColor: isActive
                            ? "#C8102E"
                            : isDone
                            ? "#10B981"
                            : "#4B5563",
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: isActive
                            ? "Poppins-SemiBold"
                            : "Poppins-Regular",
                          fontSize: 12,
                          color: isActive
                            ? "#FFFFFF"
                            : isDone
                            ? "#D1FAE5"
                            : "#D1D5DB",
                        }}
                      >
                        {step}
                      </Text>
                    </View>
                  );
                })}
              </View>

              {/* Progress bar */}
              <View
                style={{
                  marginTop: 14,
                  height: 5,
                  borderRadius: 999,
                  backgroundColor: "rgba(148,163,184,0.35)",
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: `${
                      ((activeStep + 1) / SCAN_STEPS.length) * 100
                    }%`,
                    backgroundColor: "#C8102E",
                  }}
                />
              </View>

              <Text
                style={{
                  marginTop: 8,
                  fontFamily: "Poppins-Medium",
                  fontSize: 11,
                  color: "#F97373",
                  textAlign: "right",
                }}
              >
                FraudShield OCR in progress...
              </Text>
            </View>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  scanCard: {
    width: "100%",
    maxWidth: 380,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "rgba(15,15,15,0.96)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
});
