/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from './src/Logo/Logo'
import SignIn from './src/SignIn/SignIn'
import SignUp from './src/SignUp/SignUp'
import Main from './src/Main/Main'
import AddItemsContainer from './src/AddItems/AddItemsContainer'
import ItemInfo from './src/ItemInfo/ItemInfo'
import EditItem from './src/EditItem/EditItem'
import Statistics from './src/Statistics/Statistics'
import UserInfo from './src/UserInfo/UserInfo'
import Setting from './src/Setting/Setting'
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from './src/modules';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const Stack = createStackNavigator();
const store = createStore(reducers, applyMiddleware(logger));

function App() {

  console.log('store', store.getState().toJS())
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          < Stack.Navigator initialRouteName="Logo">
            <Stack.Screen name="Logo" component={Logo} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="AddItemsContainer" component={AddItemsContainer} />
            <Stack.Screen name="ItemInfo" component={ItemInfo} />
            <Stack.Screen name="EditItem" component={EditItem} />
            <Stack.Screen name="Statistics" component={Statistics} />
            <Stack.Screen name="UserInfo" component={UserInfo} />
            <Stack.Screen name="Setting" component={Setting} />
          </Stack.Navigator>
        </NavigationContainer >
      </PaperProvider>
    </Provider>

  );
}

export default App;
