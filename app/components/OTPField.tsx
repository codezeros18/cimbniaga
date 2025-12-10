import React, { useRef } from "react";
import { Animated, TextInput, View } from "react-native";

export default function OTPInput({ code, setCode, numberOfDigits }: any) {
  const refs = useRef<(TextInput | null)[]>([]);
  const anims = useRef(Array(numberOfDigits).fill(0).map(() => new Animated.Value(1))).current;

  const updateDigit = (text: string, index: number) => {
    const updated = [...code];
    updated[index] = text.slice(-1);
    setCode(updated);

    if (text !== "" && index < numberOfDigits - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    const updated = [...code];

    // If current box is empty → delete previous digit
    if (updated[index] === "" && index > 0) {
      updated[index - 1] = "";
      setCode(updated);
      refs.current[index - 1]?.focus();
    } else {
      // delete itself
      updated[index] = "";
      setCode(updated);
    }
  };

  return (
    <View style={{ flexDirection: "row", gap: 14 }}>
      {code.map((digit: string, index: number) => (
        <Animated.View key={index} style={{ transform: [{ scale: anims[index] }] }}>
          <TextInput
            ref={(r) => {
              refs.current[index] = r;
            }}
            style={{
              width: 60,
              height: 68,
              borderRadius: 16,
              textAlign: "center",
              fontSize: 24,
              fontFamily: "Poppins-SemiBold",
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderWidth: 2,
              borderColor: digit ? "#C8102E" : "rgba(255,255,255,0.15)",
            }}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(t) => updateDigit(t, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") handleBackspace(index);
            }}
          />
        </Animated.View>
      ))}
    </View>
  );
}
