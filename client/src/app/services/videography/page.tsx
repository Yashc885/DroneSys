import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Videography from './../../../components/Services/Videography.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Videography />
    </div>
  );
}
