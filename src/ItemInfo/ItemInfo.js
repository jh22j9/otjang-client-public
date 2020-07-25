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
        fontSize: 18
    }
})

function ItemInfo({ route, navigation, temporaryClothing, ClothesActions }) {

    const { index } = route.params;

    function moveToEditItem() {
        navigation.navigate('EditItemContainer', { index: index })
    };

    function deleteItem() {

        function deleteAfterValidate() {
            let targetItem = { index: index, item: temporaryClothing }
            ClothesActions.removeClothes(targetItem);
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

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={styles.container}>
                <ScrollView>
                    <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />

                    <Text style={styles.text}>{temporaryClothing.get('category')}</Text>
                    <Text style={styles.text}>{temporaryClothing.get('type')}</Text>
                    <Text style={styles.text}>{temporaryClothing.get('season')}</Text>

                    {temporaryClothing.get('buydate') !== null ? <Text style={styles.text}>{temporaryClothing.get('buydate')}</Text> : <Fragment />}
                    {temporaryClothing.get('price') !== null ? <Text style={styles.text}>{temporaryClothing.get('price')}</Text> : <Fragment />}
                    {temporaryClothing.get('brand') !== null ? <Text style={styles.text}>{temporaryClothing.get('brand')}</Text> : <Fragment />}
                    {temporaryClothing.get('storage') !== null ? <Text style={styles.text}>{temporaryClothing.get('storage')}</Text> : <Fragment />}
                </ScrollView>
            </View>

            <EditButton onPress={moveToEditItem} />
            <DeleteButton onPress={deleteItem} />
        </View>
    );
}

export default ItemInfo;