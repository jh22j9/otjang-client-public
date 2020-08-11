import React from 'react';
import TopContainer from '../TopTab/ClothingTab/TopContainer';
import BottomContainer from '../TopTab/ClothingTab/BottomContainer';
import OuterContainer from '../TopTab/ClothingTab/OuterContainer';
import DressContainer from '../TopTab/ClothingTab/DressContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


const tabStyle = {

    pressColor: '#E6E9F5',
    indicatorStyle: { backgroundColor: '#6200EE' }

}
function Clothing() {

    return (
        <>
            <Tab.Navigator tabBarOptions={tabStyle}>
                <Tab.Screen name="👕 상의" component={TopContainer} />
                <Tab.Screen name="👖 하의" component={BottomContainer} />
                <Tab.Screen name="🧥 자켓" component={OuterContainer} />
                <Tab.Screen name="👗 드레스" component={DressContainer} />
            </Tab.Navigator>
        </>
    );
}

export default Clothing;