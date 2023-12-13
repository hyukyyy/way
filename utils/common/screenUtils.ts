import { Dimensions } from 'react-native';

export const getViewportUnit = (): { vw: number; vh: number } => {
  const { width, height } = Dimensions.get('window');
  return {
    vw: width / 100,
    vh: height / 100,
  };
};
