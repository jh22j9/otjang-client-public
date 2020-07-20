import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { IconButton, Colors, Button, Card, Chip } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import Gallery from '../UIcomponents/Gallery'
import FormButton from '../UIcomponents/FormButton'
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    typeContainer: {
        display: 'flex',
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    seasonContainer: {
        display: 'flex',
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
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




function AddItems() {

    /*  
    BUG: 권한 문제 해결, but 이미지를 출력하지 못하고 있음 
    uri 로 출력하지 못해 내부파일경로로 설정해보았지만 출력하지 못함 
    결국 Image 컴포넌트가 안되서 react-native-paper 의 Card.cover 를 사용함 

    SOLVED: Image 태그 사용시 크기를 지정하지 않아서 이미지가 출력이 되지 않았음을 확인하였다. 
    이후 styles 에 크기를 지정하여 해결하였다.  
     */
    const [category, setCategory] = React.useState('')

    const selectCategory = (item) => {
        setCategory(item);
    }
    /* 
    THINK: 
    클릭전 - 아이콘은 검정색, 배경 흰색 
    클릭후 - 아이콘은 흰색, 배경 아무색 

    터치했을 때 상태를 변경 ex> const [isBottomTouched,setBottom] = React.useState(false); 
    특정화면에서만 쓰이는 state 이기 때문에 redux 로 관리할 필요는 없다고 생각함

    카테고리가 많아질 수 있으므로 FlatList 적용 

    */

    const [top, setTop] = React.useState(false);
    const [bottom, setBottom] = React.useState(false);

    function touchTop() {

        setTop(!top);
    }

    function touchBottom() {

        setBottom(!bottom);
    }

    function renderCategory() {


    }

    console.log(category)
    return (
        <View style={styles.container}>
            <Gallery />
            <View style={styles.typeContainer}>
                <Card><Card.Content>
                    <FontAwesome5Icons name="tshirt" size={20} />
                </Card.Content></Card>
                <Text>구분</Text>
            </View>
            <View style={styles.seasonContainer}>
                <Text >계절</Text>
            </View>
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