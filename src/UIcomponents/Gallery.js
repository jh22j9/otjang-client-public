import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { decode } from 'base64-arraybuffer';
import S3 from 'aws-sdk/clients/s3'
import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, BUCKET } from 'envStorage';
import LottieView from 'lottie-react-native';
import loading from '../201-simple-loader.json';

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

        const uploadImageOnS3 = (file) => {
            // var uri = '초기값';
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
                    Bucket: 'otjang-image-storage',
                    Key: file.name,
                    Body: arrayBuffer,
                    ContentDisposition: contentDeposition,
                    ContentType: contentType,
                };

                let promiseS3 = s3bucket.upload(params).promise()

                promiseS3.then(function (data) {

                    ClothesActions.setTemporaryClothing(temporaryClothing.set('loading', false))
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
                ClothesActions.setTemporaryClothing(temporaryClothing.set('loading', true))
                /* 
                THINK 
                무조건 s3 로 보낸 후 받은 uri 를 임시 저장창고에 저장 
                
                */

                /* 
                BUG : S3 로 부터 이미지 URI 를 받은후 -> setTemporaryClothing() 가 실행되어야 함
                */

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


        /* 
        THINK 조건을 확실히 분리를 해야함

        > 로딩이 FALSE, 이미지가 있을 때 

        > 로딩이 TRUE 일 때 -> 이미지가 있던 말던 로딩 이미지 띄워야 

        > 
        */
        if (temporaryClothing.get('loading')) {
            return (<LottieView
                source={loading}
                autoPlay loop
                style={{
                    width: height * 0.33,
                    height: height * 0.33,
                }}

            />)
        }

        else if (!temporaryClothing.get('loading') && temporaryClothing.get('image')) {
            return (<Image resizeMode='stretch' style={styles.image} source={{ uri: temporaryClothing.get('image') }} />)
        }

        else {
            return (<Icon name='image' color={'black'} size={230} />)
        }
    }

    // TODO S3 에서 이미지 로딩중일 때는 로딩이미지를 띄운다. 

    /* 
    THINK 
    현재 
    이미지가 없으면 아이콘 있으면 이미지 

    조건을 추가하고자 함 

    일차적으로 REDUX 에서 이미지가 없으면 이미지 

    로딩이 TRUE 면 로띠 로딩 이미지 

    응답이 완료되어 로딩이 FALSE 가 되면 받아온 이미지 
    */

    /* 
      <LottieView
            source={loading}
            autoPlay loop
            style={{
                width: 150,
                height: 150
            }}

        />
    */

    return (<TouchableOpacity style={styles.imagePicker} onPress={selectPhotoTapped}{...rest} >
        {renderImage()}
        {/* 
        {temporaryClothing.get('image') ? <Image resizeMode='stretch' style={styles.image} source={{ uri: temporaryClothing.get('image') }} />
            : <Icon name='image' color={'black'} size={230} />} */}
    </TouchableOpacity>)

}