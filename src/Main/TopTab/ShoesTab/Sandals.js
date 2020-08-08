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

function Sandals({ navigation, shoes, ClothesActions }) {

  let jsShoes = shoes.toJS()
  let sandals = fromJS(jsShoes.filter(item => item.type.sandals === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='Sandals' items={sandals}
          ClothesActions={ClothesActions}
          navigation={navigation} numColumns={3} horizontal={false} />
      </View>
    </View>
  );
}

export default Sandals;