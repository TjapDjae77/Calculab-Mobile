import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TimelineNode from '../components/TimelineNode';
import Footer from '../components/Footer';

export default function Roadmap() {
  return (
    <LinearGradient
      colors={['#40E0FD', '#E5D1FA', '#9C1A8C']}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        {/* Timeline */}
        <View style={styles.timeline}>
          <TimelineNode isComingSoon />
          <TimelineNode number={3} href="/level3" isLocked />
          <TimelineNode number={2} href="/level2" isLocked />
          <TimelineNode number={1} href="/level1" />
        </View>

        {/* Factory Background */}
        <Image
          source={require('../assets/images/factory-background.png')}
          style={styles.factoryBackground}
          resizeMode="contain"
        />

        {/* Footer */}
        <Footer />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  timeline: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 120, // Space for factory background
  },
  factoryBackground: {
    position: 'absolute',
    bottom: 60, // Space for footer
    left: 0,
    right: 0,
    height: 150,
    width: '100%',
  },
});

