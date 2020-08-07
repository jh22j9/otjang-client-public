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
                <Tab.Screen name="👕 상의" component={TopContainer} />
                <Tab.Screen name="👖 하의" component={BottomContainer} />
                <Tab.Screen name="🧥 자켓" component={OuterContainer} />
                <Tab.Screen name="👗 드레스" component={DressContainer} />
            </Tab.Navigator>
        </>
    );
}

export default Clothing;