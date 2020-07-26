import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList'
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "flex-start",
        padding: 25
        // height: '100%'
    },
});

function Clothing({ navigation, clothing, ClothesActions, }) {

    return (
        <View style={styles.container}>
            <ItemsList title='Clothing' items={clothing}
                ClothesActions={ClothesActions}
                navigation={navigation} />
        </View>
    );
}

export default Clothing;