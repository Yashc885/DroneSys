'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images = [] }) => {
    // Ensure images array has valid data
    const imageUrls = images.map(image => image.path);
    
    // Set the initial image to the first in the array, if it exists
    const [shown, setShown] = useState(imageUrls[0] || '');

    // Handle image click to change the displayed image
    const onImageClick = (image) => {
        setShown(image);
    };

    return (
        <div style={styles.container}>
            <div style={styles.mainDisplay}>
                {shown ? (
                    <Image
                        src={shown}
                        alt="Main display"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        fill
                    />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div style={styles.miniDisplay}>
                {imageUrls.map((image, key) => (
                    <div key={key} onClick={() => onImageClick(image)}>
                        <Image
                            src={image}
                            alt={`Thumbnail ${key}`}
                            style={styles.miniImg}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.miniImgHover.boxShadow}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                            width={80}
                            height={80}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '90%',
        margin: '0 auto',
    },
    mainDisplay: {
        width: '100%',
        height: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '20px',
        position: 'relative',
    },
    miniDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '4px',
        overflowX: 'auto',
    },
    miniImg: {
        width: '80px',
        height: '80px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
    },
    miniImgHover: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};

export default ImageCarousel;
