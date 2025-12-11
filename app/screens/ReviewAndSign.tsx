import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import {
  GestureResponderEvent,
  PanResponder,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import PrimaryButton from "../components/PrimaryButton";

type SignaturePoint = { x: number; y: number };
type SignatureLine = SignaturePoint[];

export default function ReviewAndSign() {
  const router = useRouter();
  const { accountTypeName } = useLocalSearchParams();

  const [isAgreed, setIsAgreed] = useState(false);
  const [signatureLines, setSignatureLines] = useState<SignatureLine[]>([]);

  const addPoint = (evt: GestureResponderEvent, startNew = false) => {
    const { locationX, locationY } = evt.nativeEvent;
    setSignatureLines(prev => {
      if (startNew || prev.length === 0) return [...prev, [{ x: locationX, y: locationY }]];
      const updated = [...prev];
      updated[updated.length - 1] = [
        ...updated[updated.length - 1],
        { x: locationX, y: locationY },
      ];
      return updated;
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => addPoint(evt, true),
      onPanResponderMove: (evt) => addPoint(evt),
    })
  ).current;

  const signaturePaths = useMemo(
    () =>
      signatureLines.map(line =>
        line.reduce((p, pt, i) => `${p} ${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`, "")
      ),
    [signatureLines]
  );

  const hasSignature = signatureLines.some(l => l.length > 1);
  const canSubmit = isAgreed && hasSignature;

  const handleSubmit = () => {
    if (!canSubmit) return;
    router.push("/screens/StatusScreen");
  };

  return (
    <LinearGradient
      colors={["#3D0C0C", "#7A0E0E", "#150404"]}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 80,    // 👈 spacing premium fix
          paddingBottom: 120,
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
                      Step <Text style={{ color: "#C8102E" }}>7</Text> of 7
                    </Text>
                  </View>
        {/* TITLE */}
        <View style={{ marginBottom: 32 }}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 30,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Review & Sign
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D4D4D4",
              textAlign: "center",
              marginTop: 6,
              lineHeight: 20,
            }}
          >
            This signature confirms your agreement to open your CIMB account.
          </Text>
        </View>

        {/* SUMMARY CARD */}
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            padding: 20,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            marginBottom: 36,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              color: "#FFFFFF",
              marginBottom: 14,
            }}
          >
            Account Summary
          </Text>

          {[
            { label: "Full Name", value: "Lintang Balakosa Ardhana" },
            { label: "ID Number", value: "3201185604980007" },
            { label: "Account Type", value: accountTypeName ?? "OCTO Savers" },
          ].map((item, index) => (
            <View
              key={item.label}
              style={{
                paddingVertical: 12,
                borderBottomWidth: index < 2 ? 1 : 0,
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 11,
                  color: "#BBBBBB",
                  letterSpacing: 0.8,
                }}
              >
                {item.label.toUpperCase()}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 15,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        {/* SIGNATURE BOX */}
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 15,
            color: "#FFFFFF",
            marginBottom: 12,
          }}
        >
          Digital Signature
        </Text>

        <View
          style={{
            height: 240,
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 22,
            borderWidth: 1.4,
            borderColor: "rgba(255,255,255,0.14)",
            overflow: "hidden",
            shadowColor: "#C8102E",
            shadowOpacity: 0.28,
            shadowRadius: 18,
            marginBottom: 10,
          }}
        >
          <View style={{ flex: 1 }} {...panResponder.panHandlers}>
            <Svg width="100%" height="100%">
              {signaturePaths.map((p, i) => (
                <Path
                  key={i}
                  d={p}
                  stroke="#FF4D4D"
                  strokeWidth={3.2}
                  fill="none"
                  strokeLinecap="round"
                />
              ))}
            </Svg>
          </View>
        </View>

        <TouchableOpacity onPress={() => setSignatureLines([])}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 12,
              color: "#FF8A8A",
              textAlign: "right",
              marginBottom: 34,
            }}
          >
            Clear Signature
          </Text>
        </TouchableOpacity>

        {/* AGREEMENT */}
        <TouchableOpacity
          onPress={() => setIsAgreed(!isAgreed)}
          activeOpacity={0.85}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              borderWidth: 2,
              borderColor: isAgreed ? "#C8102E" : "#757575",
              backgroundColor: isAgreed ? "#C8102E" : "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isAgreed && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#FFF",
                  borderRadius: 2,
                }}
              />
            )}
          </View>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              marginLeft: 12,
              color: "#D2D2D2",
              lineHeight: 20,
              flex: 1
            }}
          >
            I confirm that all details are correct and agree to proceed.
          </Text>
        </TouchableOpacity>

        {/* CTA */}
        <PrimaryButton
          title="Submit Signature"
          disabled={!canSubmit}
          onPress={handleSubmit}
        />

        {/* MICRO COPY */}
        <Text
          style={{
            marginTop: 16,
            textAlign: "center",
            fontFamily: "Poppins-Light",
            fontSize: 11,
            color: "#7A7A7A",
            opacity: 0.7,
          }}
        >
          Your digital signature is encrypted & legally binding.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}
