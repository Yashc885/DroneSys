import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Conduct from "./../../components/Conduct/Conduct.jsx";
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Conduct />
    <Footer />
    </div>
  );
}
