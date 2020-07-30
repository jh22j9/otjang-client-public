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

    const [expandedFirst, setExpandedFirst] = React.useState(true);
    const [expandedSecond, setExpandedSecond] = React.useState(true);
    const handlePressFirst = () => setExpandedFirst(!expandedFirst);
    const handlePressSecond = () => setExpandedSecond(!expandedSecond);

    const MyInfoNavigation = useNavigation();

    const moveToChangePassword = () => {
        MyInfoNavigation.navigate('ChangePassword');
    }

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Accordion
                    title="가입 정보"
                    left={props => <List.Icon {...props} icon="account" />}
                    expanded={expandedFirst}
                    onPress={handlePressFirst}>
                    <List.Item title="이메일" />
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