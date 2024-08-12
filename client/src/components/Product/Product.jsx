'use client';
import React from 'react';
import ImageDescription from './ImageDescription';
import ImageCarousel from './ImageCarousel';

const Product = ({ drone }) => {
    // console.log("Product Component:", drone); 
    
    if (!drone) return <div>No drone data available</div>;

    // Assuming drone.images contains an array of image objects with 'path' properties
    const images = drone.images.map(image => image.path);

    return (
        <div className="product-container p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <ImageCarousel images={images} /> 
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                    <ImageDescription drone={drone} />
                </div>
            </div>
        </div>
    );
}

export default Product;
