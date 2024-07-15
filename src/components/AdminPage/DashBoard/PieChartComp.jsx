'use client'
import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default class PieChartComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getInitialData(),
            categories: this.initializeCategories(),
            totalSale: 0,
        };
    }

    getInitialData() {
        return [
            { name: 'Electronics', value: 400 },
            { name: 'Clothing', value: 300 },
            { name: 'Toys', value: 300 },
            { name: 'Food', value: 200 },
        ];
    }

    initializeCategories() {
        return {
            "Electronics": 0,
            "Clothing": 0,
            "Toys": 0,
            "Food": 0,
            "Sport": 0,
            "Accessories": 0,
            "Furniture": 0,
            "Hobby and DIY": 0,
            "Health & Beauty": 0,
        };
    }

    COLORS = ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600', 'black'];

    componentDidUpdate(prevProps) {
        if (prevProps.orders !== this.props.orders) {
            this.salesByCategories();
        }
    }

    salesByCategories() {
        const orders = this.props.orders.map(order => order.data);
        const categories = this.initializeCategories();

        orders.forEach(order => {
            order.items.forEach(item => {
                categories[item.category] += item.quantity;
            });
        });

        const sortedCategories = Object.keys(categories).sort((a, b) => categories[b] - categories[a]);

        const data = sortedCategories.map(cat => ({
            name: cat,
            value: categories[cat],
        }));

        const totalSale = data.reduce((total, category) => total + category.value, 0);

        this.setState({ data, totalSale, categories });
    }

    render() {
        const { data, totalSale } = this.state;

        return (
            <div className='d-flex flex-column justify-content-center border rounded shadow-sm '>
                <div className='text-center'>
                    <span className='fs-4'>Sales By Categories</span>
                    <hr className='mx-3 my-1' />
                </div>
                <div style={{ width: '100%', height: '240px' }}>
                    <ResponsiveContainer width='100%' height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">⨀</th>
                            <th scope="col">Category</th>
                            <th scope="col" className='text-center'>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((category, index) => (
                            <tr key={index}>
                                <th style={{ color: this.COLORS[index % this.COLORS.length] }}>⬤</th>
                                <td>{category.name}</td>
                                <td className='text-center'>%{((100 * category.value) / totalSale).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
