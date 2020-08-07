import React from 'react';
import { StyleSheet, View, } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        marginLeft: 20
    },
});

function AllClothes({ clothing, shoes, accessories, temporaryClothing, ClothesActions, }) {


    return (
        <View style={styles.container}>
            <ItemsList title='의류' items={clothing} temporaryClothing={temporaryClothing}
                ClothesActions={ClothesActions}
            />
            <ItemsList title='신발' items={shoes} temporaryClothing={temporaryClothing}
                ClothesActions={ClothesActions}
            />
            <ItemsList title='잡화' items={accessories} temporaryClothing={temporaryClothing}
                ClothesActions={ClothesActions}
            />
        </View>
    );
}

export default AllClothes;