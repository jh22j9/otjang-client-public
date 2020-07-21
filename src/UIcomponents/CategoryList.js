import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Map } from 'immutable';


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    selectedContainer: {
        backgroundColor: '#e8dad5',
        padding: 10
    },
    notSelectedContainer: {
        padding: 10,

    },
  

})


export default function CategoryList({ ...rest }) {


    const [category, setCategory] = React.useState(Map({ typeValue: null, top: false, bottom: false, socks: false }));

    function touchTop() {
        setCategory(Map({ typeValue: 'top', top: true, bottom: false, socks: false }))
    }

    function touchBottom() {
        setCategory(Map({ typeValue: 'bottom', top: false, bottom: true, socks: false }))
    }

    function touchsocks() {
        setCategory(Map({ typeValue: 'socks', top: false, bottom: false, socks: true }))
    }


    return (
        <View style={styles.container} {...rest} >
            <ScrollView horizontal={true} >
                <TouchableOpacity onPress={touchTop}>
                    {category.get('top') ? <View style={styles.selectedContainer}>
                        <FontAwesome5Icons name="tshirt" size={50} />
                    </View> : <View style={styles.notSelectedContainer}>
                            <FontAwesome5Icons name="tshirt" size={50} />
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={touchsocks}>
                    {category.get('socks') ? <View style={styles.selectedContainer}>
                        <FontAwesome5Icons name="socks" size={50} />
                    </View> : <View style={styles.notSelectedContainer}>
                            <FontAwesome5Icons name="socks" size={50} />
                        </View>
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={touchBottom}>
                    {category.get('bottom') ? <View style={styles.selectedContainer}>
                        <FontAwesome5Icons name="hiking" size={50} />
                    </View> : <View style={styles.notSelectedContainer}>
                            <FontAwesome5Icons name="hiking" size={50} />
                        </View>
                    }
                </TouchableOpacity>
                {/*  */}

            </ScrollView>
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