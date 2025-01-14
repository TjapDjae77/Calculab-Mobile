import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function Home() {
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  return (
    <LinearGradient
      colors={['#6D2476', '#1A1A40']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/images/Logo_Calculab.svg')}
              style={styles.logo}
            />
            <Text style={styles.logoText}>Calculab</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.languageSelector}
            onPress={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <Text style={styles.languageText}>Language</Text>
            <View style={styles.divider} />
            <Text style={styles.selectedLanguage}>{language}</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Explore The Universe of Calculus!</Text>
            <Link href="/login" asChild>
              <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Image 
            source={require('../assets/images/Rocket_Blackhole.svg')}
            style={styles.heroImage}
          />
        </View>

        {/* Features Sections */}
        <View style={styles.featureSection}>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Attractive. Interactive. Effective.</Text>
            <Text style={styles.featureText}>
              Learning calculus with Calculab is engaging, interactive, and effective! 
              Dive into small, focused simulations that make complex calculus concepts 
              easier to understand while building your skills step by step.
            </Text>
          </View>
          <Image 
            source={require('../assets/images/Astronaut.svg')}
            style={styles.featureImage}
          />
        </View>

        {/* Additional sections follow the same pattern... */}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>What is Calculab?</Text>
          <Text style={styles.footerDescription}>
            Calculab is an innovative virtual lab designed to make learning calculus 
            interactive, competitive, and fun. With engaging simulations, gamified 
            quizzes, and a leaderboard to challenge your peers, Calculab transforms 
            complex mathematical concepts into an enjoyable and effective learning journey.
          </Text>
          
          <View style={styles.footerDivider} />
          
          <View style={styles.socialLinks}>
            <Text style={styles.socialTitle}>Contact Us</Text>
            <View style={styles.socialIcons}>
              {/* Social Media Icons */}
            </View>
          </View>
          
          <View style={styles.footerDivider} />
          
          <Text style={styles.copyright}>
            © 2024 All rights reserved. Made by Rajendra Farras Rayhan
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    padding: 8,
  },
  languageText: {
    color: 'white',
    marginRight: 8,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: 'white',
    marginHorizontal: 8,
  },
  selectedLanguage: {
    color: 'white',
  },
  heroSection: {
    padding: 20,
    marginTop: 40,
  },
  heroContent: {
    alignItems: 'flex-start',
  },
  heroTitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Inter-Bold',
    marginBottom: 20,
    lineHeight: 48,
  },
  getStartedButton: {
    backgroundColor: '#dc1f84',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 30,
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  heroImage: {
    width: width * 0.8,
    height: width * 0.8,
    alignSelf: 'center',
    marginTop: 20,
  },
  featureSection: {
    padding: 20,
    marginTop: 40,
  },
  featureContent: {
    marginBottom: 20,
  },
  featureTitle: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    marginBottom: 12,
  },
  featureText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
  featureImage: {
    width: width * 0.7,
    height: width * 0.7,
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: '#dc1f84',
    padding: 40,
  },
  footerTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  footerDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  footerDivider: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 24,
  },
  socialLinks: {
    alignItems: 'center',
  },
  socialTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  copyright: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
});

