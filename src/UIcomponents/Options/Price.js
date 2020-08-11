import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


const styles = StyleSheet.create({

    priceContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    inputPrice: {
        display: 'flex',
        flexDirection: 'row',
    }
    ,
    inputPriceNumber: {

        flex: 7,
        margin: 10,
    },
    inputPriceUnit: {
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inputPriceText: {
        paddingLeft: 13

    },


})


function Price({ temporaryClothing, ClothesActions, ...rest }) {
    const [price, setPrice] = React.useState('');

    function savePrice() {

        ClothesActions.setTemporaryClothing(temporaryClothing.set('price', Number(price)))
    }

    return (

        <View style={styles.priceContainer}>

            <Text style={styles.inputPriceText}>구매 가격</Text>
            <View style={styles.inputPrice}>
                <TextInput style={styles.inputPriceNumber}
                    keyboardType='number-pad'
                    placeholder={temporaryClothing.get('price') ? `${temporaryClothing.get('price')} 원` : 'XXXX 원'}
                    onChangeText={price => setPrice(price)}
                    onEndEditing={savePrice}
                >
                </TextInput>
            </View>
        </View>
    )

}




export default Price;