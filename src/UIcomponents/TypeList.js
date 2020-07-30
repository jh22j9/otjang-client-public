import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Map, List } from 'immutable';
const { width, height } = Dimensions.get('screen');
import { Chip } from 'react-native-paper'

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.1,
    },
    contentContainer: {
        paddingHorizontal: 20
    },
    selectedContainer: {
        backgroundColor: '#e8dad5',
        padding: 10
    },
    notSelectedContainer: {
        padding: 10,

    },
    chip: {
        marginRight: 10
    }
})


const selectTypeObject = {
    top: false,
    bottom: false,
    outer: false,
    dress: false,
    sneakers: false,
    leather: false,
    shoesOthers: false,
    bag: false,
    head: false,
    accOthers: false,

}

export default function TypeList({ temporaryClothing, ClothesActions, ...rest }) {

    const [selectType, setSelectType] = React.useState({ ...selectTypeObject })

    function selectTop() {

        setSelectType({ ...selectTypeObject, top: true });

        const clothingTypeObj = {
            typeValue: 'top',
            top: true,
            bottom: false,
            outer: false,
            dress: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(clothingTypeObj)));


    };

    function selectBottom() {

        setSelectType({ ...selectTypeObject, bottom: true });

        const clothingTypeObj = {
            typeValue: 'bottom',
            top: false,
            bottom: true,
            outer: false,
            dress: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(clothingTypeObj)));
    };

    function selectOuter() {

        setSelectType({ ...selectTypeObject, outer: true });

        const clothingTypeObj = {
            typeValue: 'outer',
            top: false,
            bottom: false,
            outer: true,
            dress: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(clothingTypeObj)));
    };

    function selectDress() {
        setSelectType({ ...selectTypeObject, dress: true });

        const clothingTypeObj = {
            typeValue: 'dress',
            top: false,
            bottom: false,
            outer: false,
            dress: true
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(clothingTypeObj)));
    };

    function selectSneakers() {
        setSelectType({ ...selectTypeObject, sneakers: true });

        const shoesTypeObj = {
            typeValue: 'sneakers',
            sneakers: true,
            leather: false,
            other: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(shoesTypeObj)));
    };

    function selectLeather() {

        setSelectType({ ...selectTypeObject, leather: true });

        const shoesTypeObj = {
            typeValue: 'leather',
            sneakers: false,
            leather: true,
            other: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(shoesTypeObj)));
    };

    function selectOtherShoes() {

        setSelectType({ ...selectTypeObject, shoesOthers: true });

        const shoesTypeObj = {
            typeValue: 'other',
            sneakers: false,
            leather: false,
            other: true
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(shoesTypeObj)));
    };

    function selectBag() {

        setSelectType({ ...selectTypeObject, bag: true });

        const accTypeObj = {
            typeValue: 'bag',
            bag: true,
            head: false,
            other: false,
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(accTypeObj)));
    };

    function selectHead() {

        setSelectType({ ...selectTypeObject, head: true });

        const accTypeObj = {
            typeValue: 'head',
            bag: false,
            head: true,
            other: false,
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(accTypeObj)));
    };

    function selectOtherAcc() {

        setSelectType({ ...selectTypeObject, accOthers: true });

        const accTypeObj = {
            typeValue: 'other',
            bag: false,
            head: false,
            other: true,
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(accTypeObj)));
    };

    // render 
    if (temporaryClothing.get('category').get('categoryValue') === 'accessories') {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectBag}
                        style={styles.chip}
                        selected={selectType.bag}
                        textStyle={{ fontSize: 15 }}>
                        💼 Bag
                    </Chip>
                    <Chip
                        onPress={selectHead}
                        style={styles.chip}
                        selected={selectType.head}
                        textStyle={{ fontSize: 15 }}>
                        🧢 Head
                    </Chip>
                    <Chip
                        onPress={selectOtherAcc}
                        style={styles.chip}
                        selected={selectType.accOthers}
                        textStyle={{ fontSize: 15 }}>
                        💎⌚️🧤
                    </Chip>
                </ScrollView>
            </View>
        )
    } else if (temporaryClothing.get('category').get('categoryValue') === 'shoes') {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectSneakers}
                        style={styles.chip}
                        selected={selectType.sneakers}
                        textStyle={{ fontSize: 15 }}>
                        👟 Sneakers
                    </Chip>
                    <Chip
                        onPress={selectLeather}
                        style={styles.chip}
                        selected={selectType.leather}
                        textStyle={{ fontSize: 15 }}>
                        👞 Leather
                    </Chip>
                    <Chip
                        onPress={selectOtherShoes}
                        style={styles.chip}
                        selected={selectType.shoesOthers}
                        textStyle={{ fontSize: 15 }}>
                        👡👢🥿
                    </Chip>
                </ScrollView>
            </View>
        )
    } else {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectTop}
                        style={styles.chip}
                        selected={selectType.top}
                        textStyle={{ fontSize: 15 }}>
                        👕 Top
                    </Chip>
                    <Chip
                        onPress={selectBottom}
                        style={styles.chip}
                        selected={selectType.bottom}
                        textStyle={{ fontSize: 15 }}>
                        👖 Bottom
                    </Chip>
                    <Chip
                        onPress={selectOuter}
                        style={styles.chip}
                        selected={selectType.outer}
                        textStyle={{ fontSize: 15 }}>
                        🥼 Outer
                    </Chip>
                    <Chip
                        onPress={selectDress}
                        style={styles.chip}
                        selected={selectType.dress}
                        textStyle={{ fontSize: 15 }}>
                        👗 Dress
                    </Chip>
                </ScrollView>
            </View>
        )
    };
};



