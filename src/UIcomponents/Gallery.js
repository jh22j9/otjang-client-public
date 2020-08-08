import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, ActivityIndicator, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { decode } from 'base64-arraybuffer';
import S3 from 'aws-sdk/clients/s3'
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET } from 'envStorage';


const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({

    imagePicker: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    },

    image: {
        width: width * 0.9,
        height: height * 0.35,
    },
    loadingIndicator: {

        height: height * 0.35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainter: {
        height: height * 0.35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    }

})


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

        const uploadImageOnS3 = (file) => {

            const s3bucket = new S3({
                accessKeyId: ACCESS_KEY_ID,
                secretAccessKey: SECRET_ACCESS_KEY,
                Bucket: BUCKET,
                signatureVersion: 'v4',
            });
            let contentType = file.type;
            let contentDeposition = 'inline;filename="' + file.name + '"';
            const arrayBuffer = decode(file.data);

            return s3bucket.createBucket(() => {
                const params = {
                    Bucket: BUCKET,
                    Key: file.name,
                    Body: arrayBuffer,
                    ContentDisposition: contentDeposition,
                    ContentType: contentType,
                };

                let promiseS3 = s3bucket.upload(params).promise()

                promiseS3.then(function (data) {
                    ClothesActions.setTemporaryClothing(temporaryClothing.set('isLoading', false))
                    ClothesActions.setTemporaryClothing(temporaryClothing.set('image', data.Location))
                }).catch((err) => { console.warn(err) })
            })
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
                ClothesActions.setTemporaryClothing(temporaryClothing.set('isLoading', true))

                function uploadS3Uri() {

                    const file = {
                        uri: `file://${response.path}`,
                        name: response.fileName,
                        type: response.type,
                        data: response.data,
                    }

                    try {
                        uploadImageOnS3(file);
                    } catch (error) {
                        console.warn(err)
                    }

                }

                uploadS3Uri();

                // 스마트폰 내부의 위치로 저장 
                // ClothesActions.setTemporaryClothing(temporaryClothing.set('image', `file://${response.path}`))

            }
        });
    }

    function renderImage() {

        if (temporaryClothing.get('isLoading')) {

            return (<View style={styles.loadingIndicator}>
                <ActivityIndicator size={100} color='#999999' />
            </View>)

        }

        else if (!temporaryClothing.get('isLoading') && temporaryClothing.get('image')) {
            return (<Image resizeMode='stretch' style={styles.image} source={{ uri: temporaryClothing.get('image') }} />)
        }

        else {
            return (
                <View style={styles.loadingIndicator}>
                    <Icon name='add-a-photo' color={'#495057'} size={60} />
                </View>
            )
        }
    }

    return (<TouchableOpacity style={styles.imagePicker} onPress={selectPhotoTapped}{...rest} >

        {renderImage()}
        {/* temporaryClothing.get('image') ? <Image resizeMode='stretch' style={styles.image} source={{ uri: temporaryClothing.get('image') }} />
            : <Icon name='image' color={'black'} size={230} /> */}
    </TouchableOpacity>)

}