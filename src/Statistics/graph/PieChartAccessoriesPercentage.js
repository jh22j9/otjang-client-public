import React from 'react';
import { VictoryPie, VictoryTheme, } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function PieChartAccessoriesPercentage({ wardrobe }) {



    const accessories = wardrobe.accessories;



    const accessoriesPrice = utils.getPrice(accessories);

    const bagList = utils.getTypeList(accessories, 'bag');
    const headList = utils.getTypeList(accessories, 'head');
    const jewelryList = utils.getTypeList(accessories, 'jewelry');
    const otherList = utils.getTypeList(accessories, 'other');

    var data = [
        { type: '가방', percentage: Math.floor(utils.getPrice(bagList) / accessoriesPrice * 100) },
        { type: '모자', percentage: Math.floor(utils.getPrice(headList) / accessoriesPrice * 100) },
        { type: '액세서리', percentage: Math.floor(utils.getPrice(jewelryList) / accessoriesPrice * 100) },
        { type: '기타', percentage: Math.floor(utils.getPrice(otherList) / accessoriesPrice * 100) },
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
