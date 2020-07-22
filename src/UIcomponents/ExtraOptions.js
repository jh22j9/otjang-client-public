import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, TextInput } from 'react-native-paper';
import { Map } from 'immutable';

import Price from './Options/Price'
import Storage from './Options/Storage'
import Brand from './Options/Brand';
import Buydate from './Options/Buydate';
const styles = StyleSheet.create({
    optionsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },

})


function ExtraOptions({ temporaryClothing, onSetTemporaryClothing, ...rest }) {
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

        <List.Accordion title="추가옵션 펼치기" style={styles.inputContainer} >
            <Price temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
            <Storage temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
            <Brand temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
            <Buydate temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
        </List.Accordion>
    )

}




export default ExtraOptions;