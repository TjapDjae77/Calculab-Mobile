import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const OutputComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Output Component</Text>
      <View style={styles.outputArea}>
        <Image
          source={require('../assets/images/Feet_Rocket.svg')}
          style={styles.outputImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginBottom: 12,
  },
  outputArea: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.lightGray,
    borderWidth: 2,
    borderColor: COLORS.text,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputImage: {
    width: '80%',
    height: '80%',
  },
});

export default OutputComponent;

