import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Photography from './../../../components/Services/Photography.jsx';
import Footer from './../../../components/Common/Footer.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Photography />
    <Footer />
    </div>
  );
}
