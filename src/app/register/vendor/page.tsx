import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
import RegisterVendor from './../../../components/Register/RegisterVendor.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <RegisterVendor />
    <Footer />
    </div>
  );
}
