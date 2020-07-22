import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { IconButton, Colors, Button, Card, Chip, List } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import Gallery from '../UIcomponents/Gallery'
import FormButton from '../UIcomponents/FormButton'
import CategoryList from '../UIcomponents/CategoryList';
import TypeList from '../UIcomponents/TypeList'
import Season from '../UIcomponents/Season'
import ExtraOptions from '../UIcomponents/ExtraOptions'

const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
        // backgroundColor: 'red'
    },
    extraOptions: {
        display: 'flex',
        borderColor: 'black',
        borderWidth: 2,
    },
    saveButtonContainer: {
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        // backgroundColor: 'blue'
    },
    optionsContainer: {

    },


    // THINK : 전체를 12 로 하여 버튼 1 OPTION 선택 11 로 FLEX 지정 

})


function AddItems({ navigation, index = 0, user, temporaryClothing, onCreateClothes, onSetClothes, onSetTemporaryClothing }) {

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
    const [expanded, setExpanded] = React.useState(false);


    function saveClothes() {

        var id = temporaryClothing.get('item_id');

        if (id) {

            onSetClothes({ index: index, temporaryClothing })

            /* TODO: 
            
            SET_CLOTHES 

            서버로 데이터 보냄
            
            전부 완료되면 해당 화면 stack 에서 제거 

            THINK: navigation 객체 어떻게 받음? 
            */

            navigation.goBack();
        }

        else {

            onCreateClothes(temporaryClothing);

            /*
            TODO: 

             > POST temporaryClothing TO SERVER
             
             > 받은 응답으로 ID UPDATE 
             

            THINK: navigation 객체 어떻게 받음? 

             전부 완료되면 해당 화면 stack 에서 제거 
             */

            navigation.goBack();
        }


        /* THINK: 

        임시의류 id 가 없으면 새로 추가 
        있으면 수정 
        
        저장하기 버튼을 누르면 서버로 데이터를 보낸다. 
          서버에서 itemId 가 오면 SET_CLOthes 로 id 를 반영한다. 
  
        
        */

    }
    return (
        /* THINK: 전체를 스크롤뷰 로 감싸야 함
            저장버튼의 위치를 고정시키기 위해 데이터 선택 란은 전체 Scroll View 

        */

        /* 
        BUG: 기존 FLEX 로 설정해둔 VIEW 를 SCROLLVIEW 로 변경하자 FLEX 속성이 작동하지 않음 


        */
        <View style={styles.container}>

            <ScrollView >
                <Gallery temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
                <CategoryList temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
                <TypeList temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
                <Season temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
                <ExtraOptions temporaryClothing={temporaryClothing} onSetTemporaryClothing={onSetTemporaryClothing} />
            </ScrollView>
            <View style={styles.saveButtonContainer}>
                <FormButton title='저장' modeValue='contained' onPress={saveClothes} />
            </View>
        </View>
    );
}

export default AddItems;