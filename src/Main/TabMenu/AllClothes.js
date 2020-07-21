import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList'
var dummyData = [];
const { width, height } = Dimensions.get('screen');
const dogUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjY4XAol3KxWGXJLUG3SwILG-M7NeyoxPbOA&usqp=CAU'

for (let i = 0; i < 20; i++) {
    var dummyObj = {}
    dummyObj['uri'] = dogUri;
    dummyObj['id'] = `아이디:${i}`;
    dummyData.push(dummyObj);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    },
});

function AllClothes() {

    console.log('dummyData', dummyData);
    return (
        <View style={styles.container}>
            <ItemsList title='Clothes' items={dummyData} />
            <ItemsList title='Shoes' items={dummyData} />
            <ItemsList title='Accessories' items={dummyData} />
        </View>
    );
}

export default AllClothes;