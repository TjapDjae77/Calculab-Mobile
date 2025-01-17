import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function Level1() {
  const router = useRouter(); // Using router from expo-router
  const [inputFunction, setInputFunction] = useState("");
  const [progress, setProgress] = useState(0);
  const [lives, setLives] = useState(3);
  const [outputImage, setOutputImage] = useState(null);

  const handlePlay = () => {
    if (inputFunction.trim() === "") {
      Alert.alert("Error", "Please input a function!");
      return;
    }

    // Mock success scenario: Increment progress
    if (inputFunction === "f(x)=x^2") {
      setProgress((prev) => Math.min(prev + 33, 100)); // Example increment
      setOutputImage(require("../assets/images/Conehead.png")); // Update output
    } else {
      setLives((prev) => Math.max(prev - 1, 0));
      if (lives === 1) {
        Alert.alert("Game Over", "You have lost all your lives.");
        router.push("/explore"); // Navigate back to the explore page
      }
    }
  };

  const goBackHandler = () => {
    Alert.alert(
      "Leave Level?",
      "Your progress will be lost if you leave the game. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Leave", onPress: () => router.push("/explore") }, // Use router for navigation
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBackHandler}>
          <Image
            source={require("../assets/images/Go_Back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.levelTitle}>Level 1 - Composition Function</Text>
        <View style={styles.livesContainer}>
          {[...Array(lives)].map((_, index) => (
            <Image
              key={index}
              source={require("../assets/images/Full_Heart.png")}
              style={styles.lifeIcon}
            />
          ))}
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Material Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Material Input</Text>
          <View style={styles.dropArea}>
            <Text style={styles.dropText}>Drop the material here</Text>
          </View>
        </View>

        {/* Function Machine */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Function Machine</Text>
          <View style={styles.functionMachine}>
            <Text style={styles.functionQuestion}>f(x) = ?</Text>
          </View>
          <TouchableOpacity
            style={[styles.playButton, inputFunction ? styles.playActive : {}]}
            onPress={handlePlay}
            disabled={!inputFunction}
          >
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>

        {/* Output Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Output Component</Text>
          <View style={styles.outputContainer}>
            {outputImage ? (
              <Image source={outputImage} style={styles.outputImage} />
            ) : (
              <Text style={styles.outputPlaceholder}>Output will appear here</Text>
            )}
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* List Materials */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>List Materials</Text>
          <View style={styles.materialList}>
            <Image
              source={require("../assets/images/aluminium.png")}
              style={styles.material}
            />
            <Image
              source={require("../assets/images/fiberglass.png")}
              style={styles.material}
            />
            <Image
              source={require("../assets/images/anvil.png")}
              style={styles.material}
            />
            <Image
              source={require("../assets/images/glass.png")}
              style={styles.material}
            />
          </View>
        </View>

        {/* Input Function */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Input Function</Text>
          <View style={styles.functionInputContainer}>
            <Text style={styles.baseFunction}>f(x) =</Text>
            <TextInput
              value={inputFunction}
              onChangeText={setInputFunction}
              style={styles.functionInput}
              placeholder="Enter function"
            />
          </View>
        </View>

        {/* Recipe */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Recipe</Text>
          <Image
            source={require("../assets/images/Rocket_Recipe.png")}
            style={styles.recipeImage}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#d8d8f6",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    textAlign: "center",
  },
  livesContainer: {
    flexDirection: "row",
  },
  lifeIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  progressBarContainer: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  progress: {
    height: "100%",
    backgroundColor: "#1CB5E0",
    borderRadius: 5,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  dropArea: {
    height: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  dropText: {
    color: "#777",
    fontSize: 16,
  },
  functionMachine: {
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  functionQuestion: {
    fontSize: 20,
    fontWeight: "bold",
  },
  playButton: {
    alignSelf: "center",
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  playActive: {
    backgroundColor: "#1CB5E0",
  },
  playButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  outputContainer: {
    height: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  outputImage: {
    width: 80,
    height: 80,
  },
  outputPlaceholder: {
    color: "#777",
  },
  footer: {
    flexDirection: "column",
    marginTop: 20,
  },
  footerSection: {
    marginBottom: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  materialList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  material: {
    width: 60,
    height: 60,
  },
  functionInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  baseFunction: {
    fontSize: 18,
    color: "#fff",
    marginRight: 10,
  },
  functionInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  recipeImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
});
