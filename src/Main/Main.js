import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import Accessories from './TabMenu/Accessories';
import AllClothes from './TabMenu/AllClothes';
import Clothes from './TabMenu/Clothes';
import Shoe from './TabMenu/Shoe';
import ETC from './TabMenu/ETC';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddButton from '../UIcomponents/AddButton'

const Tab = createMaterialBottomTabNavigator();
// shoe-formal
function Main({ navigation }) {

    // THINK: navigation 객체를 사용하여 현재 위치 파악 



    return (

        <>
            <Tab.Navigator
                initialRouteName="AllClothes"
                activeColor="white"
            >
                <Tab.Screen name="AllClothes" component={AllClothes}
                    options={{
                        tabBarLabel: 'AllClothes',
                        // Tab.Navigator 에서 설정한 color 를 상속받기 위함 
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Clothes" component={Clothes}
                    options={{
                        tabBarLabel: 'Clothes',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5Icons name="tshirt" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen name="Shoe" component={Shoe}
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
            <AddButton onPress={() => { navigation.navigate('AddItemsContainer') }} />
        </>
    );
}

export default Main;