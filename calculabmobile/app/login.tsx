import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!form.usernameOrEmail || !form.password) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }
    // Mock login action
    console.log('User Logged In:', form);
    router.push('/explore'); // Navigate to explore or dashboard
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
          <Text style={styles.title}>Continue Your Learning Adventure</Text>
          <Text style={styles.subtitle}>
            Sign in to Calculab and continue your interactive calculus learning experience with engaging simulations, challenging quizzes, and a competitive leaderboard.
          </Text>
        </View>
      </View>

      {/* Right Side with Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Sign in</Text>
        <TextInput
          style={styles.input}
          placeholder="User name or email address"
          value={form.usernameOrEmail}
          onChangeText={(text) => setForm({ ...form, usernameOrEmail: text })}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your password"
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
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signInButton, form.usernameOrEmail && form.password ? styles.signInButtonActive : styles.signInButtonDisabled]}
          disabled={!form.usernameOrEmail || !form.password}
          onPress={handleLogin}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <Text style={styles.signUpLink} onPress={() => router.push('/')}>
            Sign up
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
  forgotPassword: {
    textAlign: 'right',
    color: '#1CB5E0',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginBottom: 20,
  },
  signInButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButtonActive: {
    backgroundColor: '#1CB5E0',
  },
  signInButtonDisabled: {
    backgroundColor: '#ccc',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  signUpLink: {
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
