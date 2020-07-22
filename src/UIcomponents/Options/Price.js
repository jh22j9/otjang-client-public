import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, TextInput } from 'react-native-paper';


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


    },


})


// NOTICE: props 로 받는 temporaryClothing 은 상태변화 전 상태이다. 
// 저장버튼 누를 때는 변화된 상태가 반영된다.
// Price 함수 안에서는 즉각 변화된 temporaryClothing 을 확인할 수 없다. 
function Price({ temporaryClothing, onSetTemporaryClothing, ...rest }) {
    const [price, setPrice] = React.useState('');

    function savePrice() {

        onSetTemporaryClothing(temporaryClothing.set('price', Number(price)))
    }

    return (

        <View style={styles.priceContainer}>

            <Text style={styles.inputPriceText}>구매가격</Text>
            <View style={styles.inputPrice}>
                <TextInput style={styles.inputPriceNumber}
                    keyboardType='number-pad' placeholder='XXXX 원'
                    onChangeText={price => setPrice(price)}
                    onEndEditing={savePrice}
                >
                </TextInput>
            </View>
        </View>
    )

}




export default Price;