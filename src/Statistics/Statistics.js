import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Chip } from 'react-native-paper'
import * as dummy from './dummyData';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome'
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from './statisticsUtils';
import LineChartMonthlyPrice from './graph/LineChartMonthlyPrice';
import PieChartCategoryPercentage from './graph/PieChartCategoryPercentage';
import BarChartSeasonsAmount from './graph/BarChartSeasonsAmount';
import BarChartSeasonsPrice from './graph/BarChartSeasonsPrice';
import BarChartCategoryAmount from './graph/BarChartCategoryAmount';
import BarChartCategoryPrice from './graph/BarChartCategoryPrice'
// import { acc } from 'react-native-reanimated';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },

    selectionWraper: {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    selectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    popupMenuContainer: {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20

    },

    popupMenuButton: {
        display: 'flex',
        flexDirection: 'row',

    },

    graphContainer: {
        flex: 7,
        flexDirection: 'row',
        justifyContent: 'center',

    }
});



function Statistics() {

    /* 
    THINK 
    
    > 전체 월별 금액 추이 (O)
    
    > 전체 카테고리별 금액 비율 (O)
    
    > 전체 카테고리별 금액 (O)

    > 전체 카테고리별 의류 수 (O)
    
    > 전체 계절별 의류 수 (o)

    > 전체 계절별 금액 (o)
    
    */


    /* 
    THINK 

    - 기간별, 계절별, 카테고리별, TYPE 별 선택 메뉴 -> 최상단 

    - 바로 아래에 우측에 통계메뉴 선택 
    
    */
    const [selectStatistics, setStatistics] = React.useState({ duration: true, category: false, season: false, type: false });
    const [categoryMenu, setCategoryMenu] = React.useState({ price: true, percentage: false, amount: false });
    const [seasonMenu, setSeasonMenu] = React.useState({ price: true, amount: false });

    function handleDuration() {

        setStatistics({ duration: true, category: false, season: false, type: false })
    }
    function handleCategory() {

        setStatistics({ duration: false, category: true, season: false, type: false })
    }
    function handleSeason() {

        setStatistics({ duration: false, category: false, season: true, type: false })
    }
    function handleType() {

        setStatistics({ duration: false, category: false, season: false, type: true })
    }

    /* 
    TODO : 메뉴까지 포함해서 기간, CATEGORY,계절, TYPE 별 렌더링 되도록 해야함 

    selectStatistics STATE 를 기준으로 조건을 4개로 나누어 렌더링 

    이후 다시 메뉴선택에따라 렌더링 되도록 지정  
    */



    var _menu = null;
    var hideMenu = () => {
        _menu.hide();
    };

    var showMenu = () => {
        _menu.show();
    };


    var setMenuRef = ref => {
        _menu = ref;
    };

    function renderDurationGraph() {

        return (


            <>
                <View style={styles.popupMenuContainer}>

                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >통계선택  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        <MenuItem onPress={hideMenu}>월별 구매금액</MenuItem>
                    </Menu>
                </View>
                <View style={styles.graphContainer}>
                    <LineChartMonthlyPrice />
                </View>
            </>
        )

    }

    function renderCategoryGraph() {

        function chooseCategoryGraph() {


            if (categoryMenu.price) {

                return <BarChartCategoryPrice />
            }

            else if (categoryMenu.percentage) {
                return <PieChartCategoryPercentage />
            }

            else if (categoryMenu.amount) {
                return <BarChartSeasonsAmount />
            }
        }


        function chooseCategoryPrice() {
            setCategoryMenu({ price: true, percentage: false, amount: false });
            _menu.hide();
        }

        function chooseCategoryPercentage() {
            setCategoryMenu({ price: false, percentage: true, amount: false });
            _menu.hide();
        }

        function chooseCategoryAmount() {
            setCategoryMenu({ price: false, percentage: false, amount: true });
            _menu.hide();
        }


        return (


            <>
                <View style={styles.popupMenuContainer}>

                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >통계선택  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        <MenuItem onPress={chooseCategoryPrice}>카테고리별 구매금액</MenuItem>
                        <MenuItem onPress={chooseCategoryPercentage}>카테고리별 구매비율</MenuItem>
                        <MenuItem onPress={chooseCategoryAmount}>카테고리별 보유수량</MenuItem>

                    </Menu>
                </View>
                <View style={styles.graphContainer}>
                    {chooseCategoryGraph()}
                </View>
            </>
        )

    }

    function renderSeasonGraph() {
        function chooseSeasonGraph() {


            if (seasonMenu.price) {

                return <BarChartSeasonsPrice />
            }

            else if (seasonMenu.amount) {
                return <BarChartSeasonsAmount />
            }
        }


        function chooseSeasonPrice() {
            setSeasonMenu({ price: true, amount: false });
            _menu.hide();
        }


        function chooseSeasonAmount() {
            setSeasonMenu({ price: false, amount: true });
            _menu.hide();
        }


        return (


            <>
                <View style={styles.popupMenuContainer}>

                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >통계선택  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        <MenuItem onPress={chooseSeasonPrice}>계절별 구매금액</MenuItem>
                        <MenuItem onPress={chooseSeasonAmount}>계절별 보유수량</MenuItem>

                    </Menu>
                </View>
                <View style={styles.graphContainer}>
                    {chooseSeasonGraph()}
                </View>
            </>
        )


    }

    function renderGraph() {


        if (selectStatistics.duration) {
            return renderDurationGraph();
        }

        else if (selectStatistics.category) {
            return renderCategoryGraph();
        }

        else if (selectStatistics.season) {
            return renderSeasonGraph();
        }

        else if (selectStatistics.type) {
            return;
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.selectionWraper}>

                <View style={styles.selectionContainer}>
                    <Chip icon="calendar-month" onPress={handleDuration} selected={selectStatistics.duration}>기간</Chip>
                    <Chip icon="hat-fedora" onPress={handleCategory} selected={selectStatistics.category}>Category</Chip>
                    <Chip icon="weather-partly-snowy-rainy" onPress={handleSeason} selected={selectStatistics.season}>계절</Chip>
                    <Chip icon="tshirt-v" onPress={handleType} selected={selectStatistics.type}>Type</Chip>
                </View>

            </View>
            {renderGraph()}
        </View>
    );
}



export default Statistics;