import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Services from "./../../components/Services/Services.jsx";
import Footer from './../../components/Common/Footer.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Services />
    <Footer />
    </div>
  );
}
