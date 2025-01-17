import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function Profile() {
  const [username, setUsername] = useState('-');
  const [email, setEmail] = useState('-');
  const [levelsCompleted, setLevelsCompleted] = useState('-');
  const [totalScore, setTotalScore] = useState('-');
  const router = useRouter();

  useEffect(() => {
    // Fetch user data here
    // For now, we'll use placeholder data
    setUsername('JohnDoe');
    setEmail('johndoe@example.com');
    setLevelsCompleted('5');
    setTotalScore('1000');
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout attempted');
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.placeholder} />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{username[0]}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.infoText}>Username: <Text style={styles.infoValue}>{username}</Text></Text>
            <Text style={styles.infoText}>Email: <Text style={styles.infoValue}>{email}</Text></Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Your Statistics</Text>
          <View style={styles.statsContent}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{levelsCompleted}</Text>
              <Text style={styles.statLabel}>Levels Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{totalScore}</Text>
              <Text style={styles.statLabel}>Total Score</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
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
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#60A5FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  avatarText: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  userInfo: {
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 5,
  },
  infoValue: {
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  editButton: {
    backgroundColor: '#60A5FA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 10,
    textAlign: 'center',
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#60A5FA',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
});

