import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputField from "../components/InputField";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
          paddingVertical: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        
        <Text style={{ fontSize: 32, fontFamily: "Poppins-Bold", color: "black", marginBottom: 4 }}>
          Create an account
        </Text>

        <Text style={{ fontSize: 18, fontFamily: "Poppins-Medium", color: "#6B7280", marginBottom: 32 }}>
          Enter your email, phone number & password to sign up.
        </Text>

        <Text style={{ fontSize: 18, fontFamily: "Poppins-Medium", color: "#4B5563", marginBottom: 4, marginLeft: 8 }}>
          Email
        </Text>
        <InputField
          placeholder="name@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={{ fontSize: 18, fontFamily: "Poppins-Medium", color: "#4B5563", marginBottom: 4, marginLeft: 8 }}>
          Phone number
        </Text>
        <InputField
          placeholder="+1 000 000 000"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={{ fontSize: 18, fontFamily: "Poppins-Medium", color: "#4B5563", marginBottom: 4, marginLeft: 8 }}>
          Password
        </Text>
        <InputField
          placeholder="New password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={{ fontSize: 18, fontFamily: "Poppins-Medium", color: "#4B5563", marginBottom: 4, marginLeft: 8 }}>
          Confirm password
        </Text>
        <InputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          className="flex-row items-center my-4"
          activeOpacity={0.8}
        >
          <View
            className={`w-5 h-5 rounded border mr-3 items-center justify-center ${
              checked ? "bg-[#C8102E] border-[#C8102E]" : "border-gray-400"
            }`}
          >
            {checked && (
              <Ionicons name="checkmark" size={20} color="white" />
            )}
          </View>

          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16, color: "#4B5563", flex: 1 }}>
            I agree to Vaulton Terms & Policy.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonBase,
            { backgroundColor: canSubmit ? "#C8102E" : "#E57373" },
          ]}
          onPress={() => router.push("/screens/OTPVerification")}
          disabled={!canSubmit}
          activeOpacity={0.8}
        >
          <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins-Bold" }}>
            Sign up
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", fontFamily: "Poppins-Medium", color: "#6B7280", fontSize: 14, marginTop: 24 }}>
          No account yet?{" "}
          <Text style={{ color: "#C8102E", fontFamily: "Poppins-Bold" }}>Sign in</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }
});
