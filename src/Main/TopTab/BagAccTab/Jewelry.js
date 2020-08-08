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

function Jewelry({ navigation, accessories, ClothesActions }) {

  let jsAcc = accessories.toJS()
  let jewelry = fromJS(jsAcc.filter(item => item.type.jewelry === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='Jewelry' items={jewelry}
          ClothesActions={ClothesActions}
          navigation={navigation} numColumns={3} horizontal={false} />
      </View>
    </View>
  );
}

export default Jewelry;