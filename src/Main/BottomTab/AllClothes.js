import React from 'react';
import { StyleSheet, View, } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    },
});

function AllClothes({ clothing, shoes, accessories, temporaryClothing, ClothesActions, }) {


    /* 
    TODO: CLOTHES, SHOES ACC 분류하여 ITEMLIST 에 각각 넣어주어야 함 
    
    THINK 
    상태를 각각 따로 분리해야 하나? 

    1> 서버에서 데이터를 받은 후 카테고리에 따라 분류 한 후 넘겨준다. 

    */

    return (
        <View style={styles.container}>
            <ItemsList title='Clothing' items={clothing} temporaryClothing={temporaryClothing}
                ClothesActions={ClothesActions}
            />
            <ItemsList title='Shoes' items={shoes} temporaryClothing={temporaryClothing}
                ClothesActions={ClothesActions}
            />
            <ItemsList title='Accessories' items={accessories} temporaryClothing={temporaryClothing}
                ClothesActions={ClothesActions}
            />
        </View>
    );
}

export default AllClothes;