import React, { useState } from 'react';
import Chart from "react-apexcharts";
import droller from '../../assets/Dashboard/droller.png';
import '../../styles/Chart.css'
const Graph = () => {

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const Revenue = [3000, 10000, 12000, 15000, 18000, 21000, 19000, 15000, 16000, 13000, 16000, 14000];
    const Expanse = [1000, 2000, 5000, 9000, 20000, 26000, 18000, 11000, 10000, 9000, 8000, 11000];

    const [graph] = useState({
        options: {
            colors: ['#66DA26', '#FF8500'],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: month
            },
            yaxis: {
                min: 0,
                max: 50000,
                tickAmount: 5,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 3,
            }
        },
        series: [
            {
                name: "Total Revenue: 53,00000",
                data: Revenue
            },
            {
                name: "Total Expanse: 17,00,000",
                data: Expanse
            }
        ]
    })

    const xaxis = ["Home", "Mobility", "Travel"]
    const yaxis = [30000, 22000, 12000]
    const [chart] = useState({
        options: {
            bar: {
                columnWidth: 20,
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#66DA26'],
            xaxis: {
                categories: xaxis
            },
            yaxis: {
                min: 0,
                max: 40000,
                tickAmount: 4,
            },
        },
        series: [
            {
                data: yaxis
            }
        ]
    })

    return (
        <div>
            <h6 className='fw-bold mt-3'>This Year Overview</h6>
            <Chart
                options={graph.options}
                series={graph.series}
                type="line"
                width="100%"
                height="250px"
            />
            <h6 className='fw-bold'>Insurance</h6>
            <div className="row">
                <div className="col-md-8">
                    <Chart
                        options={chart.options}
                        series={chart.series}
                        type="bar"
                        width="100%"
                        height="150px"
                    />
                </div>
                <div className="col-md-4">
                    <div className='px-3 py-3 chart'
                        style={{ background: "#F1FBF2", borderRadius: "10px 10px 10px 10px", cursor: "pointer" }}>
                        <span style={{ display: "block" }}>
                            <img style={{ width: "8px", marginRight: "5px" }} src={droller} alt="img" />
                            <span style={{ color: "#19A526", fontWeight: "bold" }}>23,45,000</span>
                        </span>
                        <span style={{ fontSize: "12px", color: "#646464" }}>Total Insurance cost</span>
                    </div>
                    <div className='px-3 py-3 mt-2 chart'
                        style={{ background: "#FFF4E7", borderRadius: "10px 10px 10px 10px", cursor: "pointer" }}>
                        <span style={{ display: "block" }}>
                            <img style={{ width: "8px", marginRight: "5px" }} src={droller} alt="img" />
                            <span style={{ color: "#FF8500", fontWeight: "bold" }}>75,000</span>
                        </span>
                        <span style={{ fontSize: "12px", color: "#646464" }}>Upcoming insurance cost</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graph;