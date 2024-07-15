import Image from 'next/image';

const ProductImg = ({ src, alt = "product image", className, style }) => {
    return (
        <div className={className} style={style}>
            <Image
                src={src ? src : 'https://dummyimage.com/400x400'}
                alt={alt}
                width={400}  // Adjust width according to your design
                height={400} // Adjust height according to your design
                layout="responsive" // Adjust layout based on your use case
            />
        </div>
    );
};

export default ProductImg;
