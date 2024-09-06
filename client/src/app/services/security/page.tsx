import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Security from './../../../components/Services/Security.jsx';
import Footer from './../../../components/Common/Footer.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Security />
    <Footer />
    </div>
  );
}
