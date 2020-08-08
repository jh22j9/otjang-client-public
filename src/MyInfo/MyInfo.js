import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { List, Button, Badge } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 170
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: "40%",
        height: "20%",
        justifyContent: "center",
        margin: 10,
        borderRadius: 30
    },
    text: {
        fontWeight: 'bold'
    }
});

function MyInfo({ clothing, shoes, accessories }) {

    const clothingCount = clothing.toJS().length;
    const shoesCount = shoes.toJS().length;
    const accCount = accessories.toJS().length;
    const allItemsCount = clothingCount + shoesCount + accCount;

    const [email, setEmail] = React.useState('');
    const [userToken, setUserToken] = React.useState('');

    React.useEffect(() => {
        const getEmail = async () => {
            let email = await AsyncStorage.getItem('EMAIL');
            let token = await AsyncStorage.getItem('TOKEN')
            setEmail(email);
            setUserToken(token);
        }
        getEmail()
    }, [])

    const navigation = useNavigation();

    const moveToChangePassword = () => {
        navigation.navigate('ChangePassword');
    }

    const handleDeleteAccount = (token) => {
        const url = `http://15.165.197.67:5000/user/delete`;
        const config = { headers: { token: token } };
        axios.delete(url, config)
            .then(res => {
                if (res.status === 200) {
                    Alert.alert("계정을 삭제하시겠습니까?", "모든 데이터를 삭제하고 로그인 화면으로 이동합니다.",
                        [
                            {
                                text: "취소", onPress: () => console.log("Cancle Pressed"),
                                style: "cancle"
                            },
                            {
                                text: "확인", onPress: () => {
                                    AsyncStorage.multiRemove[['TOKEN', 'EMAIL', 'PASSSWORD']] //혹시나 해서 추가함
                                    navigation.popToTop();
                                    navigation.replace('SignIn')
                                }
                            }
                        ],
                        { cancelable: false }
                    );
                }
            }).catch = (e) => {
                console.log(e)
            }
    };

    return (
        <View style={styles.container}>
            <List.Section>

                <List.Accordion
                    title="가입 정보"
                    titleStyle={styles.text}
                    left={props => <List.Icon {...props} icon="account" />}
                    expanded='true'>
                    <List.Item title={`Email : ${email}`} />
                </List.Accordion>

                <List.Accordion
                    title="사용 정보"
                    titleStyle={styles.text}
                    left={props => <List.Icon {...props} icon="format-list-numbered" />}
                    expanded='true'>
                    <List.Item title={`보관함에 총 ${allItemsCount}/100 개의 아이템이 있습니다.`} />
                    <List.Item title={`의류 (${clothingCount})`} />
                    <List.Item title={`신발 (${shoesCount})`} />
                    <List.Item title={`잡화 (${accCount})`} />
                </List.Accordion>

            </List.Section >

            <View style={styles.buttoncontainer}>

                <Button
                    style={styles.button}
                    icon="keyboard-outline"
                    mode="contained"
                    onPress={moveToChangePassword}>
                    비밀번호 변경
                </Button>

                <Button
                    style={styles.button}
                    icon="account-off"
                    mode="contained"
                    onPress={() => handleDeleteAccount(userToken)}
                >
                    회원 탈퇴
                </Button>

            </View>
        </View >
    );
}

export default MyInfo;