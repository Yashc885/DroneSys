'use client'
import { useParams } from 'next/navigation';
import Product from '../../../components/Product/Product';
import data from '../../../components/ListView/db/data.js'; // Adjust the path as needed
import {NavbarSimple} from "../../../components/Common/Navbar.jsx";
const ProductPage = () => {
    const { title } = useParams(); // Get the title parameter from the URL

    // Normalize title from URL
    const normalizeTitle = (title) => {
        return title
            .replace(/_/g, ' ')          // Replace underscores with spaces
            .toLowerCase()               // Convert to lowercase
            .replace(/\s+/g, ' ')        // Replace multiple spaces with a single space
            .trim();                     // Remove leading and trailing spaces
    };
    const normalizedTitle = normalizeTitle(title);

    console.log("Title from URL:", title); // Debug: Check if title is correct
    console.log("Normalized Title:", normalizedTitle); // Debug: Check normalized title
    console.log("Data available:", data); // Debug: Check the data array

    // Find the product based on the normalized title
    const drone = data.find(item => normalizeTitle(item.title) === normalizedTitle);

    // Debug: Print matching process
    console.log("Data Titles for Matching:");
    data.forEach(item => console.log(`Data Title: ${item.title}, Normalized: ${normalizeTitle(item.title)}`));

    // Handle the case where no product is found
    if (!drone) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <NavbarSimple />
            <div className="py-4 md:py-8">
            <Product drone={drone} />
            </div>
        </div>
    );
}

export default ProductPage;
