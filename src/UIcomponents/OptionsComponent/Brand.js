import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, TextInput } from 'react-native-paper';
import { Map } from 'immutable';


const styles = StyleSheet.create({

    barndContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    inputBrand: {
        display: 'flex',
        flexDirection: 'row',
    }
    ,
    inputBrandNumber: {

        flex: 7,
        margin: 10,
    },
    inputBrandText: {


    },


})


function Brand({ temporaryClothing, onSetTemporaryClothing, ...rest }) {
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

        <View style={styles.barndContainer}>

            <Text style={styles.inputBrandText}>브랜드</Text>
            <View style={styles.inputBrand}>
                <TextInput style={styles.inputBrandNumber} keyboardType='web-search' placeholder='보관장소'>
                </TextInput>
            </View>
        </View>
    )

}




export default Brand;