'use client'
import React, { Component } from 'react';
import OrderModal from './OrderModal';

export default class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            sortedOrders: [],
            showModal: false,
            selectedOrder: null,
        };
    }

    componentDidMount() {
        this.getOrders();
    }

    getOrders = async () => {
        const orders = [
            {
                fireId: '1',
                data: {
                    timeStamp: Date.now() - 1000000,
                    status: 'new',
                    items: [{ productId: 1, cost: 500, quantity: 1 }, { productId: 2, cost: 500, quantity: 2 }],
                },
            },
            {
                fireId: '2',
                data: {
                    timeStamp: Date.now() - 2000000,
                    status: 'delivered',
                    items: [{ productId: 3, cost: 2000, quantity: 1 }],
                },
            },
            {
                fireId: '3',
                data: {
                    timeStamp: Date.now() - 3000000,
                    status: 'new',
                    items: [{ productId: 4, cost: 1000, quantity: 1 }],
                },
            },
        ];
        const temp = [...orders];
        temp.sort((a, b) => b.data.timeStamp - a.data.timeStamp);
        this.setState({ sortedOrders: temp });
    };

    openOrderModal = (order) => {
        this.setState({ showModal: true, selectedOrder: order });
    };

    handleClose = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { sortedOrders, showModal, selectedOrder } = this.state;
        return sortedOrders.length > 0 ? (
            <div className="container border rounded px-0 shadow-sm items-center justify-center ">
                <div className="d-flex justify-content-center">
                    <span className="px-2 pb-8  small text-muted">Click order to see its detail and delivery.</span>
                </div>
                <div className="items-center justify-between  py-8 overflow-auto" style={{ maxHeight: '654px' }}>
                    <table className="table table-hover flex-col gap-4 ">
                        <thead>
                            <tr>
                                <th scope="col" className="pe-0 px-sm-auto">Date</th>
                                <th  className="pl-2" scope="col">Order Id</th>
                                <th scope="col">Status</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOrders.map(order => (
                                <tr className="items-center " key={order.fireId} onClick={() => this.openOrderModal(order)}>
                                    <td className="pe-0 px-sm-auto pl-2 md:pl-4 ">{new Date(order.data.timeStamp).toLocaleDateString('tr-TR')}</td>
                                    <td className="pl-4 md:pl-8 font-extrabold "><big>{order.fireId}</big></td>
                                    <td className="pl-4 md:pl-8 ">
                                        <span className={`badge ${order.data.status === "new" ? "text-bg-warning" : "text-bg-success"} fs-6`}>
                                            {order.data.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="pl-4 md:pl-8 " >₺{Object.values(order.data.items).reduce((totalCost, item) => totalCost + item.cost, 0)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {selectedOrder && <OrderModal show={showModal} handleClose={this.handleClose} order={selectedOrder} />}
            </div>
        ) : (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" style={{ width: "10rem", height: "10rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
}
