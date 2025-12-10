import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { MotiText, MotiView } from "moti";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
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
const dummyVideo = require("../../assets/images/interview.jpg");

export default function InterviewScreen() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(true);

  // 🔁 Untuk efek shake kalau user pencet hangup
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 🎙️ Voice-over AI assistant saat masuk screen
    Speech.speak(
      "We are connecting you to our AI interview assistant. Please stay in a quiet place.",
      {
        language: "en-US",
        pitch: 1,
        rate: 0.98,
      }
    );

    // Simulasi proses connect sekitar 4 detik
    const timer = setTimeout(() => setIsConnecting(false), 4200);
    return () => clearTimeout(timer);
  }, []);

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 8,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -8,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 4,
        duration: 60,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 60,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleHangup = () => {
    triggerShake();
    // Bisa ditambah Alert atau bottom sheet kalau mau
  };

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={styles.container}
    >
      
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View style={styles.inner}>
          {/* FraudScore status pill – hasil dari flow selfie & e-KTP sebelumnya */}
          <View style={{ alignItems: "center", marginBottom: 20 }}>
                                <Text
                                  style={{
                                    fontFamily: "Poppins-Medium",
                                    fontSize: 13,
                                    color: "#D1D5DB",
                                  }}
                                >
                                  Step <Text style={{ color: "#C8102E" }}>5</Text> of 7
                                </Text>
                              </View>
          <MotiView
            from={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 150 }}
            style={styles.statusPill}
          >
            <LinearGradient
              colors={["#C8102E", "#7A0C1B"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.statusPillInner}
            >
              <Feather name="shield" size={14} color="#FFF" />
              <Text style={styles.statusPillText}>
                FraudScore status: Cleared
              </Text>
            </LinearGradient>
          </MotiView>

          {/* TITLE */}
          <MotiText
            from={{ opacity: 0, translateY: -16 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 280 }}
            style={styles.title}
          >
            Video Interview
          </MotiText>

          <MotiText
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 420 }}
            style={styles.subtitle}
          >
            Our AI assistant is preparing a secure video session.
          </MotiText>

          {/* VIDEO BOX + SHAKE ANIM */}
          <Animated.View
            style={{
              transform: [{ translateX: shakeAnim }],
              marginTop: 32,
              marginBottom: 40,
            }}
          >
            <MotiView
              from={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 520 }}
              style={styles.videoBox}
            >
              <Image source={dummyVideo} style={styles.video} resizeMode="cover" />

              {/* Dark overlay tipis */}
              <View style={styles.overlay} />

              {/* Glow pulse saat connecting */}
              {isConnecting && (
                <MotiView
                  from={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "timing",
                    loop: true,
                    duration: 1100,
                  }}
                  style={styles.glowPulse}
                />
              )}

              {/* LIVE / READY badge di pojok kiri atas */}
              <View style={styles.liveBadgeWrapper}>
                <MotiView
                  from={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 650 }}
                  style={styles.liveBadge}
                >
                  <MotiView
                    from={{ opacity: 0.3, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "timing",
                      loop: true,
                      duration: 900,
                    }}
                    style={styles.liveDot}
                  />
                  <Text style={styles.liveText}>
                    {isConnecting ? "AI PREPARING" : "SECURE CALL"}
                  </Text>
                </MotiView>
              </View>

              {/* Connecting overlay text di tengah */}
              {isConnecting && (
                <View style={styles.loaderOverlay}>
                  <ActivityIndicator size="large" color="#C8102E" />
                  <MotiText
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ loop: true, duration: 900 }}
                    style={styles.connectingText}
                  >
                    Connecting…
                  </MotiText>
                </View>
              )}

              {/* Kontrol call */}
              <MotiView
                from={{ translateY: 40, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 900 }}
                style={styles.controls}
              >
                <Control icon="mic" />
                <Control icon="video" />
                <TouchableOpacity style={styles.hangup} onPress={handleHangup}>
                  <Feather name="phone-off" size={22} color="#FFF" />
                </TouchableOpacity>
              </MotiView>
            </MotiView>
          </Animated.View>

          {/* CTA */}
          <PrimaryButton
            title={isConnecting ? "Connecting..." : "Continue"}
            disabled={isConnecting}
            onPress={() => router.push("/screens/AccountTypeSelection")}
            style={{ marginTop: 8 }}
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
      </SafeAreaView>
    </LinearGradient>
  );
}

function Control({ icon }: { icon: React.ComponentProps<typeof Feather>["name"] }) {
  return (
    <MotiView
      from={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        delay: 950 + Math.random() * 400,
      }}
      style={styles.controlBtn}
    >
      <Feather name={icon} size={20} color="#FFF" />
    </MotiView>
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

  // FraudScore pill
  statusPill: {
    marginBottom: 16,
  },
  statusPillInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusPillText: {
    marginLeft: 6,
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    color: "#FFF",
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
    marginTop: 6,
  },

  videoBox: {
    width: width - 48,
    height: 390,
    borderRadius: 28,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(200,16,46,0.7)",
    backgroundColor: "#0B0B0B",
    shadowColor: "#C8102E",
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 14,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  glowPulse: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 3,
    borderColor: "#C8102E",
    borderRadius: 28,
  },

  liveBadgeWrapper: {
    position: "absolute",
    top: 14,
    left: 14,
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.65)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4D4D",
    marginRight: 6,
  },
  liveText: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#FFFFFF",
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
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 28,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  controlBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.12)",
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
    marginTop: 32,
    fontFamily: "Poppins-Light",
    fontSize: 11,
    color: "#9CA3AF",
  },
});
