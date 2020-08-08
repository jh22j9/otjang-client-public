import React from 'react';
import * as dummy from '../dummyData';
import { VictoryLine, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native'
import NoStatisticsData from './NoStatisticsData';
export default function LineChartMonthlyPrice({ wardrobe }) {


    /*
        THINK 도메인은 실수좌표계 이다. 
        
    */
    // 실제 data 



    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);
    var lineData = utils.getAnnualPurchaseData(clothes);

    let priceData = lineData.map((data) => (data.price));
    let maxPrice = Math.max(...priceData);
    let domainY = [0, maxPrice * 1.5]
    //  dummy data 

    // const clothes = utils.clothes;

    const [monthDomain, setMonthDomain] = React.useState({ x: [0.5, 6.5], y: [...domainY] });


    function handleMonthDomain(domain) {
        setMonthDomain({ x: domain.x, y: [...domainY] })
    }




    let isExistData = lineData.find((priceObj) => {

        if (priceObj.price !== 0) {
            return true;
        }
    })
    if (!isExistData) {
        return <NoStatisticsData />
    }
    return (<VictoryChart width={400} theme={VictoryTheme.material}

        domainPadding={10} containerComponent={<VictoryZoomContainer
            zoomDimension='x'
            zoomDomain={monthDomain}
            onZoomDomainChange={handleMonthDomain}
        />}
    >
        <VictoryLine
            style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" }
            }}
            data={lineData} x={utils.transformBuydate} y={'price'}

        />

        <VictoryScatter data={lineData} x={utils.transformBuydate} y={'price'}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
            labels={({ datum }) => `${datum.price / 10000}만원`}
        />
        <VictoryAxis crossAxis

            domain={[1, 12]}
        />
        <VictoryAxis dependentAxis crossAxis
            domain={[1, maxPrice * 2 / 10000]}
            tickFormat={(data) => (`${data / 10000}만원`)}
        />

    </VictoryChart>)
}