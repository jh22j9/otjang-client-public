import React, { Component, Fragment } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Gallery from '../UIcomponents/Gallery'
import FormButton from '../UIcomponents/FormButton'
import CategoryList from '../UIcomponents/CategoryList';
import TypeList from '../UIcomponents/TypeList'
import Season from '../UIcomponents/Season'
import ExtraOptions from '../UIcomponents/ExtraOptions'
import EditButton from '../UIcomponents/EditButton';
import DeleteButton from '../UIcomponents/DeleteButton';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 40
    },
    text: {
        paddingVertical: 6,
        fontSize: 18
    }
})

function ItemInfo({ route, navigation, temporaryClothing, ClothesActions }) {

    const { index } = route.params;
    var clothing = temporaryClothing.toJS();
    const category = clothing.category.categoryValue;
    const type = clothing.type.typeValue;
    const seasons = convertSeasonsText(clothing.season.seasonArray).join(' ');
    const { brand, storage, price } = clothing;
    const buydate = convertBuydateText(clothing.buydate);

    function moveToEditItem() {
        navigation.navigate('EditItemContainer', { index: index, category: category })
    };

    function deleteItemInClient() {
        const deletedItem = { index: index, item: temporaryClothing }
        ClothesActions.removeClothes(deletedItem)
    }

    async function deleteItemInServer() {
        let token = await AsyncStorage.getItem('TOKEN');
        token = JSON.parse(token);
        let sendingClothingToServer = { index: index, token: token, item: temporaryClothing }
        ClothesActions.removeClothesToServer(sendingClothingToServer);

    }

    function deleteItem() {

        function deleteAfterValidate() {


            // deleteItemInClient()
            // 서버연결시 deleteItemInServer() 주석 해제, deleteItemInClient() 주석처리 
            deleteItemInServer()
            navigation.goBack();
        };

        Alert.alert("아이템이 삭제됩니다.", "",
            [
                {
                    text: "취소", onPress: () => console.log("Cancle Pressed"),
                    style: "cancle"
                },
                { text: "확인", onPress: () => deleteAfterValidate() }
            ],
            { cancelable: false }
        );
    };

    function convertBuydateText(buydate) {

        if (!buydate) {
            return buydate;
        }
        const year = String(buydate).split('').slice(0, 2).join('');
        var month = String(buydate).split('').slice(2)

        if (month[0] === '0') {
            month.shift();
        }
        month = month.join('');
        return `${year}년 ${month}월`
    }

    function convertSeasonsText(seasons) {

        var convertedSeasons = [];

        if (seasons[0] === 'sp') { convertedSeasons[0] = '봄' }

        if (seasons[1] === 'sm') {
            convertedSeasons[1] = '여름'
        }

        if (seasons[2] === 'f') {
            convertedSeasons[2] = '가을'
        }

        if (seasons[3] === 'w') {
            convertedSeasons[3] = '겨울'
        }

        return convertedSeasons;
    }

    function renderItemInfoText() {

        return (
            <View style={styles.textContainer}>

                <Text style={styles.text}>
                    {`category : ${category}`}
                </Text>

                {type ? <Text style={styles.text}>{`type : ${type}`}</Text> : <></>}
                {seasons ? <Text style={styles.text}>{`계절 : ${seasons}`}</Text> : <></>}
                {price ? <Text style={styles.text}>{`가격 : ${price}`}</Text> : <></>}
                {storage ? <Text style={styles.text}>{`보관장소 : ${storage}`}</Text> : <></>}
                {brand ? <Text style={styles.text}>{`brand : ${brand}`}</Text> : <></>}
                {buydate ? <Text style={styles.text}>{`구매일자 : ${buydate}`}</Text> : <></>}
            </View>)
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={styles.container}>
                <View>
                    <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                    {renderItemInfoText()}
                </View>
            </View>

            <EditButton onPress={moveToEditItem} />
            <DeleteButton onPress={deleteItem} />
        </View>
    );
}

export default ItemInfo;