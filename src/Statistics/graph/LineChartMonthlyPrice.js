import React from 'react';
import * as dummy from '../dummyData';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';


export default function LineChartMonthlyPrice() {

    /*
        THINK 도메인은 실수좌표계 이다. 
        
    */
    const [monthDomain, setMonthDomain] = React.useState({ x: [0.5, 6.5], y: [0, 900000] });


    function handleMonthDomain(domain) {

        console.log('domain', domain);
        console.log('monthDomain', monthDomain);
        setMonthDomain(domain)
    }



    var lineData = utils.getAnnualPurchaseData();
    return (<VictoryChart width={400} theme={VictoryTheme.material}

        domainPadding={10} containerComponent={<VictoryZoomContainer
            // zoomDimension='x'
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
            domain={[1, 10]}
            tickFormat={(data) => (`${data / 10000}만원`)}
        />

    </VictoryChart>)
}