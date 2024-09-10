'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Product from '../../../components/Product/Product';
import { NavbarSimple } from '../../../components/Common/Navbar';

const ProductPage = () => {
    const { title } = useParams();
    const [productInfo, setProductInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log(`Fetching data for title: ${title}`); // Debugging log
                const response = await axios.get(`/api/drone-services?title=${title}`);
                console.log('API Response:', response.data); // Debugging log
                setProductInfo(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data.");
            } finally {
                setLoading(false);
            }
        };

        if (title) {
            fetchData();
        } else {
            setError("No title provided.");
            setLoading(false);
        }
    }, [title]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <NavbarSimple />
            <div className="py-4 md:py-8">
                {productInfo ? <Product drone={productInfo} /> : <div>No product data available</div>}
            </div>
        </div>
    );
};

export default ProductPage;
