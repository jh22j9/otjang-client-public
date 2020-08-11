import React from 'react';
import { VictoryPie, VictoryTheme, } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function PieChartClothingPercentage({ wardrobe }) {


    const clothing = wardrobe.clothing;

    const topList = utils.getTypeList(clothing, 'top');
    const bottomList = utils.getTypeList(clothing, 'bottom');
    const outerList = utils.getTypeList(clothing, 'outer');
    const dressList = utils.getTypeList(clothing, 'dress');
    const clothingPrice = utils.getPrice(clothing);

    var data = [
        { type: '상의', percentage: Math.floor(utils.getPrice(topList) / clothingPrice * 100) },
        { type: '하의', percentage: Math.floor(utils.getPrice(bottomList) / clothingPrice * 100) },
        { type: '자켓', percentage: Math.floor(utils.getPrice(outerList) / clothingPrice * 100) },
        { type: '드레스', percentage: Math.floor(utils.getPrice(dressList) / clothingPrice * 100) }
    ]


    function transformPieLabels({ datum }) {
        let label = `${datum.type}\n\n${datum.percentage}%`
        return (label);

    }

    let isExistData = data.filter((percentageObj) => {

        if (percentageObj.percentage) {
            return true;
        }
    })

    if (isExistData.length < 1) {
        return <NoStatisticsData />
    }
    return (
        <>

            <VictoryPie
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                    easing: "bounce"
                }}
                standalone={true}
                width={400} height={400}
                style={{ labels: { fill: "black", fontWeight: '700' } }}
                theme={VictoryTheme.material}
                data={isExistData} x={'type'} y={'percentage'}
                innerRadius={50}
                labelRadius={72}
                labels={transformPieLabels}
            />

        </>
    )

}
