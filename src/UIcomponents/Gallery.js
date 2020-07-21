import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, } from 'react-native';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Map, List } from 'immutable';
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

/*
THINK: 
clothesObj 옷에 대한 모든 정보가 담긴 객체 
수정사항이 생길 때마다 아래 객체에 반영하여 state 변경시킨다. 
*/
var clothesObj = Map({

    item_id: null,
    image: null,
    type: List([]),
    category: null,
    buydate: null,
    price: null,
    brand: null,
    storage: null,
    season: Map({})
})

export default function Gallery({ clothes, onSetClothes, ...rest }) {

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

                /* 
                uri 를 redux store 의 상태에 반영 
                */

                clothesObj = clothesObj.set('image', response.uri);
                onSetClothes({ index: 0, clothes: clothesObj })
                setImage(source);

            }
        });
    }

    return (<TouchableOpacity style={styles.imagePicker} onPress={selectPhotoTapped}{...rest} >
        {source ? <Image resizeMode='stretch' style={styles.image} source={source} />
            : <Icon name='image' color={'black'} size={250} />}
    </TouchableOpacity>)

}