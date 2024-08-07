// ImageSlider.jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the default CSS

const ImageSlider = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default ImageSlider;
