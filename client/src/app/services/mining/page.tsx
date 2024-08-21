import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Mining from './../../../components/Services/Mining.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <Mining />
    </div>
  );
}
