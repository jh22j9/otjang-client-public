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


export default function TypeList({ temporaryClothing, ClothesActions, ...rest }) {

    const [isSelected, setIsSelected] = React.useState(false)

    function selectTop() {
        if (isSelected === false) {
            setIsSelected(true);
            const topObj = {
                typeValue: 'top',
                top: true,
                bottom: false,
                outer: false,
                dress: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(topObj)));
        } else {
            setIsSelected(false)
        }
    };

    function selectBottom() {
        if (isSelected === false) {
            setIsSelected(true);
            const bottomObj = {
                typeValue: 'top',
                top: false,
                bottom: true,
                outer: false,
                dress: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(bottomObj)));
        } else {
            setIsSelected(false)
        }
    };

    function selectOuter() {
        if (isSelected === false) {
            setIsSelected(true);
            const bottomObj = {
                typeValue: 'outer',
                top: false,
                bottom: false,
                outer: true,
                dress: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(bottomObj)));
        } else {
            setIsSelected(false)
        }
    };

    function selectDress() {
        if (isSelected === false) {
            setIsSelected(true);
            const bottomObj = {
                typeValue: 'dress',
                top: false,
                bottom: false,
                outer: false,
                dress: true
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(bottomObj)));
        } else {
            setIsSelected(false)
        }
    };

    function selectSneakers() {
        if (isSelected === false) {
            setIsSelected(true);
            const sneakersObj = {
                typeValue: 'sneakers',
                sneakers: true,
                leather: false,
                other: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(sneakersObj)));
        } else {
            setIsSelected(false);
        }
    };

    function selectLeather() {
        if (isSelected === false) {
            setIsSelected(true);
            const leatherObj = {
                typeValue: 'leather',
                sneakers: false,
                leather: true,
                other: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(leatherObj)));
        } else {
            setIsSelected(false);
        }
    };

    function selectOtherShoes() {
        if (isSelected === false) {
            setIsSelected(true);
            const otherObj = {
                typeValue: 'leather',
                sneakers: false,
                leather: false,
                other: true
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(otherObj)));
        } else {
            setIsSelected(false);
        }
    };

    function selectOtherShoes() {
        if (isSelected === false) {
            setIsSelected(true);
            const otherObj = {
                typeValue: 'other',
                sneakers: false,
                leather: false,
                other: true
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(otherObj)));
        } else {
            setIsSelected(false);
        }
    };

    function selectBag() {
        if (isSelected === false) {
            setIsSelected(true);
            const bagObj = {
                typeValue: 'bag',
                bag: true,
                head: false,
                other: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(bagObj)));
        } else {
            setIsSelected(false);
        }
    };

    function selectHead() {
        if (isSelected === false) {
            setIsSelected(true);
            const headObj = {
                typeValue: 'head',
                bag: false,
                head: true,
                other: false
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(headObj)));
        } else {
            setIsSelected(false);
        }
    };

    function selectOtherAcc() {
        if (isSelected === false) {
            setIsSelected(true);
            const otherObj = {
                typeValue: 'head',
                bag: false,
                head: false,
                other: true
            };
            ClothesActions
                .setTemporaryClothing(temporaryClothing.set('type', Map(otherObj)));
        } else {
            setIsSelected(false);
        }
    };

    // render 
    if (temporaryClothing.get('category').get('categoryValue') === 'accessories') {
        return (
            <View style={styles.container} {...rest} >
                <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                    <Chip
                        onPress={selectBag}
                        style={styles.chip}
                        textStyle={{ fontSize: 15 }}>
                        💼 Bag
                    </Chip>
                    <Chip
                        onPress={selectHead}
                        style={styles.chip}
                        textStyle={{ fontSize: 15 }}>
                        🧢 Head
                    </Chip>
                    <Chip
                        onPress={selectOtherAcc}
                        style={styles.chip}
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
                        textStyle={{ fontSize: 15 }}>
                        👟 Sneakers
                    </Chip>
                    <Chip
                        onPress={selectLeather}
                        style={styles.chip}
                        textStyle={{ fontSize: 15 }}>
                        👞 Leather
                    </Chip>
                    <Chip
                        onPress={selectOtherShoes}
                        style={styles.chip}
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
                        selected={isSelected}
                        textStyle={{ fontSize: 15 }}>
                        👕 Top
                    </Chip>
                    <Chip
                        onPress={selectBottom}
                        style={styles.chip}
                        textStyle={{ fontSize: 15 }}>
                        👖 Bottom
                    </Chip>
                    <Chip
                        onPress={selectOuter}
                        style={styles.chip}
                        textStyle={{ fontSize: 15 }}>
                        🥼 Outer
                    </Chip>
                    <Chip
                        onPress={selectDress}
                        style={styles.chip}
                        textStyle={{ fontSize: 15 }}>
                        👗 Dress
                    </Chip>
                </ScrollView>
            </View>
        )
    };
};



