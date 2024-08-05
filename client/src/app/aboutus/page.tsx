import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import About from "./../../components/About/About.jsx";
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <About />
    <Footer />
    </div>
  );
}
