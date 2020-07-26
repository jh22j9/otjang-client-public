import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList';
import TopContainer from '../TopTab/TopContainer';
import BottomContainer from '../TopTab/BottomContainer';
// import DressContainer from '../TopTab/DressContainer';
const { width, height } = Dimensions.get('screen');
// npm install @react-navigation/material-top-tabs react-native-tab-view
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


function Clothing({ navigation, clothing, ClothesActions, }) {

    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="👕" component={TopContainer} />
                <Tab.Screen name="👖" component={BottomContainer} />
                {/* <Tab.Screen name="👗" component={DressContainer} /> */}
            </Tab.Navigator>
        </>
    );
}

export default Clothing;