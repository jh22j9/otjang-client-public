import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, Alert, Modal } from 'react-native';
import { List, Button, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { washlist } from './WashList' // 여기서 {}의 의미
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


//삭제하기
//import { Root, Popup } from 'popup-ui'
//import Modal from 'react-native-modal'
//import  Dialog, { DialogContent } from 'react-native-popup-dialog';

const styles = StyleSheet.create({
  container: {
    flex:1,
    // paddingBottom: 170,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 20
    
  },
  listItem: {
    margin:6,
    padding:6,
    backgroundColor: "#fff",
    width: "80%",
    flex:1,
    flexDirection:"row",
  },
  paragraph: {
    margin: 24,
    fontSize: 18
  }
})

function Item ({ item }) {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity 
      onPress={() => {Alert.alert(item.description)}
        }>
          <Image  
            source={item.photo}
            style={{width:65, height:65}}
          />
      </TouchableOpacity>
    </View>
  )
}

const numColumns=4
class HowToWash extends React.Component {
  state = {data: washlist}


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={ item => item.id } // item.item
          numColumns={numColumns}
        />
      </View>
    )
  }
} 
export default HowToWash
