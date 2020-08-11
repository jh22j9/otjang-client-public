import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';


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

        paddingLeft: 13
    },


})


function Brand({ temporaryClothing, ClothesActions, ...rest }) {
    const [brand, setBrand] = React.useState('');

    function saveBrand() {

        ClothesActions.setTemporaryClothing(temporaryClothing.set('brand', brand))
    }
    return (

        <View style={styles.barndContainer}>

            <Text style={styles.inputBrandText}>브랜드</Text>
            <View style={styles.inputBrand}>
                <TextInput style={styles.inputBrandNumber}
                    placeholder={temporaryClothing.get('brand') ? `${temporaryClothing.get('brand')}` : '브랜드'}
                    onChangeText={brand => setBrand(brand)}
                    onEndEditing={saveBrand}
                >
                </TextInput>
            </View>
        </View>
    )

}




export default Brand;