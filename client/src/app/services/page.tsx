import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import Services from "./../../components/Services/Services.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Services />
    </div>
  );
}
