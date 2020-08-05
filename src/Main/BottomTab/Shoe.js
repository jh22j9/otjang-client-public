import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import SneakersContainer from '../TopTab/ShoesTab/SneakersContainer';
import LeatherContainer from '../TopTab/ShoesTab/LeatherContainer';
import SandalsContainer from '../TopTab/ShoesTab/SandalsContainer';
import BootsContainer from '../TopTab/ShoesTab/BootsContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


function Shoe() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="👟" component={SneakersContainer} />
                <Tab.Screen name="👞" component={LeatherContainer} />
                <Tab.Screen name="👡" component={SandalsContainer} />
                <Tab.Screen name="👢" component={BootsContainer} />
            </Tab.Navigator>
        </>
    );
}

export default Shoe;