'use client';
import React, { Component } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LineChartComp from './LineChartComp';
// import PieChartComp from './PieChartComp';
// import TopSellingComp from './TopSellingComp';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'today',
            filteredOrders: [],
            orderList: [],
            productList: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
        this.filterOrders('today');
    }

    fetchData = async () => {
        try {
            const ordersResponse = await axios.get('/api/booking');
            const productsResponse = await axios.get('/api/drone-services');

            console.log('Orders Response:', ordersResponse.data);
            console.log('Products Response:', productsResponse.data);

            this.setState({
                orderList: ordersResponse.data,
                productList: productsResponse.data,
            });
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    filterOrders = (key) => {
        this.setState({ key });
    
        const { orderList } = this.state;
        console.log('Order List:', orderList); 
    
        const today = new Date();
        const todaysMilliseconds = new Date(
            `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
        ).getTime() - 60 * 60 * 1000 * 3;
    
        console.log('Today\'s Milliseconds:', todaysMilliseconds); 
    
        const filteredOrders = key === 'today'
            ? orderList
                .filter(o => o.data && typeof o.data.timeStamp === 'number' && o.data.timeStamp >= todaysMilliseconds)
                .sort((a, b) => a.data.timeStamp - b.data.timeStamp)
            : orderList
                .filter(o => o.data && typeof o.data.timeStamp === 'number')
                .sort((a, b) => a.data.timeStamp - b.data.timeStamp);
    
        console.log('Filtered Orders:', filteredOrders); 
    
        this.setState({ filteredOrders });
    };
    

    render() {
        const { filteredOrders, key, productList } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col px-1">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => this.filterOrders(k)}
                            className="mb-2 flex justify-content-between"
                        >
                            <Tab eventKey="today" title="Today" className="mx-1" />
                            <Tab eventKey="all" title="All" className="mx-16 pl-18" />
                        </Tabs>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 px-1 py-2 py-lg-0">
                        <LineChartComp orders={filteredOrders} type={key} />
                        {/* <TopSellingComp orders={filteredOrders} products={productList} /> */}
                    </div>
                    {/* <div className="col-12 col-lg-4 px-1">
                        <PieChartComp orders={filteredOrders} />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Dashboard;
