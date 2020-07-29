import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';

export default function PieChartClothingPercentage() {

    const topList = utils.getTypeList(utils.clothing, 'top');
    const bottomList = utils.getTypeList(utils.clothing, 'bottom');
    const outerList = utils.getTypeList(utils.clothing, 'outer');
    const dressList = utils.getTypeList(utils.clothing, 'dress');

    var data = [
        { type: 'top', percentage: Math.floor(utils.getPrice(topList) / utils.totalClothingPrice * 100) },
        { type: 'bottom', percentage: Math.floor(utils.getPrice(bottomList) / utils.totalClothingPrice * 100) },
        { type: 'outer', percentage: Math.floor(utils.getPrice(outerList) / utils.totalClothingPrice * 100) },
        { type: 'dress', percentage: Math.floor(utils.getPrice(dressList) / utils.totalClothingPrice * 100) }
    ]


    function transformPieLabels({ datum }) {
        let label = `${datum.type}\n\n${datum.percentage}%`
        return (label);

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
                data={data} x={'type'} y={'percentage'}
                innerRadius={50}
                labelRadius={72}
                labels={transformPieLabels}
            />

        </>
    )

}
