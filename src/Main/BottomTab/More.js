import * as React from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Border } from 'victory-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: "60%",
        height: "15%",
        justifyContent: "center",
        margin: 20,
        borderRadius: 30
    }
})

function More() {

    const moreNavigation = useNavigation();

    function moveToStatistics() {
        moreNavigation.navigate('StatisticsContainer');
    }

    function moveToMyInfo() {
        moreNavigation.navigate('MyInfoContainer');
    }

    function moveToWashing() {
        moreNavigation.navigate('HowToWash');
        console.log('세탁 이동')
    }

    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                icon="account"
                mode="contained"
                onPress={moveToMyInfo}>
                MY INFO
                </Button>
            <Button
                style={styles.button}
                icon="graph"
                mode="contained"
                onPress={moveToStatistics}>
                STATISTICS
                </Button>
            <Button
                style={styles.button}
                icon="washing-machine"
                mode="contained"
                onPress={moveToWashing}>
                HOW TO WASH
                </Button>

        </View>
    );
}

export default More;