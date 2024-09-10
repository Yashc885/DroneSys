'use client';
import React from 'react';
import ImageDescription from './ImageDescription';
import ImageCarousel from './ImageCarousel';

const Product = ({ drone }) => {
    if (!drone || !drone.images) return <div>No drone data available</div>;

    // Map through drone images if available
    const images = drone.images.map(image => image.path);

    return (
        <div className="product-container p-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <ImageCarousel images={drone.images} /> {/* Pass the entire images array */}
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                    <ImageDescription drone={drone} />
                </div>
            </div>
        </div>
    );
}

export default Product;
