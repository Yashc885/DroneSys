import React from 'react';
import ImageCarousel from './ImageCarousel';
import ImageDescription from './ImageDescription';

const Product = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="md:flex items-center ">
        <div className="w-full md:w-1/2 md:pr-4 ">
          <ImageCarousel />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <ImageDescription />
        </div>
      </div>
    </div>
  );
};

export default Product;
