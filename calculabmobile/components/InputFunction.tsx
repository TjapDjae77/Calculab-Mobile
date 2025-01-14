import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const InputFunction: React.FC = () => {
  const [function, setFunction] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Function</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>g(x) =</Text>
        <TextInput
          style={styles.input}
          value={function}
          onChangeText={setFunction}
          placeholder="Enter function"
          placeholderTextColor={COLORS.textLight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
});

export default InputFunction;

