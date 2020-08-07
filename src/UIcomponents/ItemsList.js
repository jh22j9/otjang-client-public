import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import { Title } from 'react-native-paper';
import Item from './Item'
import { Map, List, fromJS } from 'immutable';
const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '700'
    },
});

export default function ItemsList({ title, items, ClothesActions, ...rest }) {

    function renderItem({ item, index }) {

        return (
            <Item item={fromJS(item)} index={index}
                ClothesActions={ClothesActions} />
        );
    };

    return (
        <View>
            {/* <Text style={styles.title}>{`${title} (${items.toJS().length})`}</Text> */}
            {items.toJS().length === 0 ?
                <Text>등록된 아이템이 없습니다.</Text>
                :
                <Text style={styles.title}>{`(${items.toJS().length})`}</Text>}
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