import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import SneakersContainer from '../TopTab/ShoesTab/SneakersContainer';
import LeatherContainer from '../TopTab/ShoesTab/LeatherContainer';
import OtherShoesContainer from '../TopTab/ShoesTab/OtherShoesContainer';
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


function Shoe() {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="👟" component={SneakersContainer} />
                <Tab.Screen name="👞" component={LeatherContainer} />
                <Tab.Screen name="👡👢🥿" component={OtherShoesContainer} />
            </Tab.Navigator>
        </>
    );
}

export default Shoe;