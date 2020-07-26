import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
function ETC(props) {

    const navigation = useNavigation();

    function moveToStatistics() {
        navigation.navigate('Statistics')
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Pressable onPress={moveToStatistics} >
                <OcticonsIcon name='graph' size={100} />
            </Pressable>

            <Text>ETC화면</Text>
        </View>
    );
}

export default ETC;