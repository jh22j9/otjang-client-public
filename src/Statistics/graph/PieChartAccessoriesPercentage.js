import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';

export default function PieChartAccessoriesPercentage() {

    const bagList = utils.getTypeList(utils.accessories, 'bag');
    const headList = utils.getTypeList(utils.accessories, 'head');
    const otherList = utils.getTypeList(utils.accessories, 'other');

    var data = [
        { type: 'bag', percentage: Math.floor(utils.getPrice(bagList) / utils.totalAccessoriesPrice * 100) },
        { type: 'head', percentage: Math.floor(utils.getPrice(headList) / utils.totalAccessoriesPrice * 100) },
        { type: 'other', percentage: Math.floor(utils.getPrice(otherList) / utils.totalAccessoriesPrice * 100) },
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
