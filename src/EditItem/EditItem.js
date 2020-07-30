import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { IconButton, Colors, Button, Card, Chip, List } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
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
        borderColor: 'black',
        borderWidth: 2,
    },
    saveButtonContainer: {
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    optionsContainer: {

    },
})

function EditItem({ navigation, index = 0, user, temporaryClothing, ClothesActions, ServerActions }) {

    async function saveEditedItem() {
        var id = temporaryClothing.get('item_id');
        if (id) {
            // onSetClothes({ index: index, temporaryClothing })
            // ClothesActions.setClothes({ index: index, item: temporaryClothing })

            // 서버연결 

            let token = await AsyncStorage.getItem('TOKEN');
            token = JSON.parse(token);
            let sendingClothingToServer = { index: index, token: token, item: temporaryClothing }
            ClothesActions.updateClothesToServer(sendingClothingToServer);

            navigation.goBack();
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
            </ScrollView>
            <View style={styles.saveButtonContainer}>
                <FormButton title='저장' modeValue='contained' onPress={saveEditedItem} />
            </View>
        </View>
    );
}

export default EditItem;