import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Contact from "./../../components/Contact/Contact.jsx";
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Contact />
    <Footer />
    </div>
  );
}
