import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

const Level2Screen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Level 2: Advanced Composition Function</Text>
        <Link href="/profile" asChild>
          <TouchableOpacity>
            <Text style={styles.profileButton}>Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          Welcome to Level 2. Here you'll dive deeper into advanced composition functions.
        </Text>
        {/* Add more content for Level 2 here */}
      </View>
    </View>
  );
};

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
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#4B5563',
    marginBottom: 20,
  },
});

export default Level2Screen;

