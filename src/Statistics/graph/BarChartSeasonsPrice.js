import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import * as utils from '../statisticsUtils';

export default function BarChartSeasonsPrice() {

    /* 
        THINK
    X - 카테고리
    Y - 구매금액

    카테고리 설정으로 하지 말고 이미 뽑아놓은 데이터를 사용하여 작성 

    X축에는 카테고리, y축은 따로 표시하지 않고 labels 로 금액을 표시할 것 

    */


    var seasonsPrice = [
        { season: 'spring', price: utils.getPrice(utils.getSeasonList(utils.clothes, 'spring')) },
        { season: 'summer', price: utils.getPrice(utils.getSeasonList(utils.clothes, 'summer')) },
        { season: 'fall', price: utils.getPrice(utils.getSeasonList(utils.clothes, 'fall')) },
        { season: 'winter', price: utils.getPrice(utils.getSeasonList(utils.clothes, 'winter')) },

    ]

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
                data={seasonsPrice} x={'season'} y={'price'}
            />

            <VictoryAxis crossAxis

                domain={[0.1, 0.5]}
            />
            <VictoryAxis dependentAxis crossAxis

                offsetX={65}
                tickFormat={(data) => (`${data / 10000}만원`)}
            />


        </VictoryChart>
    )

}
