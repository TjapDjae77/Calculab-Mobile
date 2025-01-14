import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function LeaderboardList() {
  const ranks = [4, 5, 6, 7, 8, 9, 10];

  return (
    <View style={styles.container}>
      {ranks.map((rank) => (
        <View key={rank} style={styles.rankItem}>
          <View style={styles.playerInfo}>
            <Text style={styles.rankNumber}>{rank}</Text>
            <View style={styles.avatar}>
              <Image 
                source={require('../assets/images/User_Icon.png')}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.playerName}>-</Text>
          </View>
          <Text style={styles.score}>Score</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 32,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rankItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E7EB',
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankNumber: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    marginRight: 16,
    width: 30,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: '#00D95F',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  playerName: {
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  score: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
});

