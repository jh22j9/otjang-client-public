import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';


const styles = StyleSheet.create({

    storageContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
    },
    inputStorage: {
        display: 'flex',
        flexDirection: 'row',
    }
    ,
    inputStorageNumber: {

        flex: 7,
        margin: 10,
    },
    inputStorageText: {


    },


})


function Storage({ temporaryClothing, onSetTemporaryClothing, ...rest }) {
    const [storage, setStorage] = React.useState('');

    function saveStorage() {

        onSetTemporaryClothing(temporaryClothing.set('storage', storage))
    }

    return (

        <View style={styles.storageContainer}>

            <Text style={styles.inputStorageText}>보관장소</Text>
            <View style={styles.inputStorage}>
                <TextInput style={styles.inputStorageNumber} placeholder='보관장소'
                    onChangeText={storage => setStorage(storage)}
                    onEndEditing={saveStorage}
                >
                </TextInput>
            </View>
        </View>
    )

}




export default Storage;