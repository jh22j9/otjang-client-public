import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
        paddingLeft: 13

    },


})


function Storage({ temporaryClothing, ClothesActions, ...rest }) {
    const [storage, setStorage] = React.useState('');

    function saveStorage() {

        ClothesActions.setTemporaryClothing(temporaryClothing.set('storage', storage))
    }

    return (

        <View style={styles.storageContainer}>

            <Text style={styles.inputStorageText}>보관 장소</Text>
            <View style={styles.inputStorage}>
                <TextInput style={styles.inputStorageNumber}
                    placeholder={temporaryClothing.get('storage') ? `${temporaryClothing.get('storage')}` : '보관 장소'}
                    onChangeText={storage => setStorage(storage)}
                    onEndEditing={saveStorage}
                >
                </TextInput>
            </View>
        </View>
    )

}




export default Storage;