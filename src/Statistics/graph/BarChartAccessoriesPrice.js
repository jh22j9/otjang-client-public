import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartAccessoriesPrice({ wardrobe }) {

    // 실제 데이터 
    const accessories = wardrobe.accessories;

    // dummy data 
    // const accessories = utils.accessories;

    var AccessoriesTypePrice = [
        { type: '가방', price: utils.getPrice(utils.getTypeList(accessories, 'bag')) },
        { type: '모자', price: utils.getPrice(utils.getTypeList(accessories, 'head')) },
        { type: '액세서리', price: utils.getPrice(utils.getTypeList(accessories, 'jewelry')) },
        { type: '기타', price: utils.getPrice(utils.getTypeList(accessories, 'other')) },

    ]

    let isExistData = AccessoriesTypePrice.find((priceObj) => {

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
                data={AccessoriesTypePrice} x={'type'} y={'price'}
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