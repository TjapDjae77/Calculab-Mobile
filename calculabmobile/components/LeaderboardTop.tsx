import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function LeaderboardTop() {
  const TopPlayer = ({ rank, size, borderColor, marginTop = 0 }) => (
    <View style={[styles.playerContainer, { marginTop }]}>
      <View style={[
        styles.playerAvatar,
        { width: size, height: size, borderColor }
      ]}>
        <Image 
          source={require('../assets/images/User_Icon.png')}
          style={[styles.playerImage, { width: size * 0.75, height: size * 0.75 }]}
        />
      </View>
      <Text style={styles.playerName}>-</Text>
      <Text style={styles.playerScore}>Score</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <View style={styles.topPlayers}>
        <TopPlayer 
          rank={2}
          size={96}
          borderColor="#C5C5C5"
          marginTop={64}
        />
        <TopPlayer 
          rank={1}
          size={128}
          borderColor="#E7C464"
        />
        <TopPlayer 
          rank={3}
          size={96}
          borderColor="#EACAAC"
          marginTop={64}
        />
      </View>
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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    marginBottom: 32,
  },
  topPlayers: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  playerContainer: {
    alignItems: 'center',
    flex: 1,
  },
  playerAvatar: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerImage: {
    resizeMode: 'contain',
  },
  playerName: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  playerScore: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
});

