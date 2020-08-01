import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { List, Button, Badge } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom: 170
  },
  paragraph: {
    margin: 24,
    fontSize: 18
  }
})

function HowToWash() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        햇빛에 건조

      </Text>
    </View>
  )
}

export default HowToWash