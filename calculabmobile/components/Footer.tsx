import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../constants/theme';

const Footer = () => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      {/* <TouchableOpacity onPress={() => router.push('/')}>
        <Image source={require('../assets/images/home_icon.png')} style={styles.icon} />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => router.push('/roadmap')}>
        <Image source={require('../assets/images/roadmap_icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/leaderboard')}>
        <Image source={require('../assets/images/leaderboard_icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/profile')}>
        <Image source={require('../assets/images/profile_icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Footer;
