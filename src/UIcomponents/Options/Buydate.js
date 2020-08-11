import React from 'react';
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
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

    modalContainer: {


        display: 'flex',
        flexDirection: 'column',
        height: height * 0.35,
        width: width * 1,
        backgroundColor: '#00ff0000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalScrollContainer: {

        display: 'flex',
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#00ff0000',

    },
    yearScroll: {
        backgroundColor: 'white',
        width: '30%',
        paddingLeft: 10
    },

    monthScroll: {
        backgroundColor: 'white',
        width: '15%'
    },
    buttonContainer: {
        backgroundColor: 'white',
        flex: 1,
        width: '45%',
        paddingBottom: 15,

    }

})


function Buydate({ temporaryClothing, ClothesActions, ...rest }) {

    const [year, setYear] = React.useState(currentYear);
    const [month, setMonth] = React.useState(currentMonth);
    const [isVisibleDateModal, setVisibleDateModal] = React.useState(false);


    function setBuyDate() {

        let splitYear = String(year).split('').splice(2).join('');
        var changedMonth;

        if (month < 10) {
            changedMonth = `0${month}`
        }

        else {
            changedMonth = month;
        }
        let buydate = Number(`${splitYear}${changedMonth}`);
        ClothesActions.setTemporaryClothing(temporaryClothing.set('buydate', buydate))
    }

    function showDateModal() {
        setVisibleDateModal(!isVisibleDateModal);
        setBuyDate();
    }


    function renderBuyDateModal() {
        return (

            <Portal >
                <Modal
                    visible={isVisibleDateModal} onDismiss={showDateModal}>

                    <View style={styles.modalContainer}>

                        <View style={styles.modalScrollContainer}>

                            <View style={styles.yearScroll} >
                                <ScrollPicker
                                    currentValue={year}
                                    extraData={year}
                                    list={yearArray}
                                    onItemPress={setYear}
                                    labelColor="blue"
                                    separatorColor="none"
                                    selectedColor="red"
                                />


                            </View>


                            <View style={styles.monthScroll}>
                                <ScrollPicker
                                    currentValue={month}
                                    extraData={month}
                                    list={monthArray}
                                    onItemPress={setMonth}
                                    labelColor="blue"
                                    separatorColor="none"
                                    selectedColor="red"
                                />

                            </View>

                        </View>

                        <View style={styles.buttonContainer}>
                            <Button onPress={showDateModal}>확인</Button>
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
