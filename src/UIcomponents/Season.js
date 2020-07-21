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

export default function Season({ index, clothes, onSetClothes, ...rest }) {

    /* 
    TODO: 중복선택이 가능하도록 설정, 
    선택을 했을 때 '계절들'을 중복없이 배열에 저장해야 함 
         clothes: Map({
            item_id: null,
            image: null,
            type: Map({ typeValue: null, top: false, bottom: false, socks: false }),
            category: null,
            buydate: null,
            price: null,
            brand: null,
            storage: null,
            season: Map({})
        })
    */
    console.log('Season', clothes.get('season'))
    /*  const [season, setSeasons] = React.useState(Map({
         seasonArray: List([]),
         spring: false, summer: false, fall: false, winter: false
     })) */


    function setSpring() {

        // THINK: 
        // 배열에서 찾아서 있으면 터치를 해제, 없으면 0번째 자리에 넣는다.  
        // 아니면 
        var season = clothes.get('season');
        function findSpring(season) {
            return season === 'spring';
        }

        // let isSpringSelected = seasons.get('seasonArray').toJS().find(findSpring);

        let isSpringSelected = season.get('seasonArray').toJS().find(findSpring);
        if (isSpringSelected) {
            // 기존에 봄이 선택된 상태라면 
            // 0 번째자리를 null 로 변경 
            // spring 도 false 로 변경 
            // ,origin.get('seasonArray').update(2,item => 'spring'))

            let newSeason = season.set('spring', false)
                .set('seasonArray', season.get('seasonArray').set(0, null));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }
        else {
            // 기존에 봄이 선택되지 않은 상태라면 
            // 0 번째자리를 'spring' 로 변경 
            // spring 도 true 로 변경 
            let newSeason = season.set('spring', true)
                .set('seasonArray', season.get('seasonArray').set(0, 'spring'));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }

    }

    function setSummer() {

        var season = clothes.get('season');
        function findSummer(season) {
            return season === 'summer';
        }

        let isSummerSelected = season.get('seasonArray').toJS().find(findSummer);
        if (isSummerSelected) {

            let newSeason = season.set('summer', false)
                .set('seasonArray', season.get('seasonArray').set(1, null));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }
        else {
            let newSeason = season.set('summer', true)
                .set('seasonArray', season.get('seasonArray').set(1, 'summer'));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }
    }

    function setFall() {

        var season = clothes.get('season');
        function findFall(season) {
            return season === 'fall';
        }

        let isFallSelected = season.get('seasonArray').toJS().find(findFall);
        if (isFallSelected) {

            let newSeason = season.set('fall', false)
                .set('seasonArray', season.get('seasonArray').set(2, null));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }
        else {
            let newSeason = season.set('fall', true)
                .set('seasonArray', season.get('seasonArray').set(2, 'fall'));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }

    }

    function setWinter() {

        var season = clothes.get('season');
        function findWinter(season) {
            return season === 'winter';
        }

        let isFallSelected = season.get('seasonArray').toJS().find(findWinter);
        if (isFallSelected) {

            let newSeason = season.set('winter', false)
                .set('seasonArray', season.get('seasonArray').set(3, null));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }
        else {
            let newSeason = season.set('winter', true)
                .set('seasonArray', season.get('seasonArray').set(3, 'winter'));

            onSetClothes({ index: index, clothes: clothes.set('season', newSeason) })
        }

    }
    return (
        /* BUG: 상태를 변경하고 난 후 상태를 읽고나서 회색으로 칠할지 아닐지를 판단하니 변경속도가 느림
                return 에서 상태를 판단하지 않음으로서 속도를 증가시켜야 할 것같다. 
                예를 들면 dispatch 됨가 동시에 아이콘이 바뀌도록 
        */
        <View style={styles.container} {...rest}>
            <TouchableOpacity onPress={setSpring}>
                {clothes.get('season').get('spring') ?
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
                    clothes.get('season').get('summer') ?
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
                    clothes.get('season').get('fall') ?
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
                    clothes.get('season').get('winter') ?
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