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
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 80,
          paddingBottom: 100,
        }}
      >

        {/* Title */}
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 26,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Review & Sign
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            color: "#D1D5DB",
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          Please confirm your identity before activation.
        </Text>

        {/* Summary Card */}
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: 18,
            borderRadius: 22,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              color: "#FFFFFF",
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Account Information
          </Text>

          {[
            { label: "Full Name", value: "Lintang Balakosa Ardhana" },
            { label: "ID Number", value: "3201185604980007" },
            { label: "Account Type", value: accountTypeName ?? "OCTO Savers" },
          ].map((item, idx) => (
            <View
              key={item.label}
              style={{
                paddingVertical: 12,
                borderBottomWidth: idx < 2 ? 1 : 0,
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 11,
                  color: "#BBBBBB",
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

        {/* Signature Box */}
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
            height: 220,
            backgroundColor: "rgba(255,255,255,0.07)",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.12)",
            overflow: "hidden",
          }}
        >
          <View style={{ flex: 1 }} {...panResponder.panHandlers}>
            <Svg width="100%" height="100%">
              {signaturePaths.map((p, i) => (
                <Path
                  key={i}
                  d={p}
                  stroke="#FF4D4D"
                  strokeWidth={3}
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
              color: "#FF7777",
              textAlign: "right",
              marginTop: 6,
            }}
          >
            Clear Signature
          </Text>
        </TouchableOpacity>

        {/* Agreement */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setIsAgreed(!isAgreed)}
          style={{ flexDirection: "row", alignItems: "center", marginTop: 28 }}
        >
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              borderWidth: 2,
              borderColor: isAgreed ? "#C8102E" : "#575757",
              backgroundColor: isAgreed ? "#C8102E" : "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isAgreed && <View style={{ width: 10, height: 10, backgroundColor: "#FFF" }} />}
          </View>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              color: "#CCCCCC",
              marginLeft: 12,
              flex: 1,
            }}
          >
            I confirm that all the information is correct.
          </Text>
        </TouchableOpacity>

        {/* Submit */}
        <PrimaryButton
          title="Submit"
          disabled={!canSubmit}
          onPress={handleSubmit}
          style={{ marginTop: 36 }}
        />
      </ScrollView>
    </LinearGradient>
  );
}
