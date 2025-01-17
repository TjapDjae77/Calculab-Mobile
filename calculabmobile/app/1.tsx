import React, { useState, useEffect } from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';

type Question = {
  id: number;
  level: number;
  premise1: string;
  premise2: string;
  input_function_checker: string[];
  material_input_checker: string;
  output_material: string;
  base_function: string;
};

export default function Level1() {
  const router = useRouter();
  const [inputFunction, setInputFunction] = useState("");
  const [progress, setProgress] = useState(0);
  const [lives, setLives] = useState(3);
  const [outputImage, setOutputImage] = useState<any>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [baseFunction, setBaseFunction] = useState("");

  const imageMap: Record<string, any> = {
    aluminium: require("../assets/images/aluminium.png"),
    anvil: require("../assets/images/anvil.png"),
    Body_Rocket: require("../assets/images/Body_Rocket.png"),
    Conehead: require("../assets/images/Conehead.png"),
    fiberglass: require("../assets/images/fiberglass.png"),
    glass: require("../assets/images/glass.png"),
    Feet_Rocket: require("../assets/images/Feet_Rocket.png"),
    Mirror: require("../assets/images/Mirror.png"),
  };

  const shuffleArray = (array: Question[]): Question[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const loadQuestion = (question: Question) => {
    const materialImage = imageMap[question.output_material as keyof typeof imageMap];
    if (materialImage) {
      setOutputImage(materialImage); // Set image using the map
    } else {
      console.error(`Image for ${question.output_material} not found`);
    }
    setBaseFunction(`${question.base_function} =`);
    setInputFunction("");
    setSelectedMaterial(null);
  };

  const validateAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (!currentQuestion) return;

    // Check correctness
    const isFunctionCorrect = currentQuestion.input_function_checker.includes(inputFunction.trim());
    const isMaterialCorrect =
    selectedMaterial === imageMap[currentQuestion.material_input_checker as keyof typeof imageMap];

    if (isFunctionCorrect && isMaterialCorrect) {
      const nextIndex = currentQuestionIndex + 1;
  
      // Update progress
      setProgress((prev) => Math.min(prev + 33, 100));
  
      if (nextIndex < questions.length) {
        // Load next question
        setCurrentQuestionIndex(nextIndex);
        loadQuestion(questions[nextIndex]);
      } else {
        const finalScore = lives * 100;
        updateProgressOnServer(1, finalScore);

        // Complete level
        Alert.alert("Congratulations!", `You completed the level with a score of ${finalScore}!`, [
          { text: "Continue", onPress: () => router.push("/explore") },
        ]);
      }
    } else {
      // Wrong answer
      handleWrongAnswer();
    }
  };

  const updateProgressOnServer = async (level_number: number, score: number) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      console.error("No access token found");
      return;
    }
  
    fetch(`https://calculab-backend.up.railway.app/api/levels/complete/${level_number}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ score }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update progress");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Progress updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating progress:", error);
      });
  };
  
  const handleWrongAnswer = () => {
    setLives((prev) => {
      const newLives = Math.max(prev - 1, 0);
      if (newLives === 0) {
        Alert.alert("Game Over", "You have lost all your lives.", [
          { text: "Retry", onPress: () => router.push("/explore") },
        ]);
      }
      return newLives;
    });
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://calculab-backend.up.railway.app/api/questions/"
        );
        const data: Question[] = await response.json();
        const level1Questions = data.filter((q) => q.level === 1);

        // Shuffle and set questions
        const shuffledQuestions = shuffleArray(level1Questions).slice(0, 3);
        setQuestions(shuffledQuestions);

        // Set the first question
        if (shuffledQuestions.length > 0) {
          loadQuestion(shuffledQuestions[0]);
        }
      } catch (error) {
        Alert.alert("Error", "Failed to load questions.");
      }
    };

    fetchQuestions();
  }, []);


  // const handlePlay = () => {
  //   if (!selectedMaterial) {
  //     Alert.alert("Error", "Please select a material!");
  //     return;
  //   }
  //   if (inputFunction.trim() === "") {
  //     Alert.alert("Error", "Please input a function!");
  //     return;
  //   }

  //   // Correct answer scenario
  //   if (
  //     inputFunction === "f(x)=x^2" &&
  //     selectedMaterial === require("../assets/images/fiberglass.png")
  //   ) {
  //     setProgress((prev) => {
  //       const newProgress = Math.min(prev + 33, 100);
  //       if (newProgress === 100) {
  //         Alert.alert("Congratulations!", "You have completed the level!", [
  //           { text: "Continue", onPress: () => router.push("/explore") },
  //         ]);
  //       }
  //       return newProgress;
  //     });
  //     setOutputImage(require("../assets/images/Conehead.png")); // Update output to Conehead for this context
  //   } else {
  //     // Incorrect answer scenario
  //     setLives((prev) => {
  //       const newLives = Math.max(prev - 1, 0);
  //       if (newLives === 0) {
  //         Alert.alert("Game Over", "You have lost all your lives.", [
  //           { text: "Retry", onPress: () => router.push("/explore") },
  //         ]);
  //       }
  //       return newLives;
  //     });
  //   }
  // };

  const goBackHandler = () => {
    Alert.alert(
      "Leave Level?",
      "Your progress will be lost if you leave the game. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Leave", onPress: () => router.push("/explore") },
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
          {[...Array(3)].map((_, index) => (
            <Image
              key={index}
              source={
                index < lives
                  ? require("../assets/images/Full_Heart.png")
                  : require("../assets/images/Empty_Heart.png")
              }
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
            {selectedMaterial ? (
              <Image source={selectedMaterial} style={styles.materialPreview} />
            ) : (
              <Text style={styles.dropText}>Click material on list materials</Text>
            )}
          </View>
        </View>

        {/* Function Machine */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Function Machine</Text>
          <View style={styles.functionMachine}>
            {questions[currentQuestionIndex] ? (
              <Text style={styles.functionQuestion}>
                {`${questions[currentQuestionIndex].premise1}\n\n${questions[currentQuestionIndex].premise2}`}
              </Text>
            ) : (
              <Text style={styles.functionQuestion}>Loading...</Text>
            )}
          </View>
        </View>

        {/* Output Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Output Component</Text>
          <View style={styles.outputContainer}>
            {outputImage ? (
              <Image source={outputImage} style={styles.outputImage} />
            ) : (
              <Text style={styles.outputPlaceholder}>
                Output will appear here
              </Text>
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
            <TouchableOpacity
              onPress={() =>
                setSelectedMaterial(require("../assets/images/aluminium.png"))
              }
            >
              <Image
                source={require("../assets/images/aluminium.png")}
                style={styles.material}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setSelectedMaterial(require("../assets/images/fiberglass.png"))
              }
            >
              <Image
                source={require("../assets/images/fiberglass.png")}
                style={styles.material}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setSelectedMaterial(require("../assets/images/anvil.png"))
              }
            >
              <Image
                source={require("../assets/images/anvil.png")}
                style={styles.material}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setSelectedMaterial(require("../assets/images/glass.png"))
              }
            >
              <Image
                source={require("../assets/images/glass.png")}
                style={styles.material}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Input Function */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Input Function</Text>
          <View style={styles.functionInputContainer}>
          <Text style={styles.baseFunction}>{baseFunction}</Text>
            <TextInput
              value={inputFunction}
              onChangeText={setInputFunction}
              style={styles.functionInput}
              placeholder="Enter function"
            />
          </View>
        </View>

        {/* Play Button */}
        <TouchableOpacity
          style={[
            styles.playButton,
            inputFunction && selectedMaterial ? styles.playActive : {},
          ]}
          onPress={validateAnswer}
          disabled={!inputFunction || !selectedMaterial}
        >
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>

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
      borderWidth: 2,
      borderColor: "#ccc",
    },
    dropText: {
      color: "#777",
      fontSize: 16,
    },
    materialPreview: {
      width: 60,
      height: 60,
      resizeMode: "contain",
    },
    functionMachine: {
      height: 150,
      backgroundColor: "#fff",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      borderWidth: 2,
      borderColor: "#ccc",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    functionQuestion: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
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
      borderWidth: 2,
      borderColor: "#ccc",
    },
    outputImage: {
      width: 60,
      height: 60,
      resizeMode: "contain",
    },
    outputPlaceholder: {
      color: "#777",
      fontSize: 16,
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
      resizeMode: "contain",
      borderWidth: 2,
      borderColor: "#ccc",
      borderRadius: 8,
      backgroundColor: "#f0f0f0",
    },
    functionInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    baseFunction: {
      fontSize: 18,
      color: "#000",
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
  
