import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import Item from './Item'

const styles = StyleSheet.create({
    title: {

        margin: 15,
        marginBottom: 10,

    },
});
export default function ItemsList({ title, items, ...rest }) {

    /*   
  받을 것 (parameter)
  item 들의 객체 배열
  title ( ex> clothing, shoe 등 )
  
      */
    function renderItem({ item }) {
        // 여기서 Item component import 해서 리턴 
        return (
            <Item uri={item.uri} />
        );
    }


    return (
        <View>
            <Title style={styles.title}>{`${title} (${items.length})`}</Title>
            <FlatList
                horizontal={true}
                data={items}
                renderItem={renderItem}
                {...rest}
                keyExtractor={item => item.id}
            />

        </View>)

}