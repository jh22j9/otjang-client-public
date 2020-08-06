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
import SignIn from './src/SignIn/SignIn'
import SignUp from './src/SignUp/SignUp'
import MainContainer from './src/Main/MainContainer';
import AddItemsContainer from './src/AddItems/AddItemsContainer'
import ItemInfoContainer from './src/ItemInfo/ItemInfoContainer'
import EditItemContainer from './src/EditItem/EditItemContainer'
import MyInfo from './src/MyInfo/MyInfo'
import MyInfoContainer from './src/MyInfo/MyInfoContainer'
import Setting from './src/Setting/Setting'
import AllClothesContainer from './src/Main/BottomTab/AllClothesContainer'
import ClothingContainer from './src/Main/BottomTab/ClothingContainer'
import ShoeContainer from './src/Main/BottomTab/ShoeContainer'
import BagAccContainer from './src/Main/BottomTab/BagAccContainer'
import StatisticsContainer from './src/Statistics/StatisticsContainer'
import ChangePassword from './src/MyInfo/ChangePassword'
import HowToWash from './src/Wash/HowToWash'
import CustomAlert from './src/Wash/CustomAlert'
import { StyleSheet } from 'react-native'
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
const styles = StyleSheet.create({


})
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
          <Stack.Navigator initialRouteName="SignIn" screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="AddItemsContainer" component={AddItemsContainer}
            />
            <Stack.Screen name="ItemInfoContainer" component={ItemInfoContainer}
            />
            <Stack.Screen name="EditItemContainer" component={EditItemContainer}
            />
            <Stack.Screen name='StatisticsContainer' component={StatisticsContainer}
              options={{ title: 'Statistics' }} />
            <Stack.Screen name="MyInfo" component={MyInfo}
            />
            <Stack.Screen name="MyInfoContainer" component={MyInfoContainer}
              options={{ title: 'MyInfo' }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword}
            />
            <Stack.Screen name="Setting" component={Setting}
            />
            <Stack.Screen name='MainContainer' component={MainContainer}
              options={{ title: 'Main' }} />
            <Stack.Screen name='AllClothesContainer' component={AllClothesContainer}
            />
            <Stack.Screen name='ClothingContainer' component={ClothingContainer}
            />
            <Stack.Screen name='ShoeContainer' component={ShoeContainer}
            />
            <Stack.Screen name='BagAccContainer' component={BagAccContainer}
            />
            <Stack.Screen name='HowToWash' component={HowToWash}
              options={{ title: '세탁기호' }}
            />
            <Stack.Screen name="CustomAlert" component={CustomAlert} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>

  );
}

export default App;
