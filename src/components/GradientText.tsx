import React from 'react';
import {Defs, Stop, Svg, Text, LinearGradient} from 'react-native-svg';
import {GradientStrokeTextProps} from '../constants/types';

const GradientText = ({
  text = '',
  height = 100,
  width = 300,
  gradientColors = ['#810955', '#533483'],
  borderColors = ['#b429f9', '#26c5f3'],
  locations = {x: 150, y: 80},
  start = {x: 0, y: 0},
  end = {x: 1, y: 1},
  isGradientFill = false,
  fillColor = '#FFFFFF',
  isGradientStroke = false,
  strokeColor = '#000000',
  strokeWidth = 0,
  fontSize = 18,
  fontFamily = 'Avenir Next',
  fontWeight = 900,
  style = {},
}: GradientStrokeTextProps) => {
  return (
    <Svg height={height} width={width} style={style}>
      <Defs>
        <LinearGradient
          id="Gradient"
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}>
          <Stop stopColor={borderColors[0]} offset="0" stopOpacity="1" />
          <Stop stopColor={borderColors[1]} offset="1" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient
          id="GradientFill"
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}>
          <Stop stopColor={gradientColors[0]} offset="0" stopOpacity="1" />
          <Stop stopColor={gradientColors[1]} offset="1" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Text
        fill={isGradientFill ? 'url(#GradientFill)' : fillColor}
        stroke={isGradientStroke ? 'url(#Gradient)' : strokeColor}
        strokeWidth={strokeWidth}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        x={locations.x}
        y={locations.y}
        textAnchor="middle">
        {text}
      </Text>
    </Svg>
  );
};

export default GradientText;
