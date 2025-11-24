import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StatusScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#130B0B", "#3A0A0A", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      {/* Success Icon Glow */}
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          backgroundColor: "rgba(255,255,255,0.08)",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 26,
          shadowColor: "#C8102E",
          shadowOpacity: 0.35,
          shadowRadius: 20,
          elevation: 10,
        }}
      >
        <Image
          source={require("../../assets/images/check.png")}
          style={{ width: 60, height: 60, tintColor: "#FF4D4D" }}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 26,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        You're All Set! 🎉
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          color: "#E5E7EB",
          textAlign: "center",
          marginTop: 10,
          lineHeight: 20,
        }}
      >
        We are reviewing your information.
        {"\n"}You'll be notified once the account is active!
      </Text>

      {/* Status Details */}
      <View
        style={{
          width: "100%",
          marginTop: 32,
          padding: 18,
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.15)",
        }}
      >
        {[
          "Document verification in progress",
          "Identity validation completed",
          "Final approval pending",
        ].map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: index !== 2 ? 12 : 0,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#C8102E",
                marginRight: 12,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#F9FAFB",
                fontSize: 13,
              }}
            >
              {item}
            </Text>
          </View>
        ))}
      </View>

      {/* CTA */}
      <PrimaryButton
        title="Back to Home"
        style={{ marginTop: 42, width: "100%" }}
        onPress={() => router.push("/screens/SignIn")}
      />
    </LinearGradient>
  );
}
