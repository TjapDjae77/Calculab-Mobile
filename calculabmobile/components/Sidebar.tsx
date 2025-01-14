import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { COLORS, FONTS } from '../constants/theme';

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  const NavItem = ({ icon, label, href, isActive = false, onPress = null }) => (
    <View style={styles.navItemContainer}>
      {href ? (
        <Link href={href} asChild>
          <TouchableOpacity 
            style={[
              styles.navItem,
              isActive && styles.navItemActive
            ]}
          >
            <Image source={icon} style={styles.navIcon} />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {label}
            </Text>
          </TouchableOpacity>
        </Link>
      ) : (
        <TouchableOpacity 
          style={styles.navItem}
          onPress={onPress}
        >
          <Image source={icon} style={styles.navIcon} />
          <Text style={styles.navLabel}>{label}</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.sidebar}>
      <Link href="/roadmap" asChild>
        <TouchableOpacity style={styles.logo}>
          <Image 
            source={require('../assets/images/Logo_Calculab.svg')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Calculab</Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.nav}>
        <NavItem 
          icon={require('../assets/images/bookmark.svg')}
          label="Learn"
          href="/roadmap"
        />
        <NavItem 
          icon={require('../assets/images/medal.svg')}
          label="Leaderboard"
          href="/leaderboard"
          isActive
        />
        <NavItem 
          icon={require('../assets/images/profile.svg')}
          label="Profile"
          href="/profile"
        />
        <NavItem 
          icon={require('../assets/images/More.svg')}
          label="More"
          onPress={() => setShowMore(!showMore)}
        />
        
        {showMore && (
          <View style={styles.dropdown}>
            <Link href="/settings" asChild>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Settings</Text>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: Platform.select({ ios: 100, android: 100, default: 300 }),
    backgroundColor: COLORS.secondary,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 80,
    alignItems: 'center',
  },
  logoImage: {
    width: 56,
    height: 56,
    marginBottom: 8,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.bold,
    display: Platform.select({ ios: 'none', android: 'none', default: 'flex' }),
  },
  nav: {
    gap: 48,
  },
  navItemContainer: {
    position: 'relative',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 100,
  },
  navItemActive: {
    backgroundColor: '#D8D8F6',
  },
  navIcon: {
    width: 32,
    height: 32,
    marginRight: Platform.select({ ios: 0, android: 0, default: 12 }),
  },
  navLabel: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.bold,
    display: Platform.select({ ios: 'none', android: 'none', default: 'flex' }),
  },
  navLabelActive: {
    color: COLORS.secondary,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: Platform.select({ ios: 70, android: 70, default: 80 }),
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
});

