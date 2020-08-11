import React from 'react';
import { VictoryPie, VictoryTheme, } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function PieChartClothingTypePercentage({ wardrobe }) {


    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);


    const clothingPrice = utils.getPrice(clothing);
    const shoesPrice = utils.getPrice(shoes);
    const accessoriesPrice = utils.getPrice(accessories);
    const totalPrice = utils.getPrice(clothes);


    var data = [
        { category: '의류', percentage: Math.floor(clothingPrice / totalPrice * 100) },
        { category: '신발', percentage: Math.floor(shoesPrice / totalPrice * 100) },
        { category: '잡화', percentage: Math.floor(accessoriesPrice / totalPrice * 100) }
    ]


    function transformPieLabels({ datum }) {
        let label = `${datum.category}\n\n${datum.percentage}%`
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
                data={isExistData} x={'category'} y={'percentage'}
                innerRadius={50}
                labelRadius={72}
                labels={transformPieLabels}
            />

        </>
    )

}
