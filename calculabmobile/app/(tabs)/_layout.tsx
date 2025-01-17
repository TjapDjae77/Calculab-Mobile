import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import Explore from "./explore";
import Profile from "./profile";
import Leaderboard from "./leaderboard";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconSource;

          if (route.name === "Learn") {
            iconSource = require("../../assets/images/bookmark.png");
          } else if (route.name === "Leaderboard") {
            iconSource = require("../../assets/images/medal.png");
          } else if (route.name === "Profile") {
            iconSource = require("../../assets/images/profile.png");
          }

          return (
            <Image source={iconSource} style={styles.icon} resizeMode="contain" />
          );
        },
        tabBarStyle: { backgroundColor: "#fff", height: 60 }, // Tab bar styling
        headerShown: false, // Hides the header
      })}
    >
      <Tab.Screen name="Learn" component={Explore} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
