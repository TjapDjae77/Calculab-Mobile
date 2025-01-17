import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { COLORS, FONTS } from '../constants/theme';

interface Player {
  id: string;
  name: string;
  score: number;
  avatar: any; // Using any for now since we're using require()
}

const leaderboardData = [
  { id: '1', name: 'John Doe', score: 1580, avatar: require('../assets/images/User_Icon.png') },
  { id: '2', name: 'Emma Smith', score: 1450, avatar: require('../assets/images/User_Icon.png') },
  { id: '3', name: 'Alex Johnson', score: 1320, avatar: require('../assets/images/User_Icon.png') },
  { id: '4', name: 'Sophia Wilson', score: 1250, avatar: require('../assets/images/User_Icon.png') },
  { id: '5', name: 'Michael Brown', score: 1180, avatar: require('../assets/images/User_Icon.png') },
  { id: '6', name: 'Olivia Davis', score: 1120, avatar: require('../assets/images/User_Icon.png') },
  { id: '7', name: 'William Taylor', score: 1050, avatar: require('../assets/images/User_Icon.png') },
  { id: '8', name: 'Ava Anderson', score: 980, avatar: require('../assets/images/User_Icon.png') },
  { id: '9', name: 'James Thomas', score: 920, avatar: require('../assets/images/User_Icon.png') },
  { id: '10', name: 'Isabella White', score: 870, avatar: require('../assets/images/User_Icon.png') },
];

export default function LeaderboardScreen() {
  const router = useRouter();

  const renderItem = ({ item, index }: { item: Player; index: number }) => (
    <View style={styles.rankItem}>
      <View style={styles.playerInfo}>
        <Text style={styles.rankNumber}>{index + 1}</Text>
        <Image 
          source={item.avatar} 
          style={styles.avatar}
          defaultSource={require('../assets/images/User_Icon.png')}
        />
        <Text style={styles.playerName}>{item.name}</Text>
      </View>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Leaderboard</Text>
        <Link href="/profile" asChild>
          <TouchableOpacity>
            <Text style={styles.profileButton}>Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
  },
  backButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  profileButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
  },
  listContent: {
    padding: 20,
  },
  rankItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankNumber: {
    width: 24,
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  playerName: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  score: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
});

