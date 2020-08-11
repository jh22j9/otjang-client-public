import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function BarChartSeasonsPrice({ wardrobe }) {




    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);





    var seasonsPrice = [
        { season: '봄', price: utils.getPrice(utils.getSeasonList(clothes, 'spring')) },
        { season: '여름', price: utils.getPrice(utils.getSeasonList(clothes, 'summer')) },
        { season: '가을', price: utils.getPrice(utils.getSeasonList(clothes, 'fall')) },
        { season: '겨울', price: utils.getPrice(utils.getSeasonList(clothes, 'winter')) },

    ]


    let isExistData = seasonsPrice.find((priceObj) => {

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
