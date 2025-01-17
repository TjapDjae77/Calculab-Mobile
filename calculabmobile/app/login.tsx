import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login attempted');
    // If login is successful, navigate to the roadmap
    router.push('/roadmap');
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#60A5FA', '#dc1f84']}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.contentLeft}>
          <Image
            source={require('../assets/images/Logo_Calculab.svg')}
            style={styles.logo}
          />
          <Text style={styles.title}>Continue Your Learning Adventure</Text>
          <Text style={styles.description}>
            Sign in to Calculab and continue your interactive calculus learning experience with engaging simulations, challenging quizzes, and a competitive leaderboard. Learn effectively anytime, anywhere.
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Sign in</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User name or email address"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.togglePassword}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? require('../assets/images/Hide.svg') : require('../assets/images/Show.svg')}
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forget your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, (!username || !password) && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={!username || !password}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Link href="/register" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Google.svg')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/images/Twitter.svg')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Continue with Twitter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentLeft: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 10,
    fontFamily: 'Inter-Regular',
  },
  togglePassword: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  toggleIcon: {
    width: 24,
    height: 24,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: '#60A5FA',
    fontFamily: 'Inter-Regular',
  },
  button: {
    backgroundColor: '#60A5FA',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    fontFamily: 'Inter-Regular',
  },
  signupLink: {
    color: '#60A5FA',
    fontFamily: 'Inter-Bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  orText: {
    marginHorizontal: 10,
    color: '#6B7280',
    fontFamily: 'Inter-Regular',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
});

