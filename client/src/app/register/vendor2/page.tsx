import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
// import RegisterVendor2 from './../../../components/Register/RegisterVendor2.jsx';
// import VendorForm from '../../../components/Login/VendorForm';
import VendorForm from './../../../components/Login/VendorForm';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <VendorForm />
    <Footer />
    </div>
  );
}
