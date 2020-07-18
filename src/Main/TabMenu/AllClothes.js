import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList'
import AddButton from '../../UIcomponents/AddButton'
var dummyData = [];
const { width, height } = Dimensions.get('screen');

for (let i = 0; i < 20; i++) {
    var dummyObj = {}
    dummyObj['uri'] = `https://picsum.photos/${Math.floor(width / 4)}`;
    dummyObj['id'] = `아이디:${i}`;
    dummyData.push(dummyObj);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
    },
    item: {
        flexGrow: height / 3
    }
});

function AllClothes() {

    console.log('dummyData', dummyData);
    return (
        <View style={styles.container}>
            {/* <AddButton /> */}
            <ItemsList style={styles.item} title='Clothes' items={dummyData} />
            <ItemsList style={styles.item} title='Shoes' items={dummyData} />
            <ItemsList style={styles.item} title='Accessories' items={dummyData} />
        </View>
    );
}

export default AllClothes;