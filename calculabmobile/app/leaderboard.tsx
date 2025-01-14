import { View, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Sidebar from '../components/Sidebar';
import LeaderboardTop from '../components/LeaderboardTop';
import LeaderboardList from '../components/LeaderboardList';
import { COLORS } from '../constants/theme';

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Sidebar />
        <LinearGradient
          colors={['#60A5FA', '#E0E7FF', '#E9D5FF']}
          style={styles.mainContent}
        >
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
          >
            <LeaderboardTop />
            <LeaderboardList />
          </ScrollView>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 80,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

