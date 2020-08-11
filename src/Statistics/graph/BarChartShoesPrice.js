import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartShoesPrice({ wardrobe }) {

    const shoes = wardrobe.shoes;


    var shoesTypePrice = [
        { type: '운동화', price: utils.getPrice(utils.getTypeList(shoes, 'sneakers')) },
        { type: '구두', price: utils.getPrice(utils.getTypeList(shoes, 'leather')) },
        { type: '핸들', price: utils.getPrice(utils.getTypeList(shoes, 'sandals')) },
        { type: '부츠', price: utils.getPrice(utils.getTypeList(shoes, 'boots')) },

    ]


    let isExistData = shoesTypePrice.find((priceObj) => {

        if (priceObj.price !== 0) {
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
                data={shoesTypePrice} x={'type'} y={'price'}
            />

            <VictoryAxis crossAxis

                domain={[0.1, 0.5]}
            />
            <VictoryAxis dependentAxis crossAxis

                offsetX={70}
                tickFormat={(data) => (`${data / 10000}만원`)}
            />

        </VictoryChart>
    )

}