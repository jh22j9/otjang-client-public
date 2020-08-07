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
                <Tab.Screen name="👟 운동화" component={SneakersContainer} />
                <Tab.Screen name="👞 구두" component={LeatherContainer} />
                <Tab.Screen name="👡 샌들" component={SandalsContainer} />
                <Tab.Screen name="👢 부츠" component={BootsContainer} />
            </Tab.Navigator>
        </>
    );
}

export default Shoe;