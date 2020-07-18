import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import FormButton from '../UIcomponents/FormButton'
function Logo({ navigation }) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>로고화면</Text>
            <FormButton title='로그인으로' modeValue='contained'
                onPress={() => { navigation.navigate('SignIn') }}
            />
        </View>
    );
}

export default Logo;