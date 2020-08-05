import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import Item from './Item'
import { Map, List, fromJS } from 'immutable';
const styles = StyleSheet.create({
    title: {

        margin: 15,
        marginBottom: 10,

    },
});
export default function ItemsList({ title, items, ClothesActions, ...rest }) {

    /*   
  받을 것 (parameter)
  item 들의 객체 배열
  title ( ex> clothing, shoe 등 )
  
      */
    /* 
    THINK
    옷 터치해서 수정할 때 immutable js 사용해야 하니 
    넘겨줄 때 clothes 로 넘겨줘야 함 

    */

    function renderItem({ item, index }) {


        // 여기서 Item component import 해서 리턴 

        return (
            <Item item={fromJS(item)} index={index}
                ClothesActions={ClothesActions} />
        );
    }


    return (
        <View>
            <Title style={styles.title}>{`${title} (${items.toJS().length})`}</Title>
            <FlatList
                horizontal={true}
                data={items.toJS()}
                renderItem={renderItem}
                {...rest}
                keyExtractor={(item, index) => {
                    return (String(index))
                }}
            />

        </View>)

}