import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import BagContainer from '../TopTab/BagAccTab/BagContainer';
import HeadContainer from '../TopTab/BagAccTab/HeadContainer';
import JewelryContainer from '../TopTab/BagAccTab/JewelryContainer';
import OtherAccContainer from '../TopTab/BagAccTab/OtherAccContainer';
const { width, height } = Dimensions.get('screen');
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "flex-start",
        padding: 25
    },
});


function BagAcc() {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="💼" component={BagContainer} />
                <Tab.Screen name="🧢" component={HeadContainer} />
                <Tab.Screen name="💎" component={JewelryContainer} />
                <Tab.Screen name="•••" component={OtherAccContainer} />
            </Tab.Navigator>
        </>
    );
}

export default BagAcc;