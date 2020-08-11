import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '700'
    }
});


export default function NoStatisticsData() {
    return (

        <View style={styles.container}>
            <Text style={styles.text}>등록된 data 가 없습니다!</Text>
            <Icon name='exclamation-circle' size={300} />
        </View>

    );
}