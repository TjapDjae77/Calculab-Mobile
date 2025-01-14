import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const MaterialInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Material Input</Text>
      <View style={styles.dropArea}>
        <Text style={styles.dropText}>Drop the material here</Text>
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
  dropArea: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.lightGray,
    borderWidth: 2,
    borderColor: COLORS.text,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },
});

export default MaterialInput;

