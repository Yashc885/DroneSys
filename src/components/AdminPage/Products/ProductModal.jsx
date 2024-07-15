import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

class ProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                "Electronics",
                "Clothing",
                "Toys",
                "Food",
                "Sport",
                "Accessories",
                "Furniture",
                "Hobby and DIY",
                "Health & Beauty"
            ],
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        const productData = {
            id: this.props.isUpdate ? this.props.selectedProduct.id : Date.now(),
            brand: e.target[0].value,
            name: e.target[1].value,
            description: e.target[2].value,
            imgUrl: e.target[3].value,
            category: e.target[4].value,
            stock: e.target[5].valueAsNumber,
            price: e.target[6].valueAsNumber,
            rating: this.props.isUpdate ? this.props.selectedProduct.rating : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
        };

        let productList = [...this.props.productList];
        if (this.props.isUpdate) {
            const index = productList.findIndex(product => product.id === productData.id);
            productList[index] = productData;
        } else {
            productList.push(productData);
        }

        this.props.setProductList(productList);
        this.props.handleClose();
    }

    deleteHandler = () => {
        const productList = this.props.productList.filter(product => product.id !== this.props.selectedProduct.id);
        this.props.setProductList(productList);
        this.props.handleClose();
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                backdrop={this.props.isUpdate ? "true" : "static"}
                keyboard={false}
                centered
            >
                <Form onSubmit={this.submitHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Product Features</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-12">
                                <FloatingLabel controlId="floatingInput" label="Brand" className='my-2'>
                                    <Form.Control type="text" placeholder="Brand" name='brand' required defaultValue={this.props.isUpdate ? this.props.selectedProduct.brand : ""} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Name" className='my-2'>
                                    <Form.Control type="text" placeholder="Name" size="sm" name='name' required defaultValue={this.props.isUpdate ? this.props.selectedProduct.name : ""} />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea" label="Description" className='my-2'>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        size="sm"
                                        name='description'
                                        required
                                        defaultValue={this.props.isUpdate ? this.props.selectedProduct.description : ""}
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Image URL" className='my-2'>
                                    <Form.Control type="text" placeholder="url" size="sm" name='imgUrl' defaultValue={this.props.isUpdate ? this.props.selectedProduct.imgUrl : ""} />
                                </FloatingLabel>

                                <div className='row'>
                                    <div className="col-12 col-sm-5">
                                        <FloatingLabel controlId="floatingSelect" label="Category" className=''>
                                            <Form.Select size="sm" name='category' defaultValue={this.props.isUpdate ? this.props.selectedProduct.category : ""}>
                                                {
                                                    this.state.categories.map((category, index) => {
                                                        return <option value={category} key={index}>{category}</option>
                                                    })
                                                }
                                            </Form.Select>
                                        </FloatingLabel>
                                    </div>

                                    <div className="col-12 col-sm-7 d-flex my-2 my-sm-0 ">
                                        <FloatingLabel controlId="floatingInput" label="Stock" className='me-1 '>
                                            <Form.Control type="number" placeholder="0" size="sm" name='stock' required defaultValue={this.props.isUpdate ? this.props.selectedProduct.stock : ""} />
                                        </FloatingLabel>

                                        <FloatingLabel controlId="floatingInput" label="Price" className='ms-1 w-100'>
                                            <Form.Control type="number" placeholder="0" size="sm" name='price' required defaultValue={this.props.isUpdate ? this.props.selectedProduct.price : ""} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className=' justify-content-between'>
                        {
                            this.props.isUpdate && <Button variant="danger" onClick={this.deleteHandler}>
                                Delete Product
                            </Button>
                        }
                        <Button variant={this.props.isUpdate ? 'warning' : 'primary'} type='submit'>
                            {this.props.isUpdate ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}

export default ProductModal;
