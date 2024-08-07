import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Terms from './../../components/Terms/Terms.jsx'
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Terms />
    <Footer />
    </div>
  );
}
