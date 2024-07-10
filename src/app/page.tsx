import Image from "next/image";
import Hero from './../components/Hero/Hero.jsx';
import {NavbarSimple} from './../components/Common/Navbar.jsx';
import Customer from './../components/Customer/CustomerList.jsx';
import Service from "./../components/Service/Service.jsx";
import Footer from "./../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <Hero />
    <Service />
    <Customer />
    <Footer />
    </div>
  );
}
