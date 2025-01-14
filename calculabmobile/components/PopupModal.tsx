import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const PopupModal: React.FC<PopupModalProps> = ({ visible, onClose, title, message }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
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
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});

export default PopupModal;

