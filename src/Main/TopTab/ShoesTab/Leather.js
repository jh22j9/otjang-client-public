import React from 'react';
import { StyleSheet, View, } from 'react-native';
import ItemsList from '../../../UIcomponents/ItemsList'
import { fromJS } from 'immutable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "flex-start",
    padding: 10
    // height: '100%'
  },
});

function Leather({ navigation, shoes, ClothesActions }) {

  let jsShoes = shoes.toJS()
  let leather = fromJS(jsShoes.filter(item => item.type.leather === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='구두' items={leather}
          ClothesActions={ClothesActions}
          navigation={navigation} numColumns={3} horizontal={false} />
      </View>
    </View>
  );
}

export default Leather;