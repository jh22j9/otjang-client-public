import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';

export default function PieChartClothingPercentage({ wardrobe }) {

    // 실제 data 

    /*  

     const clothing = wardrobe.clothing;
     const shoes = wardrobe.shoes;
     const accessories = wardrobe.accessories;
     const clothes = clothing.concat(shoes).concat(accessories); 
     
     */

    //  dummy data 

    const shoes = utils.shoes;

    // 서버, dummy 공통적용
    const sneakersList = utils.getTypeList(shoes, 'sneakers');
    const leatherList = utils.getTypeList(shoes, 'leather');
    const sandalsList = utils.getTypeList(shoes, 'sandals');
    const bootsList = utils.getTypeList(shoes, 'boots');
    const shoesPrice = utils.getPrice(shoes);

    var data = [
        { type: 'sneakers', percentage: Math.floor(utils.getPrice(sneakersList) / shoesPrice * 100) },
        { type: 'leather', percentage: Math.floor(utils.getPrice(leatherList) / shoesPrice * 100) },
        { type: 'sandals', percentage: Math.floor(utils.getPrice(sandalsList) / shoesPrice * 100) },
        { type: 'boots', percentage: Math.floor(utils.getPrice(bootsList) / shoesPrice * 100) },

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
