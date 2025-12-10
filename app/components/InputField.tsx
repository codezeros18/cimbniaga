import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  textContentType,
  autoComplete,
}: any) {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 14,
          color: "#FFFFFF",
          marginBottom: 6,
        }}
      >
        {label}
      </Text>

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
            fontFamily: "Poppins-Regular",
            color: "#FFFFFF",
            fontSize: 15,
          }}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.4)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !visible}
          keyboardType={keyboardType}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          textContentType={textContentType}
          autoComplete={autoComplete}
        />

        {secureTextEntry ? (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Ionicons name={visible ? "eye-off" : "eye"} size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ) : value.length > 0 ? (
          <Ionicons name="checkmark-circle" size={22} color="#C8102E" />
        ) : null}
      </View>
    </View>
  );
}
