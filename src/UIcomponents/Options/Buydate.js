import React from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Button, List, Modal, Portal, TextInput } from 'react-native-paper';
import { ScrollPicker } from 'react-native-value-picker';
import BottomSheet from 'reanimated-bottom-sheet'
import { Map } from 'immutable';
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

        marginBottom: 10
    },

    PortalContainer: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6060dd'

    },

    modalScrollContainer: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    modalScroll: {
        backgroundColor: '#fff',
        height: height * 0.4,
        width: width * 0.5,

    }




})



function Buydate({ temporaryClothing, onSetTemporaryClothing, ...rest }) {



    const [isVisibleYear, setYearVisible] = React.useState(false);
    const [isVisibleMonth, setMonthVisible] = React.useState(false);

    const [year, setYear] = React.useState(currentYear);
    const [month, setMonth] = React.useState(currentMonth);

    function showYear() {

        setYearVisible(!isVisibleYear);
        let splitYear = String(year).split('').splice(2).join('');
        onSetTemporaryClothing(temporaryClothing.set('buydate',`${splitYear}${month}`))
        
    }
    function showMonth() {
        setMonthVisible(!isVisibleMonth);
        let splitYear = String(year).split('').splice(2).join('');
        var changedMonth;

        if(month<10){
            changedMonth=`0${month}`
        }

        else {
            changedMonth = month;
        }
        
        onSetTemporaryClothing(temporaryClothing.set('buydate',`${splitYear}${changedMonth}`))
    }
    

    function chooseMonthModal() {
        return (

            <Portal >
                <Modal
                    visible={isVisibleMonth} onDismiss={showMonth}>

                    <View style={styles.modalScrollContainer}>
                        <View style={styles.modalScroll}>
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
                            <Button onPress={showMonth}>확인</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>)


    }
    function chooseYearModal() {

        return (

            <Portal >

                <Modal
                    visible={isVisibleYear} onDismiss={showYear}>

                    <View style={styles.modalScrollContainer}>
                        <View style={styles.modalScroll}>
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
                            <Button onPress={showYear}>확인</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>)
    }



    return (

        <View style={styles.buydateContainer}>

            <Text style={styles.inputBuydateText}>구매일자</Text>
            <View style={styles.inputBuydate}>

                <Pressable style={styles.inputBuydateYear}
                    onPress={showYear}
                >
                    <TextInput
                        editable={false}
                        placeholder={`${year}년`}
                        textAlign='center'
                    >
                    </TextInput>
                </Pressable>

                <Pressable style={styles.inputBuydateYear}
                    onPress={showMonth}
                >
                    <TextInput style={styles.inputBuydateMonth}
                        editable={false}
                        placeholder={`${month}월`}
                        textAlign='center'
                    >
                    </TextInput>

                </Pressable>
                {chooseYearModal()}
                {chooseMonthModal()}
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