import React from 'react';
import { StyleSheet, Dimensions, Text, Pressable, StatusBar } from 'react-native';
import { IconButton, Colors, Button, FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// MaterialCommunityIcons
// pluscircleo
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    left: width / 30,
    bottom: height / 20,
    backgroundColor: '#6200ee'
  },
});

export default function DeleteButton({ ...rest }) {
  return (
    <FAB
      style={styles.buttonContainer}
      icon="trash-can-outline"
      {...rest}
    />
  );
}