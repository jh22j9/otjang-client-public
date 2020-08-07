import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartCategoryPrice({ wardrobe }) {


    // 실제 data 



    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;



    // dummy data 

    // const clothing = utils.clothing;
    // const shoes = utils.shoes;
    // const accessories = utils.accessories;

    // 서버, dummy 공통적용
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
    // BUG PRICE, AMOUNT 는 실제 숫자가 아니면 그래프에서 계산을 하지 못한다. 
    // 그래프에 계산되는 것은 숫자로 하고 표시되는 축 만 바꿔야 한다. 

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