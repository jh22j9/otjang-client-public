import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Button } from 'react-native-paper';
import { fromJS } from 'immutable';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        width: "40%",
        height: "20%",
        justifyContent: "center",
        margin: 10,
        borderRadius: 30
    }
})

function MyInfo(props) {

    const [email, setEmail] = React.useState('')

    // Warning: An effect function must not return anything besides a function, which is used for clean-up. 를 해결하려면 promise를 반환하는 함수를 useEffect 내부에서 선언해야 한다. 
    React.useEffect(() => {
        const getEmail = async () => {
            const email = await AsyncStorage.getItem('EMAIL');
            console.log('email-----', email);
            setEmail(email);
        }
        getEmail()
    }, [])

    const [expandedFirst, setExpandedFirst] = React.useState(true);
    const [expandedSecond, setExpandedSecond] = React.useState(true);
    const handlePressFirst = () => setExpandedFirst(!expandedFirst);
    const handlePressSecond = () => setExpandedSecond(!expandedSecond);

    const MyInfoNavigation = useNavigation();

    const moveToChangePassword = () => {
        MyInfoNavigation.navigate('ChangePassword');
    }


    // <Title style={styles.title}>{`${title} (${items.toJS().length})`}</Title>

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Accordion
                    title="가입 정보"
                    left={props => <List.Icon {...props} icon="account" />}
                    expanded={expandedFirst}
                    onPress={handlePressFirst}>
                    <List.Item title={`Email : ${email}`} />
                </List.Accordion>
                <List.Accordion
                    title="사용 정보"
                    left={props => <List.Icon {...props} icon=" format-list-numbered" />}
                    expanded={expandedSecond}
                    onPress={handlePressSecond}>
                    <List.Item title="등록한 아이템 수는  개 입니다." />
                    <List.Item title="남은 아이템 수는  개 입니다." />
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