import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Checkout from './../../components/Checkout/Chechout.jsx';
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Checkout />
    <Footer />
    </div>
  );
}
