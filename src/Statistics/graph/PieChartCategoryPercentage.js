import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function PieChartClothingTypePercentage({ wardrobe }) {

    // 실제 data 



    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);



    //  dummy data 

    // const clothing = utils.clothing;
    // const shoes = utils.shoes;
    // const accessories = utils.accessories;
    // const clothes = utils.clothes;

    // 서버, dummy 공통적용
    const clothingPrice = utils.getPrice(clothing);
    const shoesPrice = utils.getPrice(shoes);
    const accessoriesPrice = utils.getPrice(accessories);
    const totalPrice = utils.getPrice(clothes);


    var data = [
        { category: 'clothing', percentage: Math.floor(clothingPrice / totalPrice * 100) },
        { category: 'shoes', percentage: Math.floor(shoesPrice / totalPrice * 100) },
        { category: 'accessories', percentage: Math.floor(accessoriesPrice / totalPrice * 100) }
    ]


    function transformPieLabels({ datum }) {
        let label = `${datum.category}\n\n${datum.percentage}%`
        return (label);

    }

    let isExistData = data.find((percentageObj) => {

        if (percentageObj.percentage) {
            return true;
        }
    })
    if (!isExistData) {
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
                data={data} x={'category'} y={'percentage'}
                innerRadius={50}
                labelRadius={72}
                labels={transformPieLabels}
            />

        </>
    )

}
