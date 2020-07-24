import React from 'react';
import { StyleSheet, Dimensions, Image, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    card: {
        width: width / 4,
        height: width / 4,
        margin: 5,
    },
    cardCover: {
        width: width / 4,
        height: width / 4,
    },
}
);

export default function Item({ navigation, item, index, ClothesActions, ...rest }) {

    function setClickedItem() {

        ClothesActions.setTemporaryClothing(item);
        navigation.navigate('ItemInfoContainer')
    }

    return (
        <Card style={styles.card} {...rest} onPress={setClickedItem}>

            <Card.Cover style={styles.cardCover} resizeMode='stretch'
                source={{ uri: item.get('image') }} />

        </Card>
    )
}