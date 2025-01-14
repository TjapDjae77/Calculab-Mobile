import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

interface RoadmapItemProps {
  title: string;
  icon: string;
  completed: boolean;
  isLast: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, icon, completed, isLast }) => {
  const getIconSource = (iconName: string) => {
    switch (iconName) {
      case 'composition':
        return require('../assets/images/composition_icon.png');
      case 'advanced-composition':
        return require('../assets/images/advanced_composition_icon.png');
      case 'trigonometry':
        return require('../assets/images/trigonometry_icon.png');
      case 'inverse':
        return require('../assets/images/inverse_icon.png');
      case 'exponential':
        return require('../assets/images/exponential_icon.png');
      case 'logarithmic':
        return require('../assets/images/logarithmic_icon.png');
      default:
        return require('../assets/images/default_icon.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={getIconSource(icon)} style={styles.icon} />
        {!isLast && <View style={[styles.line, completed && styles.completedLine]} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, completed && styles.completedTitle]}>{title}</Text>
        <Text style={styles.status}>{completed ? 'Completed' : 'Locked'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: COLORS.gray,
    marginTop: 10,
  },
  completedLine: {
    backgroundColor: COLORS.primary,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginBottom: 5,
  },
  completedTitle: {
    color: COLORS.primary,
  },
  status: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },
});

export default RoadmapItem;

