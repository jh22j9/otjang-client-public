import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, TextInput } from 'react-native-paper';
import { Map } from 'immutable';


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


function Price({ temporaryClothing, onSetTemporaryClothing, ...rest }) {
    /* 
    buydate: null,
    price: null,
    brand: null,
    storage: null,
    */

    /* 
    THINK: 

    1> buydate 

    컴포넌트 호출 시 현재 날짜 받음 
    년도만 뽑아냄 -> numberpicker 에 반영 
    년, 월만 선택하도록 

    number picker 선택이 완료되면 redux 로 상태변경 
    구매일
    
    number picker 로 구성 

    2> price 

    <Input/> 원 
    onChange 할 때마다 상태변경 


    */


    return (

        <View style={styles.priceContainer}>

            <Text style={styles.inputPriceText}>구매가격</Text>
            <View style={styles.inputPrice}>
                <TextInput style={styles.inputPriceNumber} keyboardType='number-pad' placeholder='가격입력'>
                </TextInput>
                <View style={styles.inputPriceUnit}>
                    <Text >원</Text>
                </View>
            </View>
        </View>
    )

}




export default Price;