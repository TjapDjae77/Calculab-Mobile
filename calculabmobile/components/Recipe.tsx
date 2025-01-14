import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const Recipe: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe</Text>
      <Image
        source={require('../assets/images/Rocket Recipe.png')}
        style={styles.recipeImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  recipeImage: {
    width: '100%',
    height: '80%',
  },
});

export default Recipe;

