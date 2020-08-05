import React from 'react';
import { StyleSheet, Dimensions, View, Pressable } from 'react-native';
import { Card, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    card: {
        width: width / 4,
        height: width / 4,
        margin: 5,
    },
    cardCover: {
        width: width / 4,
        height: width / 4,
    },
    buttonContainer: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
    ,
}
);

export default function Item({ item, index, ClothesActions, ...rest }) {


    const navigation = useNavigation();
    function setClickedItem() {

        ClothesActions.setTemporaryClothing(item);
        navigation.navigate('ItemInfoContainer', { index: index })
    }

    const [isVisibleDeleteBtn, setDeleteBtn] = React.useState(false);
    function showDeleteBtn() {

        setDeleteBtn(true)
    }
    function hideDeleteBtn() {
        setDeleteBtn(false)
    }

    function deleteItemInClient() {
        const deletedItem = { index: index, item: item }
        ClothesActions.removeClothes(deletedItem)
    }

    async function deleteItemInServer() {
        let token = await AsyncStorage.getItem('TOKEN');
        let sendingClothingToServer = { index: index, token: token, item: item }
        ClothesActions.removeClothesToServer(sendingClothingToServer);

    }

    function deleteItem() {

        // deleteItemInClient();
        // 서버연결시 deleteItemInServer() 주석해제, deleteItemInClient() 주석처리 
        deleteItemInServer()
        hideDeleteBtn()
    }

    function handelDeleteBtn() {
        return (isVisibleDeleteBtn ?
            <View style={styles.buttonContainer}>
                <Pressable style={styles.deleteButton} onPress={deleteItem}>
                    <Icon name="delete" size={26} />
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={hideDeleteBtn}>
                    <Icon name="cancel" size={26} />
                </Pressable>
            </View> : <></>)
    }


    function setClickedItem() {
        ClothesActions.setTemporaryClothing(item);
        navigation.navigate('ItemInfoContainer', { index: index })
    }

    return (
        <Pressable style={styles.cardContainer} onPress={setClickedItem} {...rest} onLongPress={showDeleteBtn}>
            <Card style={styles.card} >
                <Card.Cover style={styles.cardCover} resizeMode='stretch'
                    source={{ uri: item.get('image') }} />
            </Card>
            {handelDeleteBtn()}
        </Pressable>

    )
}