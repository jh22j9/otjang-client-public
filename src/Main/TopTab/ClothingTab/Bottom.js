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

function Bottom({ navigation, clothing, ClothesActions }) {

  let jsClothing = clothing.toJS()
  let bottom = fromJS(jsClothing.filter(item => item.type.bottom === true))

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ItemsList title='하의' items={bottom}
          ClothesActions={ClothesActions}
          navigation={navigation} numColumns={3} horizontal={false} />
      </View>
    </View>
  );
}

export default Bottom;