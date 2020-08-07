import React from 'react';
import { StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import { IconButton, Colors, Button, FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// MaterialCommunityIcons
// pluscircleo
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        right: width / 30,
        bottom: height / 11,
        backgroundColor: '#6200ee'
    },
});


export default function AddButton({ ...rest }) {
    return (
        <FAB
            style={styles.buttonContainer}
            icon="plus"
            {...rest}
        />
    );
}