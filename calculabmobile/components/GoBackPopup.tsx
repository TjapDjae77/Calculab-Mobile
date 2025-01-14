import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface GoBackPopupProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const GoBackPopup: React.FC<GoBackPopupProps> = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Leave Level?</Text>
          <Text style={styles.message}>Your progress will be lost if you leave the game. Are you sure?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={onConfirm}>
              <Text style={styles.buttonText}>Leave</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: COLORS.gray,
  },
  confirmButton: {
    backgroundColor: COLORS.error,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default GoBackPopup;

