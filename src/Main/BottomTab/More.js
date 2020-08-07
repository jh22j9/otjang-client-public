import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Portal, Modal, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: "65%",
        height: "20%",
        justifyContent: "center",
        margin: 20,
        borderRadius: 30
    },
    devInfo: {
        marginTop: 45
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 20,
        width: "70%",
        height: "70%",
        paddingVertical: 50,
        paddingHorizontal: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    badgeContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    badge: {
        margin: 5
    },
    badge1: {
        backgroundColor: "#abfcd6"
    },
    badge2: {
        backgroundColor: "#1c016d"
    },
    badge3: {
        backgroundColor: "#95d0f9"
    },
    badge4: {
        backgroundColor: "#d876e3"
    },
    badge5: {
        backgroundColor: "#7057ff"
    },
    textContainer: {
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20
    },
    content: {
        lineHeight: 25
    }
})

function More() {

    const navigation = useNavigation();

    function moveToStatistics() {
        navigation.navigate('StatisticsContainer');
    }

    function moveToMyInfo() {
        navigation.navigate('MyInfoContainer');
    }

    function moveToWashing() {
        navigation.navigate('HowToWash'); //정적인 데이터만 담을거라서 container가 필요하진 않은데... 음... 이건 좀 물어봐야 할 것 같아..!
    }

    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                icon="account"
                mode="contained"
                onPress={moveToMyInfo}>
                내 정보
                </Button>
            <Button
                style={styles.button}
                icon="graph"
                mode="contained"
                onPress={moveToStatistics}>
                통계
                </Button>
            <Button
                style={styles.button}
                icon="washing-machine"
                mode="contained"
                onPress={moveToWashing}>
                세탁표시기호
                </Button>
            <Button
                style={styles.devInfo}
                icon="hanger"
                r>
                개발자 정보
                </Button>
            <View style={styles.modalContainer} >
                <Portal>
                    <Modal

                    >
                        <View style={styles.modal}>

                            <View style={styles.badgeContainer}>
                                <Badge
                                    style={[styles.badge1, styles.badge]}
                                    size={25}>React Native</Badge>
                                <Badge
                                    style={[styles.badge2, styles.badge]}
                                    size={25}>Redux</Badge>
                                <Badge
                                    style={[styles.badge3, styles.badge]}
                                    size={25}>Node.js</Badge>
                                <Badge
                                    style={[styles.badge4, styles.badge]}
                                    size={25}>Express</Badge>
                                <Badge
                                    style={[styles.badge5, styles.badge]}
                                    size={25}>MySQL</Badge>
                                <Badge
                                    style={[styles.badge6, styles.badge]}
                                    size={25}>Sequelize</Badge>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>github</Text>
                                <View style={styles.content}>
                                    <Text>@ goodlana </Text>
                                    <Text>@ gyeongwon1275 </Text>
                                    <Text>@ gyu716625 </Text>
                                    <Text>@ lllgresi </Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Portal>
            </View>
        </View>
    );
}

export default More;