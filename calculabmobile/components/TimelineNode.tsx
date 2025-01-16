import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { COLORS, FONTS } from '../constants/theme';

interface TimelineNodeProps {
  number?: number;
  isComingSoon?: boolean;
  isLast?: boolean;
  href?: string;
  isLocked?: boolean;
}

export default function TimelineNode({ 
  number, 
  isComingSoon, 
  isLast,
  href,
  isLocked = false
}: TimelineNodeProps) {
  const NodeContent = () => (
    <View style={styles.nodeContainer}>
      {isComingSoon ? (
        <View style={styles.comingSoonNode}>
          <Text style={styles.comingSoonText}>Coming soon. Stay tuned!</Text>
        </View>
      ) : (
        <View style={styles.levelNode}>
          <Text style={styles.levelText}>{number}</Text>
        </View>
      )}
      {!isLast && <View style={styles.verticalLine} />}
    </View>
  );

  if (isLocked || isComingSoon) {
    return <NodeContent />;
  }

  return (
    <Link href={href || ''} asChild>
      <TouchableOpacity>
        <NodeContent />
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  nodeContainer: {
    alignItems: 'center',
  },
  levelNode: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  levelText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  comingSoonNode: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E91E63',
    borderRadius: 20,
    marginVertical: 10,
  },
  comingSoonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  verticalLine: {
    width: 3,
    height: 80,
    backgroundColor: '#E91E63',
  },
});

