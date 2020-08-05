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

function Boots({ navigation, shoes, ClothesActions }) {

  let jsShoes = shoes.toJS()
  let boots = fromJS(jsShoes.filter(item => item.type.boots === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='Boots' items={boots}
          ClothesActions={ClothesActions}
          navigation={navigation} />
      </View>
    </View>
  );
}

export default Boots;