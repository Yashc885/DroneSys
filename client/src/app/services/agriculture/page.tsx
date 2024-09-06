import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Agriculture from './../../../components/Services/Agriculture.jsx';
import Footer from './../../../components/Common/Footer.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Agriculture />
    <Footer />
    </div>
  );
}
