import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { IconButton, Colors, Button, Card, Chip } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import Gallery from '../UIcomponents/Gallery'
import FormButton from '../UIcomponents/FormButton'
import TypeList from '../UIcomponents/TypeList'
import Season from '../UIcomponents/Season'


const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    optionsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    saveButtonContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },



})


function AddItems({ index = 0, user, clothes, onCreateClothes, onSetClothes }) {

    /*  
    BUG: 권한 문제 해결, but 이미지를 출력하지 못하고 있음 
    uri 로 출력하지 못해 내부파일경로로 설정해보았지만 출력하지 못함 
    결국 Image 컴포넌트가 안되서 react-native-paper 의 Card.cover 를 사용함 

    SOLVED: Image 태그 사용시 크기를 지정하지 않아서 이미지가 출력이 되지 않았음을 확인하였다. 
    이후 styles 에 크기를 지정하여 해결하였다.  
     */

    /* 
    THINK: 
    사진선택시 상태변경, type 선택시 상태변경, 계절 선택시 상태변경 , 옵션선택시 상태변경

    저장 버튼 누르면 현재 의류의 상태 객체를 서버에 보내고 id 를 받아서 저장 

    */

    return (
        <View style={styles.container}>
            <Gallery index={index} clothes={clothes.get(index)} onSetClothes={onSetClothes} />
            <TypeList index={index} clothes={clothes.get(index)} onSetClothes={onSetClothes} />
            <Season index={index} clothes={clothes.get(index)} onSetClothes={onSetClothes} />
            <View style={styles.optionsContainer}>
                <Text >구분옵션</Text>
            </View>
            <View style={styles.saveButtonContainer}>
                <FormButton title='저장' modeValue='contained' />
            </View>
        </View>
    );
}

export default AddItems;