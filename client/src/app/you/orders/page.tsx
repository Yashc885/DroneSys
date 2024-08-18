import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import YourOrders from './../../../components/YourOrders/YourOrders.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <YourOrders />
    <Footer />
    </div>
  );
}
