import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartClothingPrice({ wardrobe }) {


    const clothing = wardrobe.clothing;



    var clothingTypePrice = [
        { type: '상의', price: utils.getPrice(utils.getTypeList(clothing, 'top')) },
        { type: '하의', price: utils.getPrice(utils.getTypeList(clothing, 'bottom')) },
        { type: '자켓', price: utils.getPrice(utils.getTypeList(clothing, 'outer')) },
        { type: '드레스', price: utils.getPrice(utils.getTypeList(clothing, 'dress')) },

    ]

    let isExistData = clothingTypePrice.find((priceObj) => {

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
                data={clothingTypePrice} x={'type'} y={'price'}
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