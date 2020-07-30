import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { fromJS } from 'immutable';
import AsyncStorage from '@react-native-community/async-storage'

function MyInfo(props) {

    const [expandedFirst, setExpandedFirst] = React.useState(true);
    const [expandedSecond, setExpandedSecond] = React.useState(true);
    const handlePressFirst = () => setExpandedFirst(!expandedFirst);
    const handlePressSecond = () => setExpandedSecond(!expandedSecond);

    return (
        <List.Section>
            <List.Accordion
                title="가입 정보"
                left={props => <List.Icon {...props} icon="account" />}
                expanded={expandedFirst}
                onPress={handlePressFirst}>
                <List.Item title="이메일" />
                <List.Item title="가입일?" />
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
    );
}
export default MyInfo;