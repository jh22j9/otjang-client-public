import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Button, Portal, Modal, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    button: {
        width: 190,
        height: 80,
        justifyContent: "center",
        margin: 20,
        borderRadius: 30,
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 20,
        width: 290,
        height: 350,
        paddingVertical: 40,
        paddingHorizontal: 30
    },
    badgeContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 2
    },
    badge: {
        margin: 5,
        marginBottom: 10
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
        alignItems: 'center',
    },
    title: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20
    },
    content: {
        marginBottom: 4
    }
})
function More() {
    const navigation = useNavigation();
    function moveToStatistics() {
        navigation.navigate('StatisticsContainer');
    };
    function moveToMyInfo() {
        navigation.navigate('MyInfoContainer');
    };
    function moveToWashing() {
        navigation.navigate('HowToWash');
    };
    const [isVisibleModal, setModal] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
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
                    onPress={() => { setModal(true) }}>
                    개발자 정보
                </Button>
            </View>
            <Portal onPress={() => { setModal(false) }}>
                <Modal
                    visible={isVisibleModal}
                    onDismiss={() => { setModal(false) }}>
                    <Pressable style={styles.modalContainer}
                        onPress={() => { setModal(false) }} >
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
                                    <Text style={styles.content}>@ goodlana </Text>
                                    <Text style={styles.content}>@ gyeongwon1275 </Text>
                                    <Text style={styles.content}>@ gyu716625 </Text>
                                    <Text>@ lllgresi </Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </Modal>
            </Portal>
        </View>
    );
}
export default More;