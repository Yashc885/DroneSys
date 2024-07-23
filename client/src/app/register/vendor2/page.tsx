import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
import RegisterVendor2 from './../../../components/Register/RegisterVendor2.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <RegisterVendor2 />
    <Footer />
    </div>
  );
}
