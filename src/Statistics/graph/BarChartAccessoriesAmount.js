import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import NoStatisticsData from './NoStatisticsData';
export default function BarChartAccessoriesAmount({ wardrobe }) {

    /* 
        THINK
    X - 카테고리
    Y - 구매금액

    카테고리 설정으로 하지 말고 이미 뽑아놓은 데이터를 사용하여 작성 

    X축에는 카테고리, y축은 따로 표시하지 않고 labels 로 금액을 표시할 것 

    */
    // 실제 데이터 
    const accessories = wardrobe.accessories;

    // dummy
    // const accessories = utils.accessories;
    var AccessoriesTypeAmount = [
        { type: '가방', amount: utils.getTypeList(accessories, 'bag').length },
        { type: '모자', amount: utils.getTypeList(accessories, 'head').length },
        { type: '액세서리', amount: utils.getTypeList(accessories, 'jewelry').length },
        { type: '기타', amount: utils.getTypeList(accessories, 'other').length },
    ]
    // amount 가 전부다 0이면 no data 표시한다. 

    let isExistData = AccessoriesTypeAmount.find((amountObj) => {

        if (amountObj.amount !== 0) {
            return true;
        }
    })
    if (!isExistData) {
        return <NoStatisticsData />
    }

    else {
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
                    data={AccessoriesTypeAmount} x={'type'} y={'amount'}
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

}