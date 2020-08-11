import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartClothingAmount({ wardrobe }) {


    const clothing = wardrobe.clothing;


    var clothingTypeAmount = [
        { type: '상의', amount: utils.getTypeList(clothing, 'top').length },
        { type: '하의', amount: utils.getTypeList(clothing, 'bottom').length },
        { type: '자켓', amount: utils.getTypeList(clothing, 'outer').length },
        { type: '드레스', amount: utils.getTypeList(clothing, 'dress').length },
    ]

    let isExistData = clothingTypeAmount.find((clothingAmountObj) => {

        if (clothingAmountObj.amount !== 0) {
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
                data={clothingTypeAmount} x={'type'} y={'amount'}
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