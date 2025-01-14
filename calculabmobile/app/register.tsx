import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants/theme';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Implement registration logic here
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
    } else {
      console.log('Registration attempted');
      // Clear error message if successful
      setErrorMessage('');
    }
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
          <Text style={styles.title}>Unlock Your Next Learning Adventure</Text>
          <Text style={styles.description}>
            Join Calculab and start your journey to mastering calculus with engaging simulations, gamified quizzes, and a supportive learning community. Sign up today and transform the way you learn math!
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Register</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.togglePassword}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Image
              source={showConfirmPassword ? require('../assets/images/Hide.svg') : require('../assets/images/Show.svg')}
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
        </View>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <TouchableOpacity
          style={[styles.button, (!username || !email || !password || !confirmPassword) && styles.buttonDisabled]}
          onPress={handleRegister}
          disabled={!username || !email || !password || !confirmPassword}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Log in</Text>
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
  errorMessage: {
    color: COLORS.error,
    fontFamily: FONTS.regular,
    fontSize: SIZES.font,
    marginBottom: SIZES.base,
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.base,
  },
  loginText: {
    fontFamily: FONTS.regular,
  },
  loginLink: {
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

export default Register;

