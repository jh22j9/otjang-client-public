import React, { useRef } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { washlist } from './WashList' // 여기서 {}의 의미
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 170,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 20

  },
  listItem: {
    margin: 6,
    padding: 6,
    backgroundColor: "#fff",
    width: "80%",
    flex: 1,
    flexDirection: "row",
  },
  paragraph: {
    margin: 24,
    fontSize: 18
  }
})

function Item({ item }) {
  const refRBSheet = useRef();
  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => { refRBSheet.current.open() }
        }>
        <Image
          source={item.photo}
          style={{ width: 65, height: 65 }}>
        </Image>
        <RBSheet
          ref={refRBSheet}
          customStyles={{
            container: {
              justifyContent: "center", // 세로 중앙
              alignItems: "center" // 가로 중앙
            }
          }}
        >
          <Image source={item.photo} style={{ marginBottom: 15 }} />
          <Text style={{ margin: 10, fontSize: 18 }}>{item.description}</Text>
        </RBSheet>
      </TouchableOpacity>
    </View>
  )
}

const numColumns = 4
class HowToWash extends React.Component {
  state = { data: washlist }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id} // item.item
          numColumns={numColumns}
        />
      </View>
    )
  }
}
export default HowToWash
