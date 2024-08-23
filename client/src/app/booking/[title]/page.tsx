'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Booking from "../../../components/Booking/Booking";
import { NavbarSimple } from "../../../components/Common/Navbar";
import Footer from "../../../components/Common/Footer";

const BookingPage = () => {
    const { title } = useParams();
    const [drone, setDrone] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/drone-services?title=${title}`);
                console.log(response.data);
                setDrone(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [title]);

    return (
        <div>
            <NavbarSimple />
            {drone ? (
                <Booking drone={drone} />
            ) : (
                <p>Loading...</p> 
            )}
            <Footer />
        </div>
    );
}

export default BookingPage;
