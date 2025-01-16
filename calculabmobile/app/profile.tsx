import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { useRouter } from 'expo-router';

export default function Profile() {
  const [username, setUsername] = useState('-');
  const [email, setEmail] = useState('-');
  const [levelsCompleted, setLevelsCompleted] = useState('-');
  const [totalScore, setTotalScore] = useState('-');
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    // Fetch user data here
    // For now, we'll use placeholder data
    setUsername('JohnDoe');
    setEmail('johndoe@example.com');
    setLevelsCompleted('5');
    setTotalScore('1000');
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout attempted');
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary, COLORS.tertiary]}
      style={styles.container}
    >
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={() => handleNavigation('/roadmap')} style={styles.logoContainer}>
          <Image source={require('../assets/images/Logo_Calculab.svg')} style={styles.logo} />
          <Text style={styles.logoText}>Calculab</Text>
        </TouchableOpacity>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => handleNavigation('/roadmap')} style={styles.navItem}>
            <Image source={require('../assets/images/bookmark.svg')} style={styles.navIcon} />
            <Text style={styles.navText}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('/leaderboard')} style={styles.navItem}>
            <Image source={require('../assets/images/medal.svg')} style={styles.navIcon} />
            <Text style={styles.navText}>Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Image source={require('../assets/images/profile.svg')} style={styles.navIcon} />
            <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../assets/images/More.svg')} style={styles.navIcon} />
            <Text style={styles.navText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{username[0]}</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.infoText}>Username: <Text style={styles.infoValue}>{username}</Text></Text>
              <Text style={styles.infoText}>Email: <Text style={styles.infoValue}>{email}</Text></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Your Statistics</Text>
            <View style={styles.statsContent}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{levelsCompleted}</Text>
                <Text style={styles.statLabel}>Levels Completed</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{totalScore}</Text>
                <Text style={styles.statLabel}>Total Score</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 80,
    backgroundColor: COLORS.tertiary,
    paddingVertical: SIZES.padding,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: SIZES.padding * 2,
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
    marginTop: SIZES.base,
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
  },
  navItem: {
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  activeNavItem: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base * 2,
    padding: SIZES.base,
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  navText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    marginTop: SIZES.base / 2,
  },
  activeNavText: {
    color: COLORS.tertiary,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    padding: SIZES.padding,
  },
  profileContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginBottom: SIZES.padding,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.padding,
  },
  avatarText: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  userInfo: {
    flex: 1,
  },
  infoText: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginBottom: SIZES.base,
  },
  infoValue: {
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  editButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    alignSelf: 'flex-start',
    marginBottom: SIZES.padding,
  },
  editButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
  },
  statsContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginTop: SIZES.padding,
  },
  statsTitle: {
    fontSize: SIZES.large,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginBottom: SIZES.base,
    textAlign: 'center',
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
});
