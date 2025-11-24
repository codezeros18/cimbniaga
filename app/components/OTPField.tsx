import React, { useRef } from "react";
import { Keyboard, TextInput, View } from "react-native";

export default function OTPInput({ code, setCode, numberOfDigits }: any) {
  const refs = useRef<(TextInput | null)[]>([]);

  const updateDigit = (text: string, i: number) => {
    const updated = [...code];
    updated[i] = text.slice(-1);
    setCode(updated);

    if (text && i < numberOfDigits - 1) {
      refs.current[i + 1]?.focus();
    }
    if (updated.every((v) => v !== "")) Keyboard.dismiss();
  };

  const backspaceHandler = (key: string, i: number) => {
    if (key === "Backspace" && code[i] === "" && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  return (
    <View style={{ flexDirection: "row", gap: 14 }}>
      {code.map((digit: string, i: number) => (
        <TextInput
          key={i}
          ref={(r: TextInput | null) => { refs.current[i] = r; }}
          style={{
            width: 62,
            height: 68,
            borderRadius: 14,
            textAlign: "center",
            fontSize: 22,
            fontFamily: "Poppins-SemiBold",
            color: "#FFFFFF",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderWidth: 2,
            borderColor: digit ? "#C8102E" : "rgba(255,255,255,0.12)",
          }}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(t) => updateDigit(t, i)}
          onKeyPress={(e) => backspaceHandler(e.nativeEvent.key, i)}
        />
      ))}
    </View>
  );
}
