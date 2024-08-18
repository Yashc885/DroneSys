'use client';
import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const LineChartComp = ({ orders = [], type = 'today' }) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        updateChart();
    }, [orders, type, updateChart]); // Include updateChart in the dependency array

    const updateChart = () => {
        const tempData = orders.map(order => {
            const totalCost = order.items.reduce((total, item) => total + item.cost, 0);
            const timeStamp = type === 'today'
                ? new Date(order.timeStamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : new Date(order.timeStamp).toLocaleDateString();

            return {
                name: timeStamp,
                sale: totalCost,
            };
        });

        setData(tempData);
    };

    return (
        <div className='border rounded shadow-sm'>
            <div className='text-center'>
                <span className='fs-4'>Sales</span>
                <hr className='mx-3 my-1' />
            </div>
            <div style={{ width: '100%', height: '200px' }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: -10, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#8884d8" stopOpacity={1} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" interval={2} padding={{ left: 48, right: 32 }} style={{ fontSize: '10px' }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="sale" stroke="#8884d8" fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChartComp;
