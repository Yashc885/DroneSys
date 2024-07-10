import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
import Login from './../../../components/Login/LoginVendor.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Login />
    <Footer />
    </div>
  );
}
 