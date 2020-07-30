import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../UIcomponents/FormInput';
import FormButton from '../UIcomponents/FormButton';
// import { Button } from 'react-native-elements';

// import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function ChangePassword() {

  return (
    <View style={styles.container} >
    </View>
  );
}

export default ChangePassword;