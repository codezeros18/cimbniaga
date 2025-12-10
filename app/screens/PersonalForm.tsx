import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
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

  /** FORM STATES */
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);

  /** EMAIL DOMAIN CORRECTION */
  const checkEmailSuggestion = (val: string) => {
    setEmail(val);

    const wrong = ["gmal", "gnail", "gmaik", "gmial", "gmil"];
    if (wrong.some(w => val.includes(w))) {
      setSuggestion(val.replace(/g[a-z]+\.com/, "gmail.com"));
    } else {
      setSuggestion("");
    }
  };

  /** PHONE FORMATTER (+62) */
  const formatPhone = (val: string) => {
    let cleaned = val.replace(/\D+/g, ""); // only numbers
    if (!cleaned.startsWith("62")) cleaned = "62" + cleaned;
    setPhone("+" + cleaned);
  };

  /** PASSWORD STRENGTH */
  const strength = useMemo(() => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8)
      return "Strong";
    return "Medium";
  }, [password]);

  const strengthColor =
    strength === "Weak" ? "#EF4444" :
    strength === "Medium" ? "#F59E0B" : "#16A34A";

  const canSubmit =
    email &&
    phone &&
    password &&
    confirm &&
    password === confirm &&
    agree;

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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 26,
            paddingVertical: 80,
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
              Step <Text style={{ color: "#C8102E" }}>1</Text> of 7
            </Text>
          </View>

          {/* HEADER */}
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 30,
              color: "#FFFFFF",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Create Your Profile
          </Text>

          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#D1D5DB",
              textAlign: "center",
              marginBottom: 34,
              lineHeight: 20,
            }}
          >
            Start your digital banking journey in just a few steps
          </Text>

          {/* FORM */}
          <InputField
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={checkEmailSuggestion}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
          />

          {suggestion !== "" && (
            <TouchableOpacity onPress={() => setEmail(suggestion)}>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 12,
                  color: "#94A3B8",
                  marginBottom: 10,
                }}
              >
                Did you mean <Text style={{ color: "#F87171" }}>{suggestion}</Text> ?
              </Text>
            </TouchableOpacity>
          )}

          <InputField
            label="Phone Number"
            placeholder="+62812xxxxxxx"
            value={phone}
            onChangeText={formatPhone}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoComplete="tel"
          />

          <InputField
            label="Password"
            placeholder="Min. 8 characters"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            autoComplete="password"
          />

          {password.length > 0 && (
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 12,
                color: strengthColor,
                marginTop: 4,
                marginBottom: 10,
              }}
            >
              Password Strength: {strength}
            </Text>
          )}

          <InputField
            label="Confirm Password"
            placeholder="Re-enter your password"
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
            textContentType="password"
            autoComplete="password-new"
          />

          {confirm.length > 0 && confirm !== password && (
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#EF4444",
                marginBottom: 8,
              }}
            >
              Passwords do not match
            </Text>
          )}

          {/* AGREEMENT */}
          <TouchableOpacity
            onPress={() => setAgree(!agree)}
            style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
          >
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: agree ? "#C8102E" : "#6B7280",
                backgroundColor: agree ? "#C8102E" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {agree && <Ionicons name="checkmark" size={14} color="#fff" />}
            </View>

            <Text
              style={{
                fontFamily: "Poppins-Regular",
                marginLeft: 10,
                fontSize: 13,
                lineHeight: 18,
                color: "#E5E7EB",
                flex: 1,
              }}
            >
              I agree to CIMB Niaga Terms & Conditions
            </Text>
          </TouchableOpacity>

          <PrimaryButton
            title="Continue"
            disabled={!canSubmit}
            onPress={() => router.push("/screens/OTPVerification")}
            style={{ marginTop: 32 }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
