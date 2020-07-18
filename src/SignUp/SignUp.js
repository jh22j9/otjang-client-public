import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../UIcomponents/FormInput';
import FormButton from '../UIcomponents/FormButton';
// import { Button } from 'react-native-elements';

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
    signUpButtonLabel: {
        fontSize: 18
    },
    navButtonText: {
        fontSize: 16
    }

})

function SignUp({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container} >
            <Title style={styles.titleText}>Sign Up</Title>
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
                title='Sign Up'
                modeValue='contained'
                labelStyle={styles.signUpButtonLabel}

            />
            <FormButton
                title='go to Sign In'
                icon='keyboard-backspace'
                modeValue='text'
                uppercase={false}
                labelStyle={styles.navButtonText}
                onPress={() => { navigation.navigate('SignIn') }}
            />
        </View>
    );
}

export default SignUp;