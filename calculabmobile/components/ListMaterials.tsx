import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const materials = [
  { id: 1, image: require('../assets/images/aluminium.png') },
  { id: 2, image: require('../assets/images/fiberglass.png') },
  { id: 3, image: require('../assets/images/anvil.png') },
  { id: 4, image: require('../assets/images/glass.png') },
];

const ListMaterials: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Materials</Text>
      <View style={styles.grid}>
        {materials.map((material) => (
          <View key={material.id} style={styles.materialItem}>
            <Image source={material.image} style={styles.materialImage} resizeMode="contain" />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  materialItem: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  materialImage: {
    width: '60%',
    height: '60%',
  },
});

export default ListMaterials;

