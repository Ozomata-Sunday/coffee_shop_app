import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SPACING, COLORS} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageStyle: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
