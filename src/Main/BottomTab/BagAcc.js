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
                <Tab.Screen name="💼 가방" component={BagContainer} />
                <Tab.Screen name="🧢 모자" component={HeadContainer} />
                <Tab.Screen name="💎 액세서리" component={JewelryContainer} />
                <Tab.Screen name="••• 기타" component={OtherAccContainer} />
            </Tab.Navigator>
        </>
    );
}

export default BagAcc;