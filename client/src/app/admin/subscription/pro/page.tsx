import Image from "next/image";
import Payment2 from './../../../../components/Payment/Payment2.tsx';
import {NavbarSimple} from './../../../../components/Common/Navbar.jsx';
export default function Home() {
  return (
    <div>
        <NavbarSimple />
        <Payment2 />
    </div>
  );
}
