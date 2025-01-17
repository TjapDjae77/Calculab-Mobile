import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk memastikan token valid
  const ensureValidAccessToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      console.error("No token found. Redirecting to login...");
      return null;
    }
    return token;
  };

  // Fungsi untuk mengambil data leaderboard
  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const token = await ensureValidAccessToken();
      if (!token) return;

      const response = await fetch(
        "https://calculab-backend.up.railway.app/api/leaderboard/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401) {
        console.error("Unauthorized. Token might be invalid.");
        return;
      }

      const data = await response.json();
      if (response.ok) {
        setLeaderboard(data);
      } else {
        console.error("Failed to fetch leaderboard:", data);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data leaderboard saat halaman dimuat
  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      {/* Main Content */}
      {/* <ScrollView contentContainerStyle={styles.mainContent}>
        <Text style={styles.title}>Leaderboard</Text> */}

        {/* Top 3 Players */}
        {/* <View style={styles.topThree}>
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
        </View> */}

        {/* Other Players */}
        {/* <View style={styles.leaderboardList}>
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
              <Text style={styles.playerName}>{player.username}</Text>
              <Text style={styles.playerScore}>{player.score}</Text>
            </View>
          ))}
        </View>
      </ScrollView> */}
      {loading ? (
        <ActivityIndicator size="large" color="#6D2476" />
      ) : (
        <ScrollView contentContainerStyle={styles.mainContent}>
          <Text style={styles.title}>Leaderboard</Text>

          {/* Top 3 Players */}
          <View style={styles.topThree}>
            {leaderboard.slice(0, 3).map((player, index) => (
              <View
                key={player.id || index} // Atribut key tetap untuk menghindari peringatan React
                style={[
                  styles.playerContainer,
                  index === 0
                    ? { order: 2 }
                    : index === 1
                    ? { order: 1 }
                    : { order: 3 }, // Urutan berdasarkan indeks
                ]}
              >
                <View
                  style={[
                    styles.avatar,
                    index === 0
                      ? [styles.largeAvatar, { borderColor: "#E7C464" }]
                      : index === 1
                      ? { borderColor: "#C5C5C5" }
                      : { borderColor: "#EACAAC" },
                  ]}
                >
                  <Image
                    source={require("../../assets/images/User_Icon.png")}
                    style={styles.avatarImage}
                  />
                </View>
                <Text style={styles.playerName}>{player.name || "Anonymous"}</Text>
                <Text style={styles.playerScore}>{player.score || 0}</Text>
              </View>
            ))}
          </View>

          {/* Other Players */}
          <View style={styles.leaderboardList}>
            {leaderboard.slice(3).map((player, index) => (
              <View key={player.id || index + 3} style={styles.listItem}>
                <Text style={styles.rank}>{index + 4}</Text>
                <View style={[styles.avatar, { borderColor: "#00D95F" }]}>
                  <Image
                    source={require("../../assets/images/User_Icon.png")}
                    style={styles.avatarImage}
                  />
                </View>
                <Text style={styles.playerName}>{player.name || "Anonymous"}</Text>
                <Text style={styles.playerScore}>{player.score || 0}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E2E8F0" },
  mainContent: { width: "100%", alignItems: "center", paddingVertical: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#6D2476", marginBottom: 20 },
  topThree: { flexDirection: "row", justifyContent: "center", alignItems:"flex-end", width: "100%" },
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
  largeAvatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 4 },
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

