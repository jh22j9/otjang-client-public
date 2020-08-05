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
        marginRight: 15
    }
});

const selectTypeObject = {
    top: false,
    bottom: false,
    outer: false,
    dress: false,

    sneakers: false,
    leather: false,
    sandals: false,
    boots: false,

    bag: false,
    head: false,
    jewelry: false,
    accOthers: false,
}

export default function TypeList({ temporaryClothing, ClothesActions, ...rest }) {

    const [selectType, setSelectType] = React.useState({ ...selectTypeObject })

    // clothing
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

    // shoes
    function selectSneakers() {
        setSelectType({ ...selectTypeObject, sneakers: true });

        const shoesTypeObj = {
            typeValue: 'sneakers',
            sneakers: true,
            leather: false,
            sandals: false,
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
            sandals: false,
            boots: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(shoesTypeObj)));
    };

    function selectSandals() {

        setSelectType({ ...selectTypeObject, sandals: true });

        const shoesTypeObj = {
            typeValue: 'sandals',
            sneakers: false,
            leather: false,
            sandals: true,
            boots: false
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(shoesTypeObj)));
    };

    function selectBoots() {

        setSelectType({ ...selectTypeObject, boots: true });

        const shoesTypeObj = {
            typeValue: 'boots',
            sneakers: false,
            leather: false,
            sandals: false,
            boots: true
        };
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(shoesTypeObj)));
    };

    // accessories
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

    function selectJewelry() {

        setSelectType({ ...selectTypeObject, jewelry: true });

        const accTypeObj = {
            typeValue: 'jewelry',
            bag: false,
            head: false,
            jewelry: true,
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

    // accessories 
    if (temporaryClothing.get('category').get('categoryValue') === 'accessories') {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectBag}
                        style={styles.chip}
                        selected={selectType.bag}
                        textStyle={{ fontSize: 15 }}>
                        💼 가방
                    </Chip>
                    <Chip
                        onPress={selectHead}
                        style={styles.chip}
                        selected={selectType.head}
                        textStyle={{ fontSize: 15 }}>
                        🧢 모자
                    </Chip>
                    <Chip
                        onPress={selectJewelry}
                        style={styles.chip}
                        selected={selectType.jewelry}
                        textStyle={{ fontSize: 15 }}>
                        💎 액세서리
                    </Chip>
                    <Chip
                        onPress={selectOtherAcc}
                        style={styles.chip}
                        selected={selectType.accOthers}
                        textStyle={{ fontSize: 15 }}>
                        •••
                    </Chip>
                </ScrollView>
            </View>
        )
        // shoes
    } else if (temporaryClothing.get('category').get('categoryValue') === 'shoes') {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectSneakers}
                        style={styles.chip}
                        selected={selectType.sneakers}
                        textStyle={{ fontSize: 15 }}>
                        👟 운동화
                    </Chip>
                    <Chip
                        onPress={selectLeather}
                        style={styles.chip}
                        selected={selectType.leather}
                        textStyle={{ fontSize: 15 }}>
                        👞 구두
                    </Chip>
                    <Chip
                        onPress={selectSandals}
                        style={styles.chip}
                        selected={selectType.sandals}
                        textStyle={{ fontSize: 15 }}>
                        👡 샌들
                    </Chip>
                    <Chip
                        onPress={selectBoots}
                        style={styles.chip}
                        selected={selectType.boots}
                        textStyle={{ fontSize: 15 }}>
                        👢 부츠
                    </Chip>
                </ScrollView>
            </View>
        )
        // clothing
    } else {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectTop}
                        style={styles.chip}
                        selected={selectType.top}
                        textStyle={{ fontSize: 15 }}>
                        👕 상의
                    </Chip>
                    <Chip
                        onPress={selectBottom}
                        style={styles.chip}
                        selected={selectType.bottom}
                        textStyle={{ fontSize: 15 }}>
                        👖 하의
                    </Chip>
                    <Chip
                        onPress={selectOuter}
                        style={styles.chip}
                        selected={selectType.outer}
                        textStyle={{ fontSize: 15 }}>
                        🥼 자켓
                    </Chip>
                    <Chip
                        onPress={selectDress}
                        style={styles.chip}
                        selected={selectType.dress}
                        textStyle={{ fontSize: 15 }}>
                        👗 드레스
                    </Chip>
                </ScrollView>
            </View>
        )
    };
};



