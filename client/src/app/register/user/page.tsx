import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
import RegisterUser from './../../../components/Register/RegisterUser.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <RegisterUser />
    <Footer />
    </div>
  );
}
