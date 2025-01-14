import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#60A5FA',
  secondary: '#dc1f84',
  tertiary: '#6D2476',
  background: '#F3F4F6',
  text: '#1F2937',
  textLight: '#6B7280',
  white: '#FFFFFF',
  gray: '#D1D5DB',
  lightGray: '#E5E7EB',
  error: '#EF4444',
  black: '#000000',
  sidebar: '#D8D8F6',
  sidebarAccent: '#00D95F',
  gold: '#E7C464',
  silver: '#C5C5C5',
  bronze: '#EACAAC',
};

export const FONTS = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  padding: 16,
  radius: 8,
  iconSize: 24,
  avatarSize: 80,
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};

export const DEVICE_SIZES = {
  width,
  height,
};

