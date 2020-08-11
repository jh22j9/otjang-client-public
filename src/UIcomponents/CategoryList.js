import React from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Map, } from 'immutable';
import { Chip } from 'react-native-paper';

const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.09,
        borderColor: "white",
        borderBottomWidth: 2,
    },
    selectedContainer: {
        padding: 10
    },
    notSelectedContainer: {
        padding: 10,
    },
    chip: {
        backgroundColor: "#f5f5f5"
    }
})


export default function CategoryList({ temporaryClothing, ClothesActions, ...rest }) {

    function selectClothing() {
        const clothingObject = { categoryValue: 'clothing', clothing: true, shoes: false, accessories: false }
        ClothesActions.setTemporaryClothing(temporaryClothing.set('category', Map(clothingObject)));
    }

    function selectShoe() {
        const shoesObject = { categoryValue: 'shoes', clothing: false, shoes: true, accessories: false }
        ClothesActions.setTemporaryClothing(temporaryClothing.set('category', Map(shoesObject)));
    }

    function selectAccessories() {
        const accessoriesObject = { categoryValue: 'accessories', clothing: false, shoes: false, accessories: true }
        ClothesActions.setTemporaryClothing(temporaryClothing.set('category', Map(accessoriesObject)));
    }


    return (
        <View style={styles.container} {...rest} >

            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={selectClothing}
                icon={() => (<FontAwesome5Icons name="tshirt" size={18} />)}
                textStyle={{ fontSize: 15 }}
                selected={temporaryClothing.get('category').get('clothing')}>
                의류
            </Chip>

            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={selectShoe}
                icon={() => (<MaterialCommunityIcons name="shoe-formal" size={25} />)}
                textStyle={{ fontSize: 15 }}
                selected={temporaryClothing.get('category').get('shoes')}>

                신발
            </Chip>

            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={selectAccessories}
                icon={() => (<MaterialCommunityIcons name="hat-fedora" size={22} />)}
                textStyle={{ fontSize: 15 }}
                selected={temporaryClothing.get('category').get('accessories')}>
                잡화
            </Chip>
        </View>
    )
}

