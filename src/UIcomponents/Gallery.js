import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, } from 'react-native';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Map, List } from 'immutable';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({

    imagePicker: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

    image: {

        width: width * 0.9,
        height: height * 0.35,
    },

})

/*
THINK: 
clothesObj 옷에 대한 모든 정보가 담긴 객체 
수정사항이 생길 때마다 아래 객체에 반영하여 state 변경시킨다. 
*/

export default function Gallery({ temporaryClothing, ClothesActions, ...rest }) {


    function selectPhotoTapped() {

        const options = {
            title: 'Select Image',
            quality: 1.0,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log('response확인', response)
                ClothesActions.setTemporaryClothing(temporaryClothing.set('image', response.uri))
            }
        });
    }

    return (<TouchableOpacity style={styles.imagePicker} onPress={selectPhotoTapped}{...rest} >
        {temporaryClothing.get('image') ? <Image resizeMode='stretch' style={styles.image} source={{ uri: temporaryClothing.get('image') }} />
            : <Icon name='image' color={'black'} size={230} />}
    </TouchableOpacity>)

}