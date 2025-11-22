import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View className="mb-4 w-full">
      <View
        className={`flex-row items-center border rounded-2xl px-4 py-3 bg-white ${
          isFocused ? "border-[#C8102E]" : "border-gray-300"
        }`}
      >
        <TextInput
          style={{
            flex: 1,
            color: "#1F2937",
            fontSize: 18, // 🔥 diperbesar jadi ukuran 18
            fontFamily: "Poppins-Medium", // 🔥 ganti font
          }}
          placeholder={placeholder}
          placeholderTextColor="#B0B0B0"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {value.length > 0 && (
          <Ionicons name="checkmark-circle" size={22} color="#C8102E" />
        )}
      </View>
    </View>
  );
};

export default InputField;
