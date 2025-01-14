import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import RoadmapItem from '../components/RoadmapItem';
import Footer from '../components/Footer';
import { COLORS, FONTS } from '../constants/theme';

const Roadmap = () => {
  const navigation = useNavigation();

  const roadmapItems = [
    { id: 1, title: 'Composition Function', icon: 'composition', completed: true },
    { id: 2, title: 'Advanced Composition Function', icon: 'advanced-composition', completed: false },
    { id: 3, title: 'Trigonometry Composition Function', icon: 'trigonometry', completed: false },
    { id: 4, title: 'Inverse Function', icon: 'inverse', completed: false },
    { id: 5, title: 'Exponential Function', icon: 'exponential', completed: false },
    { id: 6, title: 'Logarithmic Function', icon: 'logarithmic', completed: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Roadmap" onBackPress={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Roadmap</Text>
        <View style={styles.roadmapContainer}>
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              completed={item.completed}
              isLast={index === roadmapItems.length - 1}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginBottom: 20,
  },
  roadmapContainer: {
    marginBottom: 20,
  },
});

export default Roadmap;

