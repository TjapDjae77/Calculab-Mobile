import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
    } else {
      console.log('Registration attempted');
      setErrorMessage('');
      // If registration is successful, navigate to the login page
      router.push('/login');
    }
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
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Log in</Text>
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
  errorMessage: {
    color: '#EF4444',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 10,
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    fontFamily: 'Inter-Regular',
  },
  loginLink: {
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

