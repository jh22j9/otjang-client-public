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

const defaultTypeObject = {
    typeValue: null,
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
    other: false,
}

export default function TypeList({ temporaryClothing, ClothesActions, ...rest }) {


    // clothing

    function selectType(type) {
        let typeObject = { ...defaultTypeObject, typeValue: `${type}` }
        typeObject[`${type}`] = true;
        ClothesActions
            .setTemporaryClothing(temporaryClothing.set('type', Map(typeObject)));
    }

    // accessories 
    if (temporaryClothing.get('category').get('categoryValue') === 'accessories') {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={() => { selectType('bag') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('bag')}
                        textStyle={{ fontSize: 15 }}>
                        💼 가방
                    </Chip>
                    <Chip
                        onPress={() => { selectType('head') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('head')}
                        textStyle={{ fontSize: 15 }}>
                        🧢 모자
                    </Chip>
                    <Chip
                        onPress={() => { selectType('jewelry') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('jewelry')}
                        textStyle={{ fontSize: 15 }}>
                        💎 액세서리
                    </Chip>
                    <Chip
                        onPress={() => { selectType('other') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('other')}
                        textStyle={{ fontSize: 15 }}>
                        ••• 기타
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
                        onPress={() => { selectType('sneakers') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('sneakers')}
                        textStyle={{ fontSize: 15 }}>
                        👟 운동화
                    </Chip>
                    <Chip
                        onPress={() => { selectType('leather') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('leather')}
                        textStyle={{ fontSize: 15 }}>
                        👞 구두
                    </Chip>
                    <Chip
                        onPress={() => { selectType('sandals') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('sandals')}
                        textStyle={{ fontSize: 15 }}>
                        👡 샌들
                    </Chip>
                    <Chip
                        onPress={() => { selectType('boots') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('boots')}
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
                        onPress={() => { selectType('top') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('top')}
                        textStyle={{ fontSize: 15 }}>
                        👕 상의
                    </Chip>
                    <Chip
                        onPress={() => { selectType('bottom') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('bottom')}
                        textStyle={{ fontSize: 15 }}>
                        👖 하의
                    </Chip>
                    <Chip
                        onPress={() => { selectType('outer') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('outer')}
                        textStyle={{ fontSize: 15 }}>
                        🥼 자켓
                    </Chip>
                    <Chip
                        onPress={() => { selectType('dress') }}
                        style={styles.chip}
                        selected={temporaryClothing.get('type').get('dress')}
                        textStyle={{ fontSize: 15 }}>
                        👗 드레스
                    </Chip>
                </ScrollView>
            </View>
        )
    };
};



