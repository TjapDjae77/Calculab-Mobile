import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Stage = {
  id: number;
  label: string;
  active: boolean;
};

export default function Explore() {
  const router = useRouter(); // Access the router for navigation
  const [stages, setStages] = useState<Stage[]>([]); 
  const [loading, setLoading] = useState(true);

  const fetchLevels = async () => {
    try {
      const token = await AsyncStorage.getItem("token"); // Mengambil token dari AsyncStorage
      if (!token) {
        Alert.alert("Error", "No access token found. Please login.");
        router.push("/login");
        return;
      }

      const response = await fetch(
        "https://calculab-backend.up.railway.app/api/accounts/profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        const completedLevelsCount = data.completed_levels
          ? data.completed_levels.length
          : 0;

        // Mengatur status level berdasarkan jumlah level yang diselesaikan
        const levelData = [
          { id: 4, label: "Coming soon. Stay tuned!", active: false },
          { id: 3, label: "Stage 3", active: completedLevelsCount >= 2 },
          { id: 2, label: "Stage 2", active: completedLevelsCount >= 1 },
          { id: 1, label: "Stage 1", active: true }, // Stage 1 selalu aktif
        ];

        setStages(levelData);
      } else {
        Alert.alert("Error", "Failed to fetch levels. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching levels:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    } finally {
      setLoading(false); // Sembunyikan loading spinner
    }
  };

  useEffect(() => {
    fetchLevels();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6D2476" />
      </View>
    );
  }

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   {/* Title */}
    //   <Text style={styles.title}>Explore Levels</Text>

    //   {/* Roadmap Timeline */}
    //   <View style={styles.timeline}>
    //     {stages.map((stage, index) => (
    //       <React.Fragment key={stage.id}>
    //         {/* Stage Button */}
    //         <TouchableOpacity
    //           disabled={!stage.active}
    //           style={[
    //             styles.stage,
    //             !stage.active && styles.stageDisabled,
    //           ]}
    //           onPress={() => stage.active && router.push(`../${stage.id}`)} // Navigate to the level
    //         >
    //           <Text style={styles.stageText}>{stage.id}</Text>
    //         </TouchableOpacity>

    //         {/* Connecting Line */}
    //         {index !== stages.length - 1 && (
    //           <View style={styles.line}></View>
    //         )}

    //         {/* Coming Soon Label */}
    //         {stage.label === "Coming soon. Stay tuned!" && (
    //           <Text style={styles.comingSoon}>{stage.label}</Text>
    //         )}
    //       </React.Fragment>
    //     ))}
    //   </View>

    //   {/* Background Factory */}
    //   <Image
    //     source={require("../../assets/images/Factory.png")}
    //     style={styles.factory}
    //     resizeMode="contain"
    //   />
    // </ScrollView>
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
              onPress={() =>
                stage.active &&
                router.push(`../${stage.id}`)
              }
            >
              <Text style={styles.stageText}>{stage.id}</Text>
            </TouchableOpacity>

            {/* Connecting Line */}
            {index !== stages.length - 1 && (
              <View
                style={[
                  styles.line,
                  stages[index].active && styles.lineActive,
                ]}
              ></View>
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
    backgroundColor: "#DC1F84",
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
  lineActive: {
    backgroundColor: "#DC1F84",
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2E8F0",
  },
});
