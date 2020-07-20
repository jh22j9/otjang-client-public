import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, } from 'react-native';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

// const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({

    imagePicker: {
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        margin: 15

    },

    image: {

        width: '100%',
        height: '100%'
    },

})


export default function Gallery({ ...rest }) {

    const [source, setImage] = React.useState(null);

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
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                setImage(source);
            }
        });
    }

    return (<TouchableOpacity style={styles.imagePicker} onPress={selectPhotoTapped}{...rest} >
        {source ? <Image resizeMode='stretch' style={styles.image} source={source} />
            : <Icon name='image' color={'black'} size={250} />}
    </TouchableOpacity>)

}