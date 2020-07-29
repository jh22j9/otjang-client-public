import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';

export default function PieChartClothingTypePercentage() {


    var data = [
        { category: 'clothing', percentage: Math.floor(utils.totalClothingPrice / utils.totalPrice * 100) },
        { category: 'shoes', percentage: Math.floor(utils.totalShoesPrice / utils.totalPrice * 100) },
        { category: 'accessories', percentage: Math.floor(utils.totalAccessoriesPrice / utils.totalPrice * 100) }
    ]


    function transformPieLabels({ datum }) {
        let label = `${datum.category}\n\n${datum.percentage}%`
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
                data={data} x={'category'} y={'percentage'}
                innerRadius={50}
                labelRadius={72}
                labels={transformPieLabels}
            />

        </>
    )

}
