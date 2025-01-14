import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onPress: () => void;
}

export default function LanguageSelector({ selectedLanguage, onPress }: LanguageSelectorProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>Language</Text>
      <View style={styles.divider} />
      <Text style={styles.selected}>{selectedLanguage}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 25,
    padding: 8,
  },
  label: {
    color: COLORS.white,
    marginRight: 8,
    fontFamily: FONTS.regular,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 8,
  },
  selected: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});

