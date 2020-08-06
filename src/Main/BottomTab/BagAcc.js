import React from 'react';
import BagContainer from '../TopTab/BagAccTab/BagContainer';
import HeadContainer from '../TopTab/BagAccTab/HeadContainer';
import JewelryContainer from '../TopTab/BagAccTab/JewelryContainer';
import OtherAccContainer from '../TopTab/BagAccTab/OtherAccContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



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