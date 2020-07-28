import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import ItemsList from '../../../UIcomponents/ItemsList'
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

function Outer({ navigation, clothing, ClothesActions }) {

  let jsClothing = clothing.toJS()
  let outer = fromJS(jsClothing.filter(item => item.type.outer === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='Outer' items={outer}
          ClothesActions={ClothesActions}
          navigation={navigation} />
      </View>
    </View>
  );
}

export default Outer;