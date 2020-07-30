import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Button, Badge } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

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

    const [email, setEmail] = React.useState('')

    React.useEffect(() => {
        const getEmail = async () => {
            const email = await AsyncStorage.getItem('EMAIL');
            console.log('email-----', email);
            setEmail(email);
        }
        getEmail()
    }, [])

    const MyInfoNavigation = useNavigation();

    const moveToChangePassword = () => {
        MyInfoNavigation.navigate('ChangePassword');
    }

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
                    <List.Item title={`옷장 (${clothingCount})`} />
                    <List.Item title={`신발장 (${shoesCount})`} />
                    <List.Item title={`장신구함 (${accCount})`} />
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
                // onPress={}
                >
                    회원 탈퇴
                </Button>

            </View>
        </View >
    );
}

export default MyInfo;