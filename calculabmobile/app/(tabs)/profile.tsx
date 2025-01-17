import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => router.push("../login") },
    ]);
  };

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
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/(tabs)/explore")}
          >
            <Image
              source={require("../../assets/images/bookmark.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/(tabs)/leaderboard")}
          >
            <Image
              source={require("../../assets/images/medal.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.profileCard}>
          <Text style={styles.title}>Profile</Text>

          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.infoText}>
                Username: <Text style={styles.boldText}>-</Text>
              </Text>
              <Text style={styles.infoText}>
                Email: <Text style={styles.boldText}>-</Text>
              </Text>
            </View>
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          {/* Statistics */}
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Your Statistics</Text>
            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>-</Text>
                <Text style={styles.statLabel}>Levels Completed</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>-</Text>
                <Text style={styles.statLabel}>Total Score</Text>
              </View>
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  mainContent: { flex: 1, alignItems: "center", justifyContent: "center" },
  profileCard: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6D2476",
    textAlign: "center",
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#D8D8F6",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 36, fontWeight: "bold", color: "#fff" },
  userInfo: { marginLeft: 20 },
  infoText: { fontSize: 18, color: "#333" },
  boldText: { fontWeight: "bold" },
  editButton: {
    backgroundColor: "#DC1F84",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  editButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  statsContainer: {
    backgroundColor: "#D8D8F6",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6D2476",
    textAlign: "center",
    marginBottom: 10,
  },
  stats: { flexDirection: "row", justifyContent: "space-around" },
  statItem: { alignItems: "center" },
  statNumber: { fontSize: 24, fontWeight: "bold", color: "#DC1F84" },
  statLabel: { fontSize: 14, color: "#333" },
  logoutButton: {
    backgroundColor: "#A0185F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
