import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Booking from "../../../components/Booking/Booking.jsx";
import Footer from "./../../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Booking />
    <Footer />
    </div>
  );
}
