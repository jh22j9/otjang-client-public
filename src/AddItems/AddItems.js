import * as React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Gallery from '../UIcomponents/Gallery'
import FormButton from '../UIcomponents/FormButton'
import CategoryList from '../UIcomponents/CategoryList';
import TypeList from '../UIcomponents/TypeList'
import Season from '../UIcomponents/Season'
import ExtraOptions from '../UIcomponents/ExtraOptions'

const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    extraOptions: {
        display: 'flex',
    },
    saveButtonContainer: {
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionsContainer: {

    },



})


function AddItems({ navigation, temporaryClothing, ClothesActions, }) {

    function addItemInClient() {
        ClothesActions.createClothes(temporaryClothing);
    }

    async function addItemInServer() {

        // 서버연결
        let token = await AsyncStorage.getItem('TOKEN');
        let sendingClothingToServer = { token: token, item: temporaryClothing }
        ClothesActions.createClothesToServer(sendingClothingToServer);
    }

    function saveClothes() {

        // addItemInClient()

        // 서버연결시 addItemInServer() 주석 해제, addItemInClient() 주석처리
        addItemInServer()
        navigation.goBack();

    }
    return (

        <ScrollView >
            <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <CategoryList temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <TypeList temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <Season temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <ExtraOptions temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <View style={styles.saveButtonContainer}>
                <FormButton title='저장' modeValue='contained' onPress={saveClothes} />
            </View>
        </ScrollView>
    );
}

export default AddItems;