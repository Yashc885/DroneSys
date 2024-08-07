import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Privacy from "./../../components/Privacy/Privacy.jsx";
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Privacy />
    <Footer />
    </div>
  );
}
