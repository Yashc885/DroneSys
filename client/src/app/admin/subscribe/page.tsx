import Image from "next/image";
import Subscribe from './../../../components/AdminPage/Subscribe/Subscribe.jsx'
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import Footer from './../../../components/Common/Footer.jsx';
export default function Home() {
  return (
    <div>
        <NavbarSimple />
        <Subscribe />
    </div>
  );
}
