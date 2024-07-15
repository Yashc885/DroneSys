'use client'
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import LineChartComp from './LineChartComp';
import PieChartComp from './PieChartComp';
import TopSellingComp from './TopSellingComp';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'today',
            filteredOrders: [],
            orderList: [
                { id: 1, data: { timeStamp: Date.now() - 1000000, items: [{ productId: 1, category: 'Electronics', cost: 500, quantity: 1 }, { productId: 2, category: 'Clothing', cost: 500, quantity: 2 }] } },
                { id: 2, data: { timeStamp: Date.now() - 2000000, items: [{ productId: 3, category: 'Toys', cost: 2000, quantity: 1 }] } },
                { id: 3, data: { timeStamp: Date.now() - 3000000, items: [{ productId: 4, category: 'Food', cost: 1000, quantity: 1 }] } },
            ],
            productList: [
                { id: 1, name: 'Laptop', category: 'Electronics', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngc6XKSI7P4KekbKdIpfTfqhlXET2gdBSA&s', brand: 'Brand A' },
                { id: 2, name: 'T-Shirt', category: 'Clothing', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngc6XKSI7P4KekbKdIpfTfqhlXET2gdBSA&s', brand: 'Brand B' },
                { id: 3, name: 'Toy Car', category: 'Toys', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngc6XKSI7P4KekbKdIpfTfqhlXET2gdBSA&s', brand: 'Brand C' },
                { id: 4, name: 'Pizza', category: 'Food', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngc6XKSI7P4KekbKdIpfTfqhlXET2gdBSA&s', brand: 'Brand D' },
            ],
        };
    }

    componentDidMount() {
        this.filterOrders('today');
    }

    filterOrders = (key) => {
        this.setState({ key });

        const { orderList } = this.state;

        if (key === 'today') {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            const todaysMiliseconds = new Date(`${yyyy}-${mm}-${dd}`).getTime() - 60 * 60 * 1000 * 3;

            const todaysOrders = orderList
                .filter((o) => o.data.timeStamp >= todaysMiliseconds)
                .sort((a, b) => a.data.timeStamp - b.data.timeStamp);

            this.setState({
                filteredOrders: [...todaysOrders],
            });
        } else {
            this.setState({
                filteredOrders: [...orderList].sort((a, b) => a.data.timeStamp - b.data.timeStamp),
            });
        }
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
                    <Tab eventKey="today" title="Today" className="mx-1"></Tab>
                    <Tab eventKey="all" title="All" className="mx-16 pl-18 "></Tab>
                </Tabs>
            </div>

                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 px-1 py-2 py-lg-0">
                        <LineChartComp orders={filteredOrders} type={key} />
                        <TopSellingComp orders={filteredOrders} products={productList} />
                    </div>
                    <div className="col-12 col-lg-4 px-1">
                        <PieChartComp orders={filteredOrders} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
