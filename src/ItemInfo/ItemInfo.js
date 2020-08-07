import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import Gallery from '../UIcomponents/Gallery'
import EditButton from '../UIcomponents/EditButton';
import DeleteButton from '../UIcomponents/DeleteButton';
import AsyncStorage from '@react-native-community/async-storage';
const styles = StyleSheet.create({

    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },

    imageContainer: {
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 40
    },
    text: {
        paddingVertical: 8,
        fontSize: 18
    },
    infoContainer: {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
    },
    buttonContainer: {
        flex: 2,
    },

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

            <ScrollView>
                <Text style={styles.text}>
                    {`카테고리 : ${category}`}
                </Text>

                {type ? <Text style={styles.text}>{`타입 : ${type}`}</Text> : <></>}
                {seasons ? <Text style={styles.text}>{`계절 : ${seasons}`}</Text> : <></>}
                {price ? <Text style={styles.text}>{`가격 : ${price} 원`}</Text> : <></>}
                {storage ? <Text style={styles.text}>{`보관 장소 : ${storage}`}</Text> : <></>}
                {brand ? <Text style={styles.text}>{`브랜드 : ${brand}`}</Text> : <></>}
                {buydate ? <Text style={styles.text}>{`구매 일자 : ${buydate}`}</Text> : <></>}
            </ScrollView>
        )
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.imageContainer}>

                <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            </View>

            <View style={styles.infoContainer}>
                {renderItemInfoText()}
            </View>
            <View style={styles.buttonContainer}>
                <EditButton onPress={moveToEditItem} />
                <DeleteButton onPress={deleteItem} />
            </View>

        </View>
    );
}

export default ItemInfo;