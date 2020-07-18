import React from 'react';
import { StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import { IconButton, Colors, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// MaterialCommunityIcons
// pluscircleo
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        right: width / 30,
        bottom: height / 12,
    },
});


export default function AddButton({ navigation, ...rest }) {
    return (

        <Pressable style={styles.buttonContainer} {...rest} onPress={() => { navigation.navigate('AddItems') }} >
            <Icon name="plus-circle" color={'#6200ee'} size={60} />
        </Pressable>
    );
}