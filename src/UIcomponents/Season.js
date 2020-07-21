import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { Map, List } from 'immutable';
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },

    selectedContainer: {

        backgroundColor: '#e8dad5',
        padding: 10
    },

    notSelectedContainer: {

        padding: 10
    },


})

export default function Season({ ...rest }) {

    /* 
    TODO: 중복선택이 가능하도록 설정, 
    선택을 했을 때 '계절들'을 중복없이 배열에 저장해야 함 
    
    */

    const [seasons, setSeasons] = React.useState(Map({
        seasonArray: List([]),
        spring: false, summer: false, fall: false, winter: false
    }))


    function setSpring() {

        // THINK: 
        // 배열에서 찾아서 있으면 터치를 해제, 없으면 0번째 자리에 넣는다.  
        // 아니면 

        function findSpring(season) {
            return season === 'spring';
        }

        let isSpringSelected = seasons.get('seasonArray').toJS().find(findSpring);

        if (isSpringSelected) {
            // 기존에 봄이 선택된 상태라면 
            // 0 번째자리를 null 로 변경 
            // spring 도 false 로 변경 
            // ,origin.get('seasonArray').update(2,item => 'spring'))
            let newSeasons = seasons.set('spring', false)
                .set('seasonArray', seasons.get('seasonArray').update(0, season => null));
            setSeasons(newSeasons);
        }
        else {
            // 기존에 봄이 선택되지 않은 상태라면 
            // 0 번째자리를 'spring' 로 변경 
            // spring 도 true 로 변경 
            let newSeasons = seasons.set('spring', true)
                .set('seasonArray', seasons.get('seasonArray').update(0, season => 'spring'));
            setSeasons(newSeasons);
        }

    }

    function setSummer() {

        // THINK: 
        // 배열에서 찾아서 있으면 터치를 해제, 없으면 0번째 자리에 넣는다.  
        // 아니면 

        function findSummer(season) {
            return season === 'summer';
        }

        let isSummerSelected = seasons.get('seasonArray').toJS().find(findSummer);

        if (isSummerSelected) {
            let newSeasons = seasons.set('summer', false)
                .set('seasonArray', seasons.get('seasonArray').update(1, season => null));
            setSeasons(newSeasons);
        }
        else {
            let newSeasons = seasons.set('summer', true)
                .set('seasonArray', seasons.get('seasonArray').update(1, season => 'summer'));
            setSeasons(newSeasons);
        }

    }

    function setFall() {

        // THINK: 
        // 배열에서 찾아서 있으면 터치를 해제, 없으면 0번째 자리에 넣는다.  
        // 아니면 

        function findFall(season) {
            return season === 'fall';
        }

        let isFallSelected = seasons.get('seasonArray').toJS().find(findFall);

        if (isFallSelected) {
            // 기존에 봄이 선택된 상태라면 
            // 0 번째자리를 null 로 변경 
            // spring 도 false 로 변경 
            // ,origin.get('seasonArray').update(2,item => 'spring'))
            let newSeasons = seasons.set('fall', false)
                .set('seasonArray', seasons.get('seasonArray').update(2, season => null));
            setSeasons(newSeasons);
        }
        else {
            // 기존에 봄이 선택되지 않은 상태라면 
            // 0 번째자리를 'spring' 로 변경 
            // spring 도 true 로 변경 
            let newSeasons = seasons.set('fall', true)
                .set('seasonArray', seasons.get('seasonArray').update(2, season => 'fall'));
            setSeasons(newSeasons);
        }

    }

    function setWinter() {

        // THINK: 
        // 배열에서 찾아서 있으면 터치를 해제, 없으면 0번째 자리에 넣는다.  
        // 아니면 

        function findWinter(season) {
            return season === 'winter';
        }

        let isWinterSelected = seasons.get('seasonArray').toJS().find(findWinter);

        if (isWinterSelected) {
            // 기존에 봄이 선택된 상태라면 
            // 0 번째자리를 null 로 변경 
            // spring 도 false 로 변경 
            // ,origin.get('seasonArray').update(2,item => 'spring'))
            let newSeasons = seasons.set('winter', false)
                .set('seasonArray', seasons.get('seasonArray').update(3, season => null));
            setSeasons(newSeasons);
        }
        else {
            // 기존에 봄이 선택되지 않은 상태라면 
            // 0 번째자리를 'spring' 로 변경 
            // spring 도 true 로 변경 
            let newSeasons = seasons.set('winter', true)
                .set('seasonArray', seasons.get('seasonArray').update(3, season => 'winter'));
            setSeasons(newSeasons);
        }

    }
    return (

        <View style={styles.container} {...rest}>
            <TouchableOpacity onPress={setSpring}>
                {
                    seasons.get('spring') ?
                        <View style={styles.selectedContainer}>
                            <Text >봄</Text>
                        </View> :
                        <View style={styles.notSelectedContainer}>
                            <Text >봄</Text>
                        </View>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={setSummer}>
                {
                    seasons.get('summer') ?
                        <View style={styles.selectedContainer}>
                            <Text >여름</Text>
                        </View> :
                        <View style={styles.notSelectedContainer}>
                            <Text >여름</Text>
                        </View>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={setFall}>
                {
                    seasons.get('fall') ?
                        <View style={styles.selectedContainer}>
                            <Text >가을</Text>
                        </View> :
                        <View style={styles.notSelectedContainer}>
                            <Text >가을</Text>
                        </View>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={setWinter}>
                {
                    seasons.get('winter') ?
                        <View style={styles.selectedContainer}>
                            <Text >겨울</Text>
                        </View> :
                        <View style={styles.notSelectedContainer}>
                            <Text >겨울</Text>
                        </View>
                }
            </TouchableOpacity>
        </View>

    )

}