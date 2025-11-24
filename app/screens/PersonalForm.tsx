import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

export default function PersonalForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const allFilled = email && phone && password && confirmPassword;
  const passwordsMatch = password === confirmPassword;
  const canSubmit = allFilled && checked && passwordsMatch;

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingVertical: 80,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 28,
              color: "#F9FAFB",
              marginBottom: 6,
              textAlign: "center",
            }}
          >
            Create an Account
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D1D5DB",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            Enter your details to get started
          </Text>

          {/* Form */}
          <InputField
            label="Email"
            placeholder="name@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <InputField
            label="Phone number"
            placeholder="+62 812 3456 7890"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <InputField
            label="Password"
            placeholder="••••••••"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <InputField
            label="Confirm password"
            placeholder="••••••••"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Checkbox */}
          <TouchableOpacity
            onPress={() => setChecked(!checked)}
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: checked ? "#C8102E" : "#6B7280",
                backgroundColor: checked ? "#C8102E" : "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {checked && <Ionicons name="checkmark" size={12} color="#fff" />}
            </View>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                marginLeft: 10,
                fontSize: 13,
                color: "#E5E7EB",
                flex: 1,
              }}
            >
              I agree to CIMB Niaga Terms & Policy.
            </Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <View style={{ marginTop: 30 }}>
            <PrimaryButton
              title="Sign Up"
              disabled={!canSubmit}
              onPress={() => router.push("/screens/OTPVerification")}
            />
          </View>

          {/* Footer */}
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              marginTop: 25,
              textAlign: "center",
              color: "#D1D5DB",
              fontSize: 13,
            }}
          >
            Already have an account?{" "}
            <Text
              style={{
                color: "#F97373",
                fontFamily: "Poppins-SemiBold",
              }}
              onPress={() => router.push("/screens/SignIn")}
            >
              Sign in
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
