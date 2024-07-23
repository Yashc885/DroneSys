import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import ListView from './../../components/ListView/ListView.jsx';
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <ListView />
    </div>
  );
}
