import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../UIcomponents/ItemsList'
import { fromJS } from 'immutable';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';
const { width, height } = Dimensions.get('screen');

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

function OtherShoes({ navigation, shoes, ClothesActions }) {

  let jsShoes = shoes.toJS()
  let other = fromJS(jsShoes.filter(item => item.type.other === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='Other' items={other}
          ClothesActions={ClothesActions}
          navigation={navigation} />
      </View>
    </View>
  );
}

export default OtherShoes;