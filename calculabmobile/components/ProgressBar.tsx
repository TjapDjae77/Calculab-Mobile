import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: 8,
    backgroundColor: COLORS.gray,
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
});

export default ProgressBar;

