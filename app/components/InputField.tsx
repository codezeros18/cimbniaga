import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
}: any) {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ width: "100%", marginBottom: 22 }}>
      {label && (
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 14,
            marginBottom: 6,
            color: "#F9FAFB",
          }}
        >
          {label}
        </Text>
      )}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 14,
          paddingVertical: 13,
          backgroundColor: "rgba(255,255,255,0.07)",
          borderRadius: 14,
          borderWidth: 2,
          borderColor: focused ? "#C8102E" : "rgba(255,255,255,0.12)",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: "Poppins-Regular",
            color: "#FFFFFF",
          }}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.4)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !visible}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}

          // 🚫 Disable Password Autofill Everywhere
          textContentType="none"
          autoComplete="off"
          importantForAutofill="no"
          autoCorrect={false}
          autoCapitalize="none"
        />

        {secureTextEntry ? (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Ionicons
              name={visible ? "eye-off" : "eye"}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        ) : value.length > 0 ? (
          <Ionicons name="checkmark-circle" size={22} color="#C8102E" />
        ) : null}
      </View>
    </View>
  );
}
