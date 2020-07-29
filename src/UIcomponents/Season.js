import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Map, List } from 'immutable';
const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.1,
    },

    selectedContainer: {

        backgroundColor: '#e8dad5',
        padding: 10
    },

    notSelectedContainer: {

        padding: 10
    },


})

export default function Season({ temporaryClothing, ClothesActions, ...rest }) {


    function setSpring() {

        // THINK: 
        // 배열에서 찾아서 있으면 터치를 해제, 없으면 0번째 자리에 넣는다.  
        // 아니면 
        var season = temporaryClothing.get('season');
        function findSpring(season) {
            return season === 'sp';
        }

        // let isSpringSelected = seasons.get('seasonArray').toJS().find(findSpring);

        let isSpringSelected = season.get('seasonArray').toJS().find(findSpring);
        if (isSpringSelected) {
            // 기존에 봄이 선택된 상태라면 
            // 0 번째자리를 null 로 변경 
            // spring 도 false 로 변경 
            // ,origin.get('seasonArray').update(2,item => 'spring'))
            let seasonArray = season.get('seasonArray')
            let newSeason = season.set('spring', false)
                .set('seasonArray', seasonArray.set(0, null));

            ClothesActions.setTemporaryClothing(temporaryClothing.set('season', newSeason))
        }
        else {
            // 기존에 봄이 선택되지 않은 상태라면 
            // 0 번째자리를 'spring' 로 변경 
            // spring 도 true 로 변경 
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
        /* BUG: 상태를 변경하고 난 후 상태를 읽고나서 회색으로 칠할지 아닐지를 판단하니 변경속도가 느림
                return 에서 상태를 판단하지 않음으로서 속도를 증가시켜야 할 것같다. 
                예를 들면 dispatch 됨가 동시에 아이콘이 바뀌도록 
        */
        <View style={styles.container} {...rest}>
            <Chip onPress={setSpring} selected={temporaryClothing.get('season').get('spring')}>🌱 봄</Chip>
            <Chip onPress={setSummer} selected={temporaryClothing.get('season').get('summer')}>⛱️ 여름</Chip>
            <Chip onPress={setFall} selected={temporaryClothing.get('season').get('fall')}>🍁 가을</Chip>
            <Chip onPress={setWinter} selected={temporaryClothing.get('season').get('winter')}>⛄ 겨울</Chip>
        </View>

    )

}