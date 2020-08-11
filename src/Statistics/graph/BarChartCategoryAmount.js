import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartCategoryAmount({ wardrobe }) {


    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;


    var categoryAmount = [
        { category: '의류', amount: clothing.length },
        { category: '신발', amount: shoes.length },
        { category: '잡화', amount: accessories.length }
    ]


    let isExistData = categoryAmount.find((categoryAmountObj) => {

        if (categoryAmountObj.amount !== 0) {
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
                data={categoryAmount} x={'category'} y={'amount'}
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