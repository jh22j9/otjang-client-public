import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../UIcomponents/FormInput';
import FormButton from '../UIcomponents/FormButton';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
axios.defaults.withCredentials = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function ChangePassword() {

  const Navigation = useNavigation();

  const [userToken, setUserToken] = React.useState('');

  React.useEffect(() => {
    const getToken = async () => {
      let token = await AsyncStorage.getItem('TOKEN')
      setUserToken(token);
    }
    getToken()
  }, [])

  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleChangePassword = () => {

    const url = `http://13.125.237.84:5000/user/newpwd`;
    const data = {
      newpassword: newPassword,
      password: currentPassword
    };
    const config = { headers: { token: userToken } };
    console.log('토큰-----', userToken)

    if (newPassword === confirmPassword) {
      axios.post(url, data, config)
        .then(res => {
          if (res.status === 409) {
            // 작동하지 않음
            Alert.alert("현재 비밀번호가 일치하지 않습니다.")
          }
          else if (res.status === 200) {
            Alert.alert("비밀번호가 변경되었습니다.", "로그인 페이지로 이동합니다.",
              [
                { text: '확인', onPress: () => Navigation.navigate('SignIn') },
              ],
              { cancelable: false })
          }
        }).catch = (e) => {
          console.log(e);
        }
    } else {
      Alert.alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.")
    };
  };

  return (
    <View style={styles.container} >
      <Title style={styles.titleText}>비밀번호 변경</Title>

      <FormInput
        labelName='현재 비밀번호'
        value={currentPassword}
        secureTextEntry={true}
        onChangeText={password => setCurrentPassword(password)}
      />
      <FormInput
        labelName='새 비밀번호'
        value={newPassword}
        secureTextEntry={true}
        onChangeText={password => setNewPassword(password)}
      />
      <FormInput
        labelName='비밀번호 확인'
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={password => setConfirmPassword(password)}
      />
      <FormButton
        title='저장하기'
        modeValue='contained'
        labelStyle={styles.signUpButtonLabel}
        onPress={handleChangePassword}
      />
    </View>
  );
}

export default ChangePassword;