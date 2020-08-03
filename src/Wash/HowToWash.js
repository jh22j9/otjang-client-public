import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { List, Button, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { washlist } from './WashList' // 여기서 {}의 의미

const styles = StyleSheet.create({
  container: {
    flex:1,
    // paddingBottom: 170,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  listItem: {
    margin:10,
    padding:10,
    backgroundColor: "#fff",
    width: "80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
  }
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18
  // }
})

function Item ({ item }) {
  return (
    <View style={styles.listItem}>
      <Image 
        source={item.photo}
        style={{width:60, height:60, alignSelf:"center"}}
      />
      <View style={{marginLeft:35}}>
        <Text style={{fontSize:17}}>{item.description}</Text>
      </View>
    </View>
  )
}

class HowToWash extends React.Component {
  state={
    data: washlist
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={ item => item.id } // item.item
        />
      </View>
    )
  }
} 
export default HowToWash