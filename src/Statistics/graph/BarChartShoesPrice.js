import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";

export default function BarChartShoesPrice() {

    /* color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green","blue" */
    /* 
        THINK
    X - 카테고리
    Y - 구매금액

    카테고리 설정으로 하지 말고 이미 뽑아놓은 데이터를 사용하여 작성 

    X축에는 카테고리, y축은 따로 표시하지 않고 labels 로 금액을 표시할 것 

    */
    /* 
                   accessories
    
                  bag: false,
                  head: false,
                  other: false,
    
      
      */

    var shoesTypePrice = [
        { type: 'sneakers', price: utils.getPrice(utils.getTypeList(utils.shoes, 'sneakers')) },
        { type: 'leather', price: utils.getPrice(utils.getTypeList(utils.shoes, 'leather')) },
        { type: 'other', price: utils.getPrice(utils.getTypeList(utils.shoes, 'other')) },

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