import React, { useState } from 'react';

const Chart = () => {
    const [state] = useState({
        options: {
            colors: ['#66DA26','#FF8500'],
            chart: {
                id: "basic-bar",   
            },
           
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            yaxis: {
                min: 0,
                max: 50000,
                tickAmount: 5,
                style: { fontWeight: 900 }
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
                data: [2000, 8000, 10000, 12000, 18000, 21000, 19000, 13000, 16000, 13000, 16000, 14000]
            },
            {
                name: "Total Expanse: 17,00,000",
                data: [1000, 2000, 5000, 9000, 18000, 25000, 19000, 15000, 10000, 9000, 8000, 11000]
            }
        ]
    })
    return (
        <div>
        <h6 className='fw-bold mt-3'>Insurance</h6>
            <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="100%"
            height="200px"
        />
        </div>
    );
};

export default Chart;