import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface HeaderProps {
  levelTitle: string;
  lives: number;
  onGoBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ levelTitle, lives, onGoBack }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
        <Image
          source={require('../assets/images/Go_Back.svg')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{levelTitle}</Text>
      <Text style={styles.lives}>{`Lives: ${lives}`}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Image
          source={require('../assets/images/User_Icon.png')}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  lives: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
  profileButton: {
    padding: 5,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default Header;
