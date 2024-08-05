'use client';
import React from 'react';
import Image from 'next/image';
import imageone from '../../assets/product/shoeone.jpg';
import imagetwo from '../../assets/product/shoetwo.jpg';
import imagethree from '../../assets/product/shoethree.jpg';
import imagefour from '../../assets/product/shoefour.jpg';
import imagefive from '../../assets/product/shoefour.jpg';

const images = [imageone, imagetwo, imagethree, imagefour , imagefive];

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

class ImageCarousel extends React.Component {
    state = { shown: imagefour };

    onImageClick = (image) => {
        this.setState({ shown: image });
    };

    showPics = images.map((image, key) => (
        <div key={key} onClick={() => this.onImageClick(image)}>
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
    ));

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.mainDisplay}>
                    <Image
                        src={this.state.shown}
                        alt="Main display"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        fill
                    />
                </div>
                <div style={styles.miniDisplay}>
                    {this.showPics}
                </div>
            </div>
        );
    }
}

export default ImageCarousel;
