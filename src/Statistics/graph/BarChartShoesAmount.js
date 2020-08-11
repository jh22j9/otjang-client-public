import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartShoesAmount({ wardrobe }) {


    const shoes = wardrobe.shoes;


    var shoesTypeAmount = [
        { type: '운동화', amount: utils.getTypeList(shoes, 'sneakers').length },
        { type: '구두', amount: utils.getTypeList(shoes, 'leather').length },
        { type: '샌들', amount: utils.getTypeList(shoes, 'sandals').length },
        { type: '부츠', amount: utils.getTypeList(shoes, 'boots').length },
    ]


    let isExistData = shoesTypeAmount.find((amountObj) => {

        if (amountObj.amount !== 0) {
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
                data={shoesTypeAmount} x={'type'} y={'amount'}
            />

            <VictoryAxis crossAxis

                domain={[0.1, 0.5]}
            />
            <VictoryAxis dependentAxis crossAxis

                offsetX={65}
                tickFormat={(data) => (`${data}EA`)}
            />


        </VictoryChart>
    )

}