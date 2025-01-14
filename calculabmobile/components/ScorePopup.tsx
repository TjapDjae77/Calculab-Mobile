import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface ScorePopupProps {
  visible: boolean;
  onClose: () => void;
  score: number;
}

const ScorePopup: React.FC<ScorePopupProps> = ({ visible, onClose, score }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Level Completed!</Text>
          <Text style={styles.scoreLabel}>Your total score:</Text>
          <Text style={styles.score}>{score}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: 16,
  },
  scoreLabel: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginBottom: 8,
  },
  score: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: 24,
  },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
});

export default ScorePopup;

