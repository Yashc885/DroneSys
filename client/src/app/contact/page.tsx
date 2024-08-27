import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import ContactForm from "./../../components/ContactForm/ContactForm.jsx";
import Footer from "./../../components/Common/Footer.jsx";
export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <ContactForm />
    <Footer />
    </div>
  );
}
