import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList';
import TopContainer from '../TopTab/ClothingTab/TopContainer';
import BottomContainer from '../TopTab/ClothingTab/BottomContainer';
import OuterContainer from '../TopTab/ClothingTab/OuterContainer';
import DressContainer from '../TopTab/ClothingTab/DressContainer';
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
        // height: '100%'
    },
});


function Clothing({ navigation, clothing, ClothesActions }) {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="👕" component={TopContainer} />
                <Tab.Screen name="👖" component={BottomContainer} />
                <Tab.Screen name="🥼" component={OuterContainer} />
                <Tab.Screen name="👗" component={DressContainer} />
            </Tab.Navigator>
        </>
    );
}

export default Clothing;