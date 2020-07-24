import React from 'react';
import { StyleSheet, Dimensions, Image, View, Pressable } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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
    cardContainer: {
        display: 'flex',
    },
    deleteButton: {


    }
}
);

export default function Item({ navigation, item, index, ClothesActions, ...rest }) {

    const [isVisibleDeleteBtn, setDeleteBtn] = React.useState(false);
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

    /* 
    THINK 삭제기능 구현 

    
    
    */

    function setEditItem() {

        ClothesActions.setTemporaryClothing(item);
        navigation.navigate('EditItem')
    }

    function showDeleteBtn() {
        /* 
        THINK 
        해당 아이템의 카테고리 배열 안의 INDEX 를 알 수 있다. 
        SPLICE 한 것을 SET 

        */
        // console.log('아이템', item.get('category'))
        // console.log('index', index)
        setDeleteBtn(true)
    }

    function hideDeleteBtn() {
        setDeleteBtn(false)
    }

    function deleteItem() {

        const deletedItem = { index: index, item: item }

        ClothesActions.removeClothes(deletedItem)
        setDeleteBtn(false)
    }

    function handelDeleteBtn() {
        return (isVisibleDeleteBtn ?
            <>
                <Pressable style={styles.deleteButton} onPress={deleteItem}>
                    <Icon name="delete" size={26} />
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={hideDeleteBtn}>
                    <Icon name="cancel" size={26} />
                </Pressable>
            </> : <></>)
    }
    return (
        <Pressable style={styles.cardContainer} onPress={setEditItem} {...rest} onLongPress={showDeleteBtn}>
            <Card style={styles.card} >
                <Card.Cover style={styles.cardCover} resizeMode='stretch'
                    source={{ uri: item.get('image') }} />
            </Card>
            {handelDeleteBtn()}
        </Pressable>
    )
}