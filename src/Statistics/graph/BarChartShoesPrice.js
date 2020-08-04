import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";

export default function BarChartShoesPrice({ wardrobe }) {
    // 실제 data 

    // const shoes = wardrobe.shoes;

    // dummy data 

    const shoes = utils.shoes;

    var shoesTypePrice = [
        { type: 'sneakers', price: utils.getPrice(utils.getTypeList(shoes, 'sneakers')) },
        { type: 'leather', price: utils.getPrice(utils.getTypeList(shoes, 'leather')) },
        { type: 'sandals', price: utils.getPrice(utils.getTypeList(shoes, 'sandals')) },
        { type: 'boots', price: utils.getPrice(utils.getTypeList(shoes, 'boots')) },

    ]

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