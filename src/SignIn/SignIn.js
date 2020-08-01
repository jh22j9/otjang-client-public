import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Title } from 'react-native-paper';
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
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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
                        setEmail('');
                        setPassword('');
                        navigation.replace('MainContainer');
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

    return (
        <View style={styles.container} >
            <Title style={styles.titleText}>Welcome to Otjang</Title>
            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={email => setEmail(email)}
            />
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