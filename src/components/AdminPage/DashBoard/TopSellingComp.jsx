'use client'
import React, { Component } from 'react';

export default class TopSellingComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSellingCounts: [],
        };
    }

    componentDidMount() {
        this.countSales();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.orders !== this.props.orders || prevProps.products !== this.props.products) {
            this.countSales();
        }
    }

    countSales() {
        const { products, orders } = this.props;

        if (products.length > 0) {
            const productSellingCounts = products.map(product => ({
                id: product.id,
                count: 0,
                name: product.name,
                category: product.category,
                imgUrl: product.imgUrl,
                brand: product.brand,
            }));

            orders.forEach(order => {
                order.data.items.forEach(item => {
                    const productIndex = productSellingCounts.findIndex(p => p.id === item.productId);
                    if (productIndex > -1) {
                        productSellingCounts[productIndex].count += item.quantity;
                    }
                });
            });

            productSellingCounts.sort((a, b) => b.count - a.count);

            this.setState({ productSellingCounts });
        }
    }

    render() {
        const { productSellingCounts } = this.state;

        return (
            <div className='border rounded mt-2 mb-1 overflow-auto shadow-sm' style={{ maxHeight: "377px" }}>
                <div className='text-center'>
                    <span className='fs-4'>Top Selling Products</span>
                    <hr className='mx-3 my-1' />
                </div>
                <div className="table-responsive">
                    {productSellingCounts.length > 0 ? (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className='px-1'>#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col" className='text-center'>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productSellingCounts.map((product, index) => (
                                    product.count > 0 && (
                                        <tr key={product.id}>
                                            <th scope="row" className='px-1'>{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td className='text-center'>{product.count}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="alert alert-warning d-flex align-items-center justify-content-center h-100 m-3">
                            There is no product.
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
