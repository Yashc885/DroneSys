'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Product from '../../../components/Product/Product';
import { NavbarSimple } from '../../../components/Common/Navbar';

const ProductPage = () => {
    const { title } = useParams();
    const [productInfo, setProductInfo] = useState();
    console.log("title" , title)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/drone-services?title=${title}`);
                setProductInfo(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (title) {
            fetchData();
        }
    }, [title]);
    console.log(productInfo)

    return (
        <div>
            <NavbarSimple />
            <div className="py-4 md:py-8">
                <Product drone={productInfo} />
            </div>
        </div>
    );
};

export default ProductPage;
