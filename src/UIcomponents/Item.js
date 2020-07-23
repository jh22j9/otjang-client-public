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

    /* 
    THINK:
    ITEM 을 터치했을 때 편집창을 STACK 에 띄운다. 
    어차피 EDITITEMS 도 STORE 에서 직접 STATE 를 받아야 함 
    ITEM 에서 터치할 때 TEMPORARY CLOTHING 을 터치한 아이템으로 변경시킴 
    
    TODO
    
    ITEM CONTAINER 생성 , ITEMLIST 에서 ITEMCONTAINER 를 호출 
    APP.JS 에서 ITEM CONTAINER 에서 직접 STORE 를 받을 수 있도록 설정 
    ITEM 에서 ONPRESS 에서 임시의류창고를 업데이트 하며 EDITITEMS 로 화면전환 
    
    EDITITEMS 도 APP.JS 에서 직접 STORE 받도록 설정
    
    */

    console.log('navigation', navigation)

    function setEditItem() {

        ClothesActions.setTemporaryClothing(item);
        navigation.navigate('EditItem')
    }
    return (
        <Card style={styles.card} {...rest} onPress={setEditItem}>

            <Card.Cover style={styles.cardCover} resizeMode='stretch'
                source={{ uri: item.get('image') }} />

        </Card>
    )
}