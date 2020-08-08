import React from 'react';
import { StyleSheet } from 'react-native';

import Price from './Options/Price'
import Storage from './Options/Storage'
import Brand from './Options/Brand';
import Buydate from './Options/Buydate';
import { List } from 'react-native-paper';
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


function ExtraOptions({ temporaryClothing, ClothesActions, ...rest }) {


    return (

        <List.Accordion title="추가 옵션 선택" style={styles.inputContainer} >
            <Buydate temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <Price temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <Brand temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            <Storage temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
        </List.Accordion>
    )

}




export default ExtraOptions;