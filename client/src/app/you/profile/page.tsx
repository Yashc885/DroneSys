import Image from "next/image";
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
import YourProfile from './../../../components/YourProfile/YourProfile.jsx';
import Footer from "./../../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <YourProfile />
    {/* <Footer /> */}
    </div>
  );
}
