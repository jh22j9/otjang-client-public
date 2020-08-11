import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartCategoryPrice({ wardrobe }) {



    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;



    const clothingPrice = utils.getPrice(clothing);
    const shoesPrice = utils.getPrice(shoes);
    const accessoriesPrice = utils.getPrice(accessories);

    var categoryPrice = [
        { category: '의류', price: clothingPrice },
        { category: '신발', price: shoesPrice },
        { category: '잡화', price: accessoriesPrice }
    ]

    let isExistData = categoryPrice.find((categoryPriceObj) => {

        if (categoryPriceObj.price !== 0) {
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
                data={categoryPrice} x={'category'} y={'price'}
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