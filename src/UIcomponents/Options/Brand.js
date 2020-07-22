import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, TextInput } from 'react-native-paper';


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
    const [brand, setBrand] = React.useState('');

    function saveBrand() {

        onSetTemporaryClothing(temporaryClothing.set('brand', brand))
    }
    return (

        <View style={styles.barndContainer}>

            <Text style={styles.inputBrandText}>브랜드</Text>
            <View style={styles.inputBrand}>
                <TextInput style={styles.inputBrandNumber} placeholder='브랜드'
                    onChangeText={brand => setBrand(brand)}
                    onEndEditing={saveBrand}
                >
                </TextInput>
            </View>
        </View>
    )

}




export default Brand;