import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Faq from "./../../components/Faq/Faq.jsx";
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Faq />
    <Footer />
    </div>
  );
}
