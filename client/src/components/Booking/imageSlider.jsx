// ImageSlider.jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the default CSS

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    originalWidth: 1000,
    originalHeight: 600,
    thumbnailWidth: 250,
    thumbnailHeight: 150,
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    originalWidth: 1000,
    originalHeight: 600,
    thumbnailWidth: 250,
    thumbnailHeight: 150,
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalWidth: 1000,
    originalHeight: 600,
    thumbnailWidth: 250,
    thumbnailHeight: 150,
  },
];

const ImageSlider = () => {
  return <ImageGallery items={images} />;
};

export default ImageSlider;
