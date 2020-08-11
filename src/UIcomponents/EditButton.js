import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';
import { FAB } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    right: width / 30,
    bottom: height / 20,
    backgroundColor: '#6200ee'
  },
});


export default function EditButton({ ...rest }) {
  return (
    <FAB
      style={styles.buttonContainer}
      icon="square-edit-outline"
      {...rest}
    />
  );
}