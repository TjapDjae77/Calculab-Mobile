import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Leaderboard() {
  const leaderboard = [
    { id: 1, name: "User 1", score: 1200, borderColor: "#E7C464" },
    { id: 2, name: "User 2", score: 1100, borderColor: "#C5C5C5" },
    { id: 3, name: "User 3", score: 1050, borderColor: "#EACAAC" },
    { id: 4, name: "User 4", score: 950, borderColor: "#00D95F" },
    { id: 5, name: "User 5", score: 900, borderColor: "#00D95F" },
    { id: 6, name: "User 6", score: 850, borderColor: "#00D95F" },
    { id: 7, name: "User 7", score: 800, borderColor: "#00D95F" },
    { id: 8, name: "User 8", score: 750, borderColor: "#00D95F" },
    { id: 9, name: "User 9", score: 700, borderColor: "#00D95F" },
    { id: 10, name: "User 10", score: 650, borderColor: "#00D95F" },
  ];

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      {/* <View style={styles.sidebar}>
        <Image
          source={require("../../assets/images/Logo_Calculab.png")}
          style={styles.logo}
        />
        <Text style={styles.appTitle}>Calculab</Text>
        <View style={styles.navItems}>
          <TouchableOpacity style={styles.navItem}>
            <Image
              source={require("../../assets/images/bookmark.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Image
              source={require("../../assets/images/medal.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Text style={styles.title}>Leaderboard</Text>

        {/* Top 3 Players */}
        <View style={styles.topThree}>
          <View style={[styles.playerContainer, styles.topPlayer, { marginTop: 40 }]}>
            <View
              style={[
                styles.avatar,
                { borderColor: leaderboard[1].borderColor },
              ]}
            >
              <Image
                source={require("../../assets/images/User_Icon.png")}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.playerName}>{leaderboard[1].name}</Text>
            <Text style={styles.playerScore}>{leaderboard[1].score}</Text>
          </View>
          <View style={[styles.playerContainer, styles.firstPlayer]}>
            <View
              style={[
                styles.avatar,
                styles.largeAvatar,
                { borderColor: leaderboard[0].borderColor },
              ]}
            >
              <Image
                source={require("../../assets/images/User_Icon.png")}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.playerName}>{leaderboard[0].name}</Text>
            <Text style={styles.playerScore}>{leaderboard[0].score}</Text>
          </View>
          <View style={[styles.playerContainer, styles.topPlayer]}>
            <View
              style={[
                styles.avatar,
                { borderColor: leaderboard[2].borderColor },
              ]}
            >
              <Image
                source={require("../../assets/images/User_Icon.png")}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.playerName}>{leaderboard[2].name}</Text>
            <Text style={styles.playerScore}>{leaderboard[2].score}</Text>
          </View>
        </View>

        {/* Other Players */}
        <View style={styles.leaderboardList}>
          {leaderboard.slice(3).map((player) => (
            <View key={player.id} style={styles.listItem}>
              <Text style={styles.rank}>{player.id}</Text>
              <View
                style={[
                  styles.avatar,
                  { borderColor: player.borderColor },
                ]}
              >
                <Image
                  source={require("../../assets/images/User_Icon.png")}
                  style={styles.avatarImage}
                />
              </View>
              <Text style={styles.playerName}>{player.name}</Text>
              <Text style={styles.playerScore}>{player.score}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", backgroundColor: "#E2E8F0" },
  sidebar: {
    width: "25%",
    backgroundColor: "#6D2476",
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: { width: 50, height: 50, marginBottom: 20 },
  appTitle: { fontSize: 24, color: "#fff", fontWeight: "bold", marginBottom: 40 },
  navItems: { width: "100%", alignItems: "center" },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  navItemActive: { backgroundColor: "#D8D8F6", borderRadius: 8 },
  navIcon: { width: 20, height: 20, marginRight: 10 },
  navText: { color: "#fff", fontSize: 16 },
  mainContent: { width: "100%", alignItems: "center", paddingVertical: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#6D2476", marginBottom: 20 },
  topThree: { flexDirection: "row", justifyContent: "space-around", width: "100%" },
  playerContainer: { alignItems: "center", marginHorizontal: 10 },
  firstPlayer: { marginTop: -20 },
  topPlayer: { marginTop: 20 },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  largeAvatar: { width: 80, height: 80, borderRadius: 40 },
  avatarImage: { width: "60%", height: "60%" },
  playerName: { fontSize: 16, fontWeight: "bold", marginTop: 8 },
  playerScore: { fontSize: 14, color: "#333" },
  leaderboardList: { width: "100%", marginTop: 20 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rank: { fontSize: 18, fontWeight: "bold", width: 30 },
});

