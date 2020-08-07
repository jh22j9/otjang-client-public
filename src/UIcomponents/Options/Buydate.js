import React from 'react';
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { Button,Modal, Portal, TextInput } from 'react-native-paper';
import { ScrollPicker } from 'react-native-value-picker';
const { width, height } = Dimensions.get('screen');
const yearArray = [];
const monthArray = [];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

for (let i = currentYear - 10; i <= currentYear; i++) {

    let year = { value: i, label: `${i}년` }
    yearArray.push(year);
}

for (let i = 1; i <= 12; i++) {

        let month = { value: i, label: `${i}월` }
        monthArray.push(month);
}

const styles = StyleSheet.create({

    buydateContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    inputBuydate: {
        display: 'flex',
        flexDirection: 'row',

    }
    ,
    inputBuydateYear: {

        marginLeft: 10

    },
    inputBuydateMonth: {

        marginLeft: 20
    },
    inputBuydateText: {
        paddingLeft: 13,
        marginBottom: 10
    },

   modalContainer:{


    display:'flex',
    flexDirection:'column',
    height: height * 0.35,
    width: width * 1,
    backgroundColor: '#00ff0000',
    justifyContent:'center',
    alignItems:'center'
   },

    modalScrollContainer: {

        display:'flex',
        flex:9,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#00ff0000',

    },
    yearScroll:{
        backgroundColor: 'white',
        width: '30%',
        paddingLeft:10
    },

    monthScroll:{
        backgroundColor: 'white',
        width: '15%'
    },
    buttonContainer:{
        backgroundColor: 'white',
        flex:1,
        width: '45%',
        paddingBottom:15,
       
    }

})
/* 
THINK 

날짜 부분을 터치했을 때 MODAL 이 open 

model 에서 연도를 스크롤 하면 상태에서 반영, 선택하면 선택한 연도가 반영 

월도 똑같이 적용 

현재는 연,월 개별 선택으로 구성됨 


*/


function Buydate({ temporaryClothing,ClothesActions, ...rest }) {

    const [year, setYear] = React.useState(currentYear);
    const [month, setMonth] = React.useState(currentMonth);
    const [isVisibleDateModal,setVisibleDateModal] = React.useState(false);


    function setBuyDate ()

    {
              
        let splitYear = String(year).split('').splice(2).join('');
        var changedMonth;

        if(month<10){
            changedMonth=`0${month}`
        }

        else {
            changedMonth = month;
        }
        let buydate=Number(`${splitYear}${changedMonth}`);
        ClothesActions.setTemporaryClothing(temporaryClothing.set('buydate',buydate))
    }

    function showDateModal()

    {
        setVisibleDateModal(!isVisibleDateModal);
        setBuyDate();
    }
  
    /* 
    THINK 

    화면배치 

    MODAL 이 가운데 정렬, 

    스크롤은 row 로 설정 

    스크롤컨테이너, 버튼 은 column 
    

    BUG 한 VIEW 안에는 한개의 SCROLL 만 넣을 수 있음 
    */

    function renderBuyDateModal() {
        return (

            <Portal >
                <Modal
                    visible={isVisibleDateModal} onDismiss={showDateModal}>

                    <View style={styles.modalContainer}>
                   
                   <View style={styles.modalScrollContainer}>
                   
                   <View style={styles.yearScroll} >
                            <ScrollPicker
                                // We need to tell the picker the current picked value
                                currentValue={year}
                                // The picker is a pure component so we need to tell it
                                // what data it needs to subscribe to, otherwise it won't
                                // re-render
                                extraData={year}
                                // The array of objects which makes up the list
                                list={yearArray}
                                // Callback function to update the picked value
                                onItemPress={setYear}
                                // Changes the text color in the list
                                labelColor="blue"
                                // Changes color of the row separator in the list
                                separatorColor="none"
                                // Changes color of the text of the picked item in the list
                                selectedColor="red"
                            />
                     

                        </View>


                        <View style={styles.monthScroll}>
                               <ScrollPicker
                                // We need to tell the picker the current picked value
                                currentValue={month}
                                // The picker is a pure component so we need to tell it
                                // what data it needs to subscribe to, otherwise it won't
                                // re-render
                                extraData={month}
                                // The array of objects which makes up the list
                                list={monthArray}
                                // Callback function to update the picked value
                                onItemPress={setMonth}
                                // Changes the text color in the list
                                labelColor="blue"
                                // Changes color of the row separator in the list
                                separatorColor="none"
                                // Changes color of the text of the picked item in the list
                                selectedColor="red"
                            />
                           
                        </View>

                   </View>
                        
                        <View style={styles.buttonContainer}>
                        <Button  onPress={showDateModal}>확인</Button>
                        </View>
                       
                    </View>


                </Modal>
            </Portal>)


    }


    return (

        <View style={styles.buydateContainer}>

            <Text style={styles.inputBuydateText}>구매 일자</Text>
            <View style={styles.inputBuydate}>

                <Pressable style={styles.inputBuydateYear}
                    onPress={showDateModal}
                >
                    <TextInput
                        editable={false}
                        placeholder={`${year}년 ${month}월`}
                        textAlign='center'
                    >
                    </TextInput>
                </Pressable>
                {renderBuyDateModal()}
            </View>
        </View>
    )

}




export default Buydate;


/* 
THINK:

> 화면구성 

<Text/> 구매일 

<Input/>2020년  <Input/> 빈칸 

input 창은 초기에 disable 상태 

년도 input 창 터치하면 년도 modal 이 띄워짐 모달 창 안에서 스크롤 하면

년도 input 상태 변경, modal 창 닫으면 그대로 반영 

월도 현재월을 기본값으로 한 disable 상태 

터치했을 때 모달창 띄우고 확인 누르면 input 창에 반영 


*/
    /* 
    THINK: 

    /* VirtualizedLists should never be nested inside plain ScrollViews with the same orientation */
    /*BUG: 스크롤 뷰 안에 스크롤 뷰 를 넣을 수 없음 
    */
    /* THINK: 
    스크롤 뷰 안에 스크롤 되는 요소를 넣을 수 없다. 

    년도 input 창 월 input 창을 넣는다. 

    년도 input 창 클릭 하면 modal 창 띄운다. 

    TEST: 모달창안에 스크롤 요소를 넣는 것은 가능한지 실험 => 가능 

    
    */