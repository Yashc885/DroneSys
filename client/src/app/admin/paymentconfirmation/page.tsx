import Image from "next/image";
import PaymentConfirmation from './../../../components/PaymentConfirmation/PaymentConfirmation.jsx'
import {NavbarSimple} from './../../../components/Common/Navbar.jsx';
export default function Home() {
  return (
    <div>
        <NavbarSimple />
        <PaymentConfirmation />
    </div>
  );
}
