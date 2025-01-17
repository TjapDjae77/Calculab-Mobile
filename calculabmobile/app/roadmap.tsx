import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

const roadmapItems = [
  { id: 1, title: 'Level 1: Composition Function', completed: true },
  { id: 2, title: 'Level 2: Advanced Composition Function', completed: false },
  { id: 3, title: 'Level 3: Trigonometry Composition Function', completed: false },
];

export default function Roadmap() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Roadmap</Text>
        <Link href="/profile" asChild>
          <TouchableOpacity>
            <Text style={styles.profileButton}>Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <ScrollView style={styles.content}>
        {roadmapItems.map((item, index) => (
          <Link key={item.id} href={`/level${item.id}`} asChild>
            <TouchableOpacity style={styles.roadmapItem}>
              <View style={styles.levelNumberContainer}>
                <Text style={styles.levelNumber}>{item.id}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.itemTitle, item.completed && styles.completedTitle]}>{item.title}</Text>
                <Text style={styles.status}>{item.completed ? 'Completed' : 'Locked'}</Text>
              </View>
              {index < roadmapItems.length - 1 && <View style={[styles.line, item.completed && styles.completedLine]} />}
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    fontSize: 16,
    color: '#60A5FA',
    fontFamily: 'Inter-Bold',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  profileButton: {
    fontSize: 16,
    color: '#60A5FA',
    fontFamily: 'Inter-Bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  roadmapItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  levelNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#60A5FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  levelNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  line: {
    position: 'absolute',
    left: 20,
    top: 40,
    width: 2,
    height: 40,
    backgroundColor: '#D1D5DB',
  },
  completedLine: {
    backgroundColor: '#60A5FA',
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#1F2937',
    marginBottom: 5,
  },
  completedTitle: {
    color: '#60A5FA',
  },
  status: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});

