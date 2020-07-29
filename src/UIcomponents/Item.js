import React from 'react';
import { StyleSheet, Dimensions, Image, View, Pressable } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
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

export default function Item({ navigation, item, index, ClothesActions, ...rest }) {


    const [isVisibleDeleteBtn, setDeleteBtn] = React.useState(false);

    function showDeleteBtn() {

        setDeleteBtn(true)
    }
    function hideDeleteBtn() {
        setDeleteBtn(false)
    }

    async function deleteItem() {

        // const deletedItem = { index: index, item: item }

        ClothesActions.removeClothes(deletedItem)

        // 서버연결
        /* 
                let token = await AsyncStorage.getItem('TOKEN');
                token = JSON.parse(token);
                console.log('token', token)
                let sendingClothingToServer = { index: index, token: token, item: item }
                ClothesActions.removeClothesToServer(sendingClothingToServer); */

        setDeleteBtn(false)
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