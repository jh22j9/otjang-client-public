import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import Accessories from './TabMenu/Accessories';
import AllClothesContainer from './TabMenu/AllClothesContainer';
import ClothingContainer from './TabMenu/ClothingContainer';
import Shoe from './TabMenu/Shoe';
import ETC from './TabMenu/ETC';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddButton from '../UIcomponents/AddButton'
import { Map, List } from 'immutable';
import ShoeContainer from './TabMenu/ShoeContainer';
const Tab = createMaterialBottomTabNavigator();
// shoe-formal


const emptyClothing = Map({
    item_id: null,
    image: null,
    type: Map({ typeValue: null, top: false, bottom: false, socks: false }),
    category: Map({ categoryValue: null, clothing: false, Shoes: false, Accessories: false }),
    buydate: null,
    price: null,
    brand: null,
    storage: null,
    season: Map({
        seasonArray: List([null, null, null, null]),
        spring: false, summer: false, fall: false, winter: false
    })
})

function Main({ navigation, ClothesActions }) {

    /* 
        TODO>
        
        서버에서 전체 의류 데이터를 받으면 
        CLOTHING, SHOES, ACC 로 분류한다. 

    */

    function moveToAddItems() {
        ClothesActions.setTemporaryClothing(emptyClothing);
        navigation.navigate('AddItemsContainer')
    }


    return (

        <>
            <Tab.Navigator
                initialRouteName="AllClothes"
                activeColor="white"
            >
                <Tab.Screen name="AllClothes" component={AllClothesContainer}
                    options={{
                        tabBarLabel: 'AllClothes',
                        // Tab.Navigator 에서 설정한 color 를 상속받기 위함 
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Clothing" component={ClothingContainer}
                    options={{
                        tabBarLabel: 'Clothing',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5Icons name="tshirt" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen name="Shoe" component={ShoeContainer}
                    options={{
                        tabBarLabel: 'Shoe',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="shoe-formal" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Accessories" component={Accessories}
                    options={{
                        tabBarLabel: 'Accessories',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="hat-fedora" color={color} size={26} />
                        ),
                    }}
                />
                {/* dots-horizontal */}
                <Tab.Screen name="ETC" component={ETC}
                    options={{
                        tabBarLabel: 'ETC',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="dots-horizontal" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
            <AddButton onPress={moveToAddItems} />
        </>
    );
}

export default Main;