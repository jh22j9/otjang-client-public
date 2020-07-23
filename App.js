/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './src/Logo/Logo'
import SignIn from './src/SignIn/SignIn'
import SignUp from './src/SignUp/SignUp'
import Main from './src/Main/Main'
import MainContainer from './src/Main/MainContainer';
import AddItems from './src/AddItems/AddItems'
import AddItemsContainer from './src/AddItems/AddItemsContainer'
import ItemInfo from './src/ItemInfo/ItemInfo'
import EditItem from './src/EditItem/EditItem'
import Statistics from './src/Statistics/Statistics'
import UserInfo from './src/UserInfo/UserInfo'
import Setting from './src/Setting/Setting'
import AllClothesContainer from './src/Main/TabMenu/AllClothesContainer'
import Item from './src/UIcomponents/Item'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import store from './store';

import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

  },
};

function App() {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, [])

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainContainer">
            <Stack.Screen name="Logo" component={Logo} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="AddItemsContainer" component={AddItemsContainer} />
            <Stack.Screen name="AddItems" component={AddItems} />
            <Stack.Screen name="ItemInfo" component={ItemInfo} />
            <Stack.Screen name="EditItem" component={EditItem} />
            <Stack.Screen name="Statistics" component={Statistics} />
            <Stack.Screen name="UserInfo" component={UserInfo} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name='AllClothesContainer' component={AllClothesContainer} />
            <Stack.Screen name='MainContainer' component={MainContainer} />
            <Stack.Screen name='Item' component={Item} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>

  );
}

export default App;
