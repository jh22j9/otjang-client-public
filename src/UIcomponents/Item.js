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


    const [isVisibleDeleteBtn, setDeleteBtn] = React.useState(false);

   function showDeleteBtn() {

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


    function setClickedItem() {
        ClothesActions.setTemporaryClothing(item);
        navigation.navigate('ItemInfoContainer', { index: index })
    }

    return (
             <Pressable style={styles.cardContainer} onPress={setClickedItem} {...rest} onLongPress={showDeleteBtn}>
            <Card style={styles.card} >
                <Card.Cover style={styles.cardCover} resizeMode='stretch'
                    source={{ uri: item.get('image') }} />
            </Card>
            {handelDeleteBtn()}
        </Pressable>
  
    )
}