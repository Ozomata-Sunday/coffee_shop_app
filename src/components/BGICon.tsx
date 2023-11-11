import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SPACING, BORDERRADIUS} from '../theme/theme';

interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}

const BGICon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.bgICon, {backgroundColor: BGColor}]}>
      <Ionicons name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  bgICon: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
export default BGICon;
