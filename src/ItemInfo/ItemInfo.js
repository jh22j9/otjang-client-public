import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
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
        // backgroundColor: 'red'
    },
    extraOptions: {
        display: 'flex',
        borderColor: 'black',
        borderWidth: 2,
    },
    ButtonContainer: {
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        // backgroundColor: 'blue'
    },
    optionsContainer: {

    },
})

function ItemInfo({ temporaryClothing, ClothesActions }) {

    function moveToEditItem() {
        navigation.navigate('EditItemContainer')
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View>
                <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <Text>{temporaryClothing.get('category')}</Text>
                <Text>{temporaryClothing.get('type')}</Text>
                <Text>{temporaryClothing.get('season')}</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <FormButton title='편집' modeValue='contained' onPress={moveToEditItem} />

            </View>
        </View>
    );
}

export default ItemInfo;