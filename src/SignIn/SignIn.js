import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Title, HelperText } from 'react-native-paper';
import FormInput from '../UIcomponents/FormInput';
import FormButton from '../UIcomponents/FormButton';

import axios from 'axios';
axios.defaults.withCredentials = true;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'

    },
    titleText: {
        fontSize: 24,
        marginBottom: 10
    },
    loginButtonLabel: {
        fontSize: 18
    },
    navButtonText: {
        fontSize: 16
    }

})

function SignIn({ navigation }) {
    useEffect(() => {
        autoLogin()
    })

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const hasEmailError = () => {

        if (email.length > 4 && email.includes('@') === false) {
            return (<HelperText type="error" visible={true}>
                올바른 Email 형식이 아닙니다!
            </HelperText>)
        }
    };

    async function autoLogin() {
        let arr = await AsyncStorage.multiGet(['EMAIL','PASSWORD'])
        if(arr) {
            try{ axios.post('http://13.125.237.84:5000/user/signin', {
                email: arr[0][1],
                password: arr[1][1]
            }).then(async res => {
                try {
                    let token = res.data.token;

                    if(res.status === 200) {
                        await AsyncStorage.setItem('TOKEN', token);
                        return navigation.replace('MainContainer');
                    }
                } catch(e) {
                    Alert.alert('입력 정보를 다시 확인해주세요')
                    console.log(e)
                }
            })
            } catch(e) {
                Alert.alert('입력 정보를 다시 확인해주세요')
                console.log(e)
            }
        }
    }

    //useEffect사용하여 autoLogin()실행



    //처음 로그인
    const handleSignIn = (email, password) => {
        axios.post('http://13.125.237.84:5000/user/signin', {
            email: email,
            password: password

        })
            .then(async res => { // async 위치 변경하여 에러 해결 
                // console.log(res.data.token)
                try { // try, catch 구문 사용하지 않으면 RN에서 에러 발생함
                    
                    let token = res.data.token;

                    if (res.status === 200) {
                        await AsyncStorage.setItem('TOKEN', token);
                        await AsyncStorage.setItem('EMAIL', email);
                        await AsyncStorage.setItem('PASSWORD', password);
                        // setEmail('');
                        // setPassword('');

                        return navigation.replace('MainContainer');
                    }
                } catch (e) {
                    console.log(e)
                    Alert.alert("유효하지 않은 회원입니다.")
                }
            }).catch(e => { // Possible unhandled promise rejection 에러 해결 
                console.log(e)
                Alert.alert("유효하지 않은 회원입니다.")
            })
    };


    // async function autoSignIn(e='',p='') {
    //     let arr = await AsyncStorage.multiGet(['EMAIL','PASSWORD'])
    //     if(!arr) {
    //         await handleSignIn(e,p)
    //     } else {
    //         handleSignIn(arr[0][1], arr[1][1])
    //         //SignIn 버튼 누른 거랑 같은 효과가 나와야 함... 그런데 왜 안나와?
    //     }
    // }

    return (
        <View style={styles.container} >
            <Title style={styles.titleText}>Welcome to Otjang</Title>
            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={email => setEmail(email)}
            />
            {hasEmailError()}
            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <FormButton
                title='Sign In'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={() => handleSignIn(email, password)}
            />
            <FormButton
                title='Sign Up'
                modeValue='text'
                uppercase={false}
                labelStyle={styles.navButtonText}
                onPress={() => { navigation.navigate('SignUp') }}
            />
        </View>

        
    );
}

export default SignIn;


/* 
if()를 쓸까? 아니면 위에서 promise형태로 써도 될까?
1. 첫번째 로그인 성공 후 async storage에 토큰을 저장해놨다가
AsyncStorage.setItem('Email',email)
AsyncStorage.setItem('Password', password)     
2-1. 성공하게 되면 그 토큰을 asyncstorage에 저장해서 계속 쓰고
AsyncStorage.setItem('TOKEN', token);
2-2-1. 실패하게 되면 async storage에 있는 아이디, 비밀번호를 통해 로그인을 한다
axios.post('http://13.125.237.84:5000/user/signin', {
    email: AsyncStorage.getItem('Email')
    password: AsyncStorage.getItem('Password')
}).then(async res
    try { 
    2-2-2. 위 과정이 성공하면 그 토큰을 asyncstorage에 새로 저장한다.
        let token = res.data.token;
        AsyncStorage.setItem('TOKEN', token);
    } catch(e) {
        console.warn(e)
    }
)
    
AsyncStorage.setItem('TOKEN', token);
*/

