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

export default function Item({ uri, title = '제목', ...rest }) {

    return (
        <Card style={styles.card}>
            {/* <View>
                <Image resizeMode='contain' source={{ uri: 'https://file3.instiz.net/data/file3/2018/10/23/9/3/7/937b48176745a84e92f676df4580fc09.jpg' }} />
            </View> */}
            <Card.Cover style={styles.cardCover} resizeMode='contain' source={{ uri: uri }} />

        </Card>
    )
}