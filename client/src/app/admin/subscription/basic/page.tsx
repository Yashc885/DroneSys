import Image from "next/image";
import Payment from './../../../../components/Payment/Payment.tsx';
import {NavbarSimple} from './../../../../components/Common/Navbar.jsx';
export default function Home() {
  return (
    <div>
        <NavbarSimple />
        <Payment />
    </div>
  );
}
