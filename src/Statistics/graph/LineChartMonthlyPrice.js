import React from 'react';
import * as dummy from '../dummyData';
import { VictoryBar, VictoryLine, VictoryPie, VictoryGroup, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';


export default function LineChartMonthlyPrice() {

    /*
        THINK 도메인은 실수좌표계 이다. 
        
    */
    const [monthDomian, setMonthDomain] = React.useState({ x: [0.5, 6.5] });


    function handleMonthDomain(domain) {

        setMonthDomain(domain)
    }


    var lineData = utils.clothing;
    return (<VictoryChart width={400} theme={VictoryTheme.material}

        domainPadding={10} containerComponent={<VictoryZoomContainer
            zoomDimension="x"
            zoomDomain={monthDomian}
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
        />
        <VictoryAxis crossAxis

            domain={[1, 12]}
        />
        <VictoryAxis dependentAxis crossAxis

            tickFormat={(data) => (`${data / 10000}만원`)}
        />

    </VictoryChart>)
}