import {StyleProp, ViewStyle} from 'react-native';

export interface GradientStrokeTextProps {
  text: string;
  height?: number;
  width?: number;
  gradientColors?: [string, string];
  borderColors?: [string, string];
  locations?: {x: number; y: number};
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  isGradientFill?: boolean;
  fillColor?: string;
  isGradientStroke?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  style?: StyleProp<ViewStyle>;
}
