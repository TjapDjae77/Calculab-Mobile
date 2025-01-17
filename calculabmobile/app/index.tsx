import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    // Proceed with registration (mock action)
    console.log('User Registered:', form);
    router.push('/login'); // Navigate to login
  };

  return (
    <View style={styles.container}>
      {/* Left Side with Image and Text */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/Background_Login_Register.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
        <View style={styles.imageTextContainer}>
          <Image
            source={require('../assets/images/Logo_Calculab.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Unlock Your Next Learning Adventure</Text>
          <Text style={styles.subtitle}>
            Join Calculab and start your journey to mastering calculus with engaging simulations, gamified quizzes, and a supportive learning community.
          </Text>
        </View>
      </View>

      {/* Right Side with Registration Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="What should we call you?"
          value={form.username}
          onChangeText={(text) => setForm({ ...form, username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="What's your email?"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            secureTextEntry={!passwordVisible}
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Image
              source={require('../assets/images/Hide.png')}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry={!confirmPasswordVisible}
            value={form.confirmPassword}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            <Image
              source={require('../assets/images/Hide.png')}
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.registerButton, form.username && form.email && form.password && form.confirmPassword ? styles.registerButtonActive : styles.registerButtonDisabled]}
          disabled={!form.username || !form.email || !form.password || !form.confirmPassword}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => router.push('/login')}>
            Log in
          </Text>
        </Text>
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Twitter.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Twitter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  imageTextContainer: {
    zIndex: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  passwordIcon: {
    width: 20,
    height: 20,
  },
  registerButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  registerButtonActive: {
    backgroundColor: '#1CB5E0',
  },
  registerButtonDisabled: {
    backgroundColor: '#ccc',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  loginLink: {
    color: '#1CB5E0',
    textDecorationLine: 'underline',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
