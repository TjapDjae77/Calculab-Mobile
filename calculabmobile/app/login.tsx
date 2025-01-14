import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants/theme';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login attempted');
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
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
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backgroundImage: {
    height: SIZES.height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentLeft: {
    padding: SIZES.padding,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: SIZES.base,
  },
  title: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SIZES.base,
  },
  description: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    padding: SIZES.padding,
  },
  formTitle: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    marginBottom: SIZES.base * 2,
  },
  inputContainer: {
    marginBottom: SIZES.base,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.base,
    padding: SIZES.base,
    fontFamily: FONTS.regular,
  },
  togglePassword: {
    position: 'absolute',
    right: SIZES.base,
    top: SIZES.base,
  },
  toggleIcon: {
    width: 24,
    height: 24,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: SIZES.base,
  },
  forgotPasswordText: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.base,
    borderRadius: SIZES.base,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.base,
  },
  signupText: {
    fontFamily: FONTS.regular,
  },
  signupLink: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.base * 2,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray,
  },
  orText: {
    marginHorizontal: SIZES.base,
    color: COLORS.gray,
    fontFamily: FONTS.regular,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.base,
    padding: SIZES.base,
    marginBottom: SIZES.base,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: SIZES.base,
  },
  socialButtonText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font,
  },
});

export default Login;

