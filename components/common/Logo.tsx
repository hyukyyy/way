import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image
      resizeMode="cover"
      source={require('../../assets/logo.png')}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 120,
    marginBottom: 8,
    objectFit: 'contain',
  },
});
