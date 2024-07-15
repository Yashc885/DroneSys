import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x5UoTsPaDYw3iOsJ95OyuQ1oa5hLVNE4g&s', brand: 'Brand A' },
    { id: 2, name: 'T-Shirt', category: 'Clothing', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x5UoTsPaDYw3iOsJ95OyuQ1oa5hLVNE4g&s', brand: 'Brand B' },
    { id: 3, name: 'Toy Car', category: 'Toys', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x5UoTsPaDYw3iOsJ95OyuQ1oa5hLVNE4g&s', brand: 'Brand C' },
    { id: 4, name: 'Pizza', category: 'Food', imgUrl: '/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x5UoTsPaDYw3iOsJ95OyuQ1oa5hLVNE4g&s', brand: 'Brand D' },
];

class OrderModal extends Component {
    markDelivered = () => {
        const { order, handleClose } = this.props;
        order.data.status = 'delivered';
        handleClose();
    };

    render() {
        const { show, handleClose, order } = this.props;
        return (
            <div className="">
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop={"true"}
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton className="p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-5 font-extrabold text-2xl md:text-3xl lg:text-4xl ">Order Details</span>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-1">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-1">Image</th>
                                        <th scope="col" className="px-1">Product</th>
                                        <th scope="col" className="px-1 text-center">Piece</th>
                                        <th scope="col" className="px-1 text-center">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.values(order.data.items).map((item) => {
                                        const product = products.find(product => product.id === item.productId);
                                        if (product)
                                            return (
                                                <tr class="py-4" key={product.id}>
                                                    <td className="px-1 py-4   pl-4 md:pl-8 ">
                                                        <Image src={product.imgUrl} alt={product.name} className="rounded-lg p-1" width={108} height={108} style={{ objectFit: 'contain' }} />
                                                    </td>
                                                    <td className="px-1  pl-8 md:pl-16 ">
                                                        <div className="d-flex flex-column small">
                                                            <strong>{product.brand}</strong>
                                                            <span className="pl-8">{product.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-1 pl-8  md:pl-16  text-center">{item.quantity}</td>
                                                    <td className="px-1 pl-8 md:pl-16   text-center">₺{item.cost}</td>
                                                </tr>
                                            );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-between border-top-0 pb-8 py-8 pl-4  ">
                        <span className="pr-4 md-pr:8  text-xl md:text-2xl font-bold uppercase " >Total Price: ${Object.values(order.data.items).reduce((totalCost, item) => totalCost + item.cost, 0)}</span>
                        <button onClick={this.markDelivered} className="border  border-2 border-black rounded-xl pl-2 pr-2 px-1 py-1  text-lg text-black hover:text-white hover:bg-blue-400  " disabled={order.data.status === "closed" || order.data.status === "delivered"}>Mark as Delivered</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default OrderModal;
