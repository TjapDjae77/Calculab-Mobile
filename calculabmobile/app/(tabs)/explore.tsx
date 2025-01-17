import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Explore() {
  const stages = [
    { id: 4, label: "Coming soon. Stay tuned!", active: false },
    { id: 3, label: "Stage 3", active: false },
    { id: 2, label: "Stage 2", active: false },
    { id: 1, label: "Stage 1", active: false },
  ];

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          source={require("../../assets/images/Logo_Calculab.png")}
          style={styles.logo}
        />
        <Text style={styles.appTitle}>Calculab</Text>

        {/* Navigation */}
        <View style={styles.navItems}>
          <TouchableOpacity style={styles.navItemActive}>
            <Image
              source={require("../../assets/images/bookmark.png")}
              style={styles.navIcon}
            />
            <Text style={styles.navText}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
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
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Roadmap Timeline */}
        <View style={styles.timeline}>
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <TouchableOpacity
                disabled={!stage.active}
                style={[
                  styles.stage,
                  !stage.active && styles.stageDisabled,
                ]}
              >
                <Text style={styles.stageText}>{stage.id}</Text>
              </TouchableOpacity>

              {/* Connecting Line */}
              {index !== stages.length - 1 && (
                <View style={styles.line}></View>
              )}

              {/* Coming Soon Label */}
              {stage.label === "Coming soon. Stay tuned!" && (
                <Text style={styles.comingSoon}>{stage.label}</Text>
              )}
            </React.Fragment>
          ))}
        </View>

        {/* Background Factory */}
        <Image
          source={require("../../assets/images/Factory.png")}
          style={styles.factory}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
  },
  sidebar: {
    width: "25%",
    backgroundColor: "#6D2476",
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
  },
  navItems: {
    width: "100%",
    alignItems: "center",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
  },
  navItemActive: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#D8D8F6",
    borderRadius: 8,
  },
  navIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
  mainContent: {
    width: "75%",
    alignItems: "center",
    paddingTop: 20,
  },
  timeline: {
    alignItems: "center",
  },
  stage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1CB5E0",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  stageDisabled: {
    backgroundColor: "#ccc",
  },
  stageText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  line: {
    width: 2,
    height: 100,
    backgroundColor: "#ccc",
  },
  comingSoon: {
    fontSize: 18,
    color: "#6D2476",
    marginVertical: 10,
    textAlign: "center",
  },
  factory: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
});
