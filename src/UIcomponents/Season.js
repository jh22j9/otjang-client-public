import React from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';
import { Chip } from 'react-native-paper'
const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.08,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    selectedContainer: {
        backgroundColor: '#e8dad5',
        padding: 10
    },
    notSelectedContainer: {
        padding: 10
    },
    chip: {
        backgroundColor: '#f5f5f5',
    }
})

export default function Season({ temporaryClothing, ClothesActions, ...rest }) {


    function setSpring() {


        var season = temporaryClothing.get('season');
        function findSpring(season) {
            return season === 'sp';
        }



        let isSpringSelected = season.get('seasonArray').toJS().find(findSpring);
        if (isSpringSelected) {
            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('spring', false)
                .set('seasonArray', seasonArray.set(0, null));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }
        else {
            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('spring', true)
                .set('seasonArray', seasonArray.set(0, 'sp'));


            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }

    }

    function setSummer() {

        var season = temporaryClothing.get('season');
        function findSummer(season) {
            return season === 'sm';
        }

        let isSummerSelected = season.get('seasonArray').toJS().find(findSummer);
        if (isSummerSelected) {

            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('summer', false)
                .set('seasonArray', seasonArray.set(1, null));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }
        else {
            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('summer', true)
                .set('seasonArray', seasonArray.set(1, 'sm'));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }
    }

    function setFall() {

        var season = temporaryClothing.get('season');
        function findFall(season) {
            return season === 'f';
        }

        let isFallSelected = season.get('seasonArray').toJS().find(findFall);
        if (isFallSelected) {

            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('fall', false)
                .set('seasonArray', seasonArray.set(2, null));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }
        else {
            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('fall', true)
                .set('seasonArray', seasonArray.set(2, 'f'));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }

    }

    function setWinter() {

        var season = temporaryClothing.get('season');
        function findWinter(season) {
            return season === 'w';
        }

        let isFallSelected = season.get('seasonArray').toJS().find(findWinter);
        if (isFallSelected) {

            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('winter', false)
                .set('seasonArray', seasonArray.set(3, null));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }
        else {
            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('winter', true)
                .set('seasonArray', seasonArray.set(3, 'w'));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }

    }
    return (
        <View style={styles.container} {...rest}>
            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={setSpring}
                selected={temporaryClothing.get('season').get('spring')}>🌱 봄</Chip>
            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={setSummer}
                selected={temporaryClothing.get('season').get('summer')}>⛱️ 여름</Chip>
            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={setFall}
                selected={temporaryClothing.get('season').get('fall')}>🍁 가을</Chip>
            <Chip
                style={styles.chip}
                mode='outlined'
                onPress={setWinter}
                selected={temporaryClothing.get('season').get('winter')}>⛄ 겨울</Chip>
        </View>

    )

}