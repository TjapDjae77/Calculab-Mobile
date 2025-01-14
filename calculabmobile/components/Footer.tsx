import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/theme';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/images/home_icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Roadmap')}>
        <Image source={require('../assets/images/roadmap_icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
        <Image source={require('../assets/images/leaderboard_icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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

