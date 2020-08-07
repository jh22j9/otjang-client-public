import React from 'react';
import { View, StyleSheet, Dimensions,Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Map, List } from 'immutable';
import {Chip} from 'react-native-paper';

const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height: height * 0.1,
        
    },
    selectedContainer: {
        backgroundColor: '#e8dad5',
        padding: 10
    },
    notSelectedContainer: {
        padding: 10,

    },

})


export default function CategoryList({ temporaryClothing, ClothesActions,...rest }) {

    function selectClothing() {
        // state 변경 
        const clothingObject = { categoryValue: 'clothing', clothing: true, shoes: false, accessories: false }
        ClothesActions.setTemporaryClothing(temporaryClothing.set('category',Map(clothingObject)));
    }

    function selectShoe() {
        const shoesObject = { categoryValue: 'shoes', clothing: false, shoes: true, accessories: false }
        ClothesActions.setTemporaryClothing(temporaryClothing.set('category',Map(shoesObject)));
    }

    function selectAccessories() {
        const accessoriesObject = { categoryValue: 'accessories', clothing: false, shoes: false, accessories: true }
        ClothesActions.setTemporaryClothing(temporaryClothing.set('category',Map(accessoriesObject)));
    }


    return (
        <View style={styles.container} {...rest} >

            <Chip 
                onPress={selectClothing}
                icon={() => (<FontAwesome5Icons name="tshirt"  size={20} />)}
                textStyle={{ fontSize: 20 }}
                selected={temporaryClothing.get('category').get('clothing')}
                            
            >의류
            </Chip>

            <Chip 
                onPress={selectShoe}
                icon={() => ( <MaterialCommunityIcons name="shoe-formal" size={25} />)}
                textStyle={{ fontSize: 20 }}
                selected={temporaryClothing.get('category').get('shoes')}
                            
            >신발
            </Chip>

            <Chip 
                onPress={selectAccessories}
                icon={() => (<MaterialCommunityIcons name="hat-fedora" size={22} />)}
                textStyle={{ fontSize: 20 }}
                selected={temporaryClothing.get('category').get('accessories')}
                            
            >잡화
            </Chip>
        </View>
    )
}


   /* 
    THINK: 
    클릭전 - 아이콘은 검정색, 배경 흰색 
    클릭후 - 아이콘은 흰색, 배경 아무색 

    터치했을 때 상태를 변경 ex> const [isBottomTouched,setBottom] = React.useState(false); 
    특정화면에서만 쓰이는 state 이기 때문에 redux 로 관리할 필요는 없다고 생각함

    카테고리가 많아질 수 있으므로 FlatList 적용 

    구분옵션
    <FlatList/> 

    FlatList 안에 아이콘이 들어감 

    아이콘을 클릭하면 배경색이 나오며 아이콘의 색이 흰색으로 변경 

    THINK:
    
    1> 하나만 선택할 수 있도록 해야함 

    하나를 선택한 후 다른 것을 선택했을 때 기존 선택한 것이 취소되어야 함 

    SOLVED: state 를 객체지정하여 top,bottom,socks 의 선택여부와 typeValue 를 한꺼번에 관리하였다.
    이를 통해 특정 type 선택 시 나머지는 선택이 되지 않도록 하였다. 

    */