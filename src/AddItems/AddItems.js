import * as React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
    },
    optionsContainer: {

    },


    // THINK : 전체를 12 로 하여 버튼 1 OPTION 선택 11 로 FLEX 지정 

})


function AddItems({ navigation, temporaryClothing, ClothesActions, }) {

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
    function addItemInClient() {
        ClothesActions.createClothes(temporaryClothing);
    }

    async function addItemInServer() {

        // 서버연결
        let token = await AsyncStorage.getItem('TOKEN');
        let sendingClothingToServer = { token: token, item: temporaryClothing }
        ClothesActions.createClothesToServer(sendingClothingToServer);
    }

    function saveClothes() {

        // addItemInClient()

        // 서버연결시 addItemInServer() 주석 해제, addItemInClient() 주석처리
        addItemInServer()
        navigation.goBack();

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
                <Gallery temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <CategoryList temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <TypeList temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <Season temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
                <ExtraOptions temporaryClothing={temporaryClothing} ClothesActions={ClothesActions} />
            </ScrollView>
            <View style={styles.saveButtonContainer}>
                <FormButton title='저장' modeValue='contained' onPress={saveClothes} />
            </View>
        </View>
    );
}

export default AddItems;