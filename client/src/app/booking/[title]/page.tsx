'use client';
import { useParams } from 'next/navigation';
import Booking from "../../../components/Booking/Booking";
import { NavbarSimple } from "../../../components/Common/Navbar";
import Footer from "../../../components/Common/Footer";
import data from '../../../components/ListView/db/data'; // Adjust the path as needed

const BookingPage = () => {
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

    // Find the drone based on the normalized title
    const drone = data.find(item => normalizeTitle(item.title) === normalizedTitle);

    // Handle the case where no drone is found
    if (!drone) {
        return <p>Drone not found</p>;
    }

    return (
        <div>
            <NavbarSimple />
            <Booking drone={drone} />
            <Footer />
        </div>
    );
}

export default BookingPage;
