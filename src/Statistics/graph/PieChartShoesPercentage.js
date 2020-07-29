import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';

export default function PieChartClothingPercentage() {

    const sneakersList = utils.getTypeList(utils.shoes, 'sneakers');
    const leatherList = utils.getTypeList(utils.shoes, 'leather');
    const otherList = utils.getTypeList(utils.shoes, 'other');

    var data = [
        { type: 'sneakers', percentage: Math.floor(utils.getPrice(sneakersList) / utils.totalShoesPrice * 100) },
        { type: 'leather', percentage: Math.floor(utils.getPrice(leatherList) / utils.totalShoesPrice * 100) },
        { type: 'other', percentage: Math.floor(utils.getPrice(otherList) / utils.totalShoesPrice * 100) },
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
