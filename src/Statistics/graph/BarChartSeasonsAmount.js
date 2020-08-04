import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function BarChartSeasonsAmount({ wardrobe }) {

    /* 
        THINK
    X - 카테고리
    Y - 구매금액

    카테고리 설정으로 하지 말고 이미 뽑아놓은 데이터를 사용하여 작성 

    X축에는 카테고리, y축은 따로 표시하지 않고 labels 로 금액을 표시할 것 

    */

    // 실제 data 



    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);



    //  dummy data 

    // const clothes = utils.clothes;

    var seasonsAmount = [
        { category: 'spring', amount: utils.getSeasonList(clothes, 'spring').length },
        { category: 'summer', amount: utils.getSeasonList(clothes, 'summer').length },
        { category: 'fall', amount: utils.getSeasonList(clothes, 'fall').length },
        { category: 'winter', amount: utils.getSeasonList(clothes, 'winter').length }
    ]

    let isExistData = seasonsAmount.find((seasonsAmountObj) => {

        if (seasonsAmountObj.amount !== 0) {
            return true;
        }
    })
    if (!isExistData) {
        return <NoStatisticsData />
    }

    return (
        <VictoryChart>
            <VictoryBar
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                    easing: "bounce"
                }}
                domainPadding={{ x: [60, 60] }}
                alignment="middle"
                barRatio={0.6}
                style={{ data: { fill: 'tomato' } }}
                data={seasonsAmount} x={'category'} y={'amount'}
            />

            <VictoryAxis crossAxis

                domain={[0.1, 0.5]}
            />
            <VictoryAxis dependentAxis crossAxis

                domain={[0, 4]}
                offsetX={65}
                tickFormat={(data) => (`${data}EA`)}
            />


        </VictoryChart>
    )

}