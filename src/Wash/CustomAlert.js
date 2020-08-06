import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native'

const styles = StyleSheet.create({
  container:{

    flex:0.5,
    flexDirection: "column",
    width:"80%",
    justifyContent: "center",
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: "center",
    backgroundColor: "gray",
    borderColor: "#BDBDBD",
    borderRadius: 10,
    borderWidth: 2,
    padding: 4,


  },
  photo:{
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#BDBDBD",
    borderWidth: 2,
  }
})

export default class CustomAlert extends Component {
  render() {
    return (
      <View style={{...styles.container, backgroundColor: '(0,0,0,0.5)'}}>
        <Image style={styles.photo} source={require('./WashImages/1.jpg')} />
        <Text style={{fontSize:20}}>테스트용</Text>
        <Button
  style={{fontSize: 20, color: 'green'}}
  styleDisabled={{color: 'red'}}
  // onPress={()=>}
  title="Press Me"
>
  Press Me
</Button>
      </View>
    )
  }
}