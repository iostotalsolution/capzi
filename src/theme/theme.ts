'''
import { DefaultTheme } from 'styled-components/native';

const common = {
  // ... common styles
};

export const lightTheme: DefaultTheme = {
  ...common,
  primary: '#007AFF',
  background: '#FFFFFF',
  text: '#000000',
  // ... other light theme colors
};

export const darkTheme: DefaultTheme = {
  ...common,
  primary: '#0A84FF',
  background: '#000000',
  text: '#FFFFFF',
  // ... other dark theme colors
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
''