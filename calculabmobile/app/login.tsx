import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!form.usernameOrEmail || !form.password) {
      Alert.alert("Error", "Please fill in all fields!");
      return;
    }
    console.log("User Logged In:", form);
    router.push("/explore");
  };

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Image
          source={require("../assets/images/Background_Login_Register.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
        <View style={styles.titleContent}>
          <Image
            source={require("../assets/images/Logo_Calculab.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Continue Your</Text>
          <Text style={styles.title}>Learning Adventure</Text>
        </View>
      </View>

      {/* Login Form Section */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.formTitle}>Sign in</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>User name or email address</Text>
          <TextInput
            style={styles.input}
            value={form.usernameOrEmail}
            onChangeText={(text) => setForm({ ...form, usernameOrEmail: text })}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!passwordVisible}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
            <TouchableOpacity
              style={styles.passwordToggle}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Image
                source={require("../assets/images/Hide.png")}
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            form.usernameOrEmail && form.password
              ? styles.buttonActive
              : styles.buttonDisabled,
          ]}
          disabled={!form.usernameOrEmail || !form.password}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.switchText}>
          Don’t have an account?{" "}
          <Text style={styles.switchLink} onPress={() => router.push("/")}>
            Sign up
          </Text>
        </Text>

        {/* Separator */}
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login Buttons */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/Google.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/images/Twitter.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue with Twitter</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },

  /* Title Section */
  titleSection: { height: height * 0.2, position: "relative" },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  titleContent: {
    position: "absolute",
    top: "20%",
    alignItems: "center",
    width: "100%",
  },
  logo: { width: 50, height: 50, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", textAlign: "center" },

  /* Form Section */
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  formTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 14, color: "#333", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
  passwordContainer: { position: "relative" },
  passwordToggle: { position: "absolute", right: 10, top: 12 },
  passwordIcon: { width: 20, height: 20 },
  forgotPassword: { fontSize: 14, textAlign: "right", color: "#1CB5E0", marginBottom: 20 },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonActive: { backgroundColor: "#1CB5E0" },
  buttonDisabled: { backgroundColor: "#ccc" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  switchText: { textAlign: "center", fontSize: 14 },
  switchLink: { color: "#1CB5E0", textDecorationLine: "underline" },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc" },
  separatorText: { marginHorizontal: 10, color: "#999", fontSize: 14 },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialIcon: { width: 20, height: 20, marginRight: 10 },
  socialText: { fontSize: 16, color: "#333" },
});
