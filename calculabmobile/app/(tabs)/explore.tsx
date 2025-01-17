import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Explore() {
  const router = useRouter(); // Access the router for navigation

  const stages = [
    { id: 4, label: "Coming soon. Stay tuned!", active: false },
    { id: 3, label: "Stage 3", active: false },
    { id: 2, label: "Stage 2", active: true },
    { id: 1, label: "Stage 1", active: true },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Explore Levels</Text>

      {/* Roadmap Timeline */}
      <View style={styles.timeline}>
        {stages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            {/* Stage Button */}
            <TouchableOpacity
              disabled={!stage.active}
              style={[
                styles.stage,
                !stage.active && styles.stageDisabled,
              ]}
              onPress={() => stage.active && router.push(`../${stage.id}`)} // Navigate to the level
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#E2E8F0",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6D2476",
    marginBottom: 20,
    textAlign: "center",
  },
  timeline: {
    alignItems: "center",
    width: "100%",
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
    fontSize: 18,
    fontWeight: "bold",
  },
  line: {
    width: 2,
    height: 80,
    backgroundColor: "#ccc",
  },
  comingSoon: {
    fontSize: 16,
    color: "#6D2476",
    marginVertical: 10,
    textAlign: "center",
  },
  factory: {
    width: "100%",
    height: 150,
    marginTop: 30,
  },
});
