import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { MD2DarkTheme, MD2LightTheme } from 'react-native-paper';
import merge from 'deepmerge';

export const CombinedDefaultTheme = merge(
  MD2LightTheme,
  NavigationDefaultTheme,
);
export const CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);
