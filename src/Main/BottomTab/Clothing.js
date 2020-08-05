import React from 'react';
import TopContainer from '../TopTab/ClothingTab/TopContainer';
import BottomContainer from '../TopTab/ClothingTab/BottomContainer';
import OuterContainer from '../TopTab/ClothingTab/OuterContainer';
import DressContainer from '../TopTab/ClothingTab/DressContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



function Clothing() {

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