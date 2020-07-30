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
        width: "65%",
        height: "20%",
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
        console.log("이동")
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
        </View>
    );
}

export default More;