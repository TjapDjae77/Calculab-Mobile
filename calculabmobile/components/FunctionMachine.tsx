import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const FunctionMachine: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Function Machine</Text>
      <View style={styles.machine}>
        <Text style={styles.question}>Function question goes here</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginBottom: 8,
  },
  machine: {
    width: '100%',
    height: 180,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  question: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    textAlign: 'center',
  },
  playButton: {
    marginTop: 16,
    backgroundColor: COLORS.gray,
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  playButtonText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});

export default FunctionMachine;

