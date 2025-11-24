import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const { width } = Dimensions.get("window");

export default function InterviewScreen() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(true);

  const dummyVideo = require("../../assets/images/interview.jpg");

  useEffect(() => {
    const timer = setTimeout(() => setIsConnecting(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View style={styles.inner}>
          
          {/* Header */}
          <View style={{ marginBottom: 28 }}>
            <Text style={styles.title}>Video Interview</Text>
            <Text style={styles.subtitle}>
              Please wait while we connect you
            </Text>
          </View>

          {/* Video Box */}
          <View style={styles.videoBox}>
            <Image
              source={dummyVideo}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />

            <View style={styles.overlay} />

            {isConnecting && (
              <View style={styles.loaderOverlay}>
                <ActivityIndicator size="large" color="#C8102E" />
                <Text style={styles.connectingText}>Connecting...</Text>
              </View>
            )}

            {/* Call Controls */}
            <View style={styles.controls}>
              <Control icon="mic" />
              <Control icon="video" />
              <TouchableOpacity style={styles.hangup}>
                <Feather name="phone-off" color="white" size={22} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Continue Button */}
          <PrimaryButton
            title={isConnecting ? "Connecting..." : "Continue"}
            disabled={isConnecting}
            onPress={() => router.push("/screens/AccountTypeSelection")}
          />

          {/* Footer */}
          <Text style={styles.footer}>© 2025 CIMB Niaga Digital Banking</Text>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function Control({ icon }: any) {
  return (
    <TouchableOpacity style={styles.controlBtn}>
      <Feather name={icon} color="white" size={22} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    textAlign: "center",
    color: "#FFFFFF",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#D1D5DB",
    textAlign: "center",
    marginTop: 4,
  },
  videoBox: {
    width: width - 48,
    height: 390,
    borderRadius: 28,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "rgba(200,16,46,0.4)",
    backgroundColor: "#0B0B0B",
    shadowColor: "#C8102E",
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  connectingText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 12,
  },
  controls: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "center",
    gap: 28,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  controlBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  hangup: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#C8102E",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 30,
    fontFamily: "Poppins-Light",
    fontSize: 11,
    color: "#9CA3AF",
  },
});
