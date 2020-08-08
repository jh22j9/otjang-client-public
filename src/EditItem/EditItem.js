import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Gallery from '../UIcomponents/Gallery'
import FormButton from '../UIcomponents/FormButton'
import CategoryList from '../UIcomponents/CategoryList';
import TypeList from '../UIcomponents/TypeList'
import Season from '../UIcomponents/Season'
import ExtraOptions from '../UIcomponents/ExtraOptions'

const { width, height } = Dimensions.get('screen');
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
})

function EditItem({ navigation, route, temporaryClothing, ClothesActions, }) {

    const { index, category } = route.params;

    function editItemInClient() {
        ClothesActions.setClothes({ index: index, item: temporaryClothing, category: category })
        navigation.goBack();
    }


    async function editItemInServer() {

        let token = await AsyncStorage.getItem('TOKEN');

        let sendingClothingToServer = { index: index, token: token, item: temporaryClothing, category: category }
        ClothesActions.updateClothesToServer(sendingClothingToServer);
        navigation.popToTop()

    }

    function saveEditedItem() {
        var id = temporaryClothing.get('item_id');

        if (id) {
            editItemInServer();
        }

        else {
            editItemInClient();
        }

    }
    return (
        <View style={styles.container}>

            <ScrollView >
                <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <CategoryList temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <TypeList temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <Season temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <ExtraOptions temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <View style={styles.saveButtonContainer}>
                    <FormButton title='저장' modeValue='contained' onPress={saveEditedItem} />
                </View>
            </ScrollView>
        </View>
    );
}

export default EditItem;