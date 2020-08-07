import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

// modeValue -> 버튼 종류
/* 
text: a flat button without background or outline
outlined: a button with the outline
contained: a button with background color and elevation shadow
 */

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    buttonContainer: {
        width: width / 1.5,
        height: height / 18
    }
});

export default function FormButton({ title, modeValue, ...rest }) {
    return (
        <Button
            mode={modeValue}
            {...rest}
            style={styles.button}
            contentStyle={styles.buttonContainer}
        >
            {title}
        </Button>
    );
}

