import Image from "next/image";
import {NavbarSimple} from './../../components/Common/Navbar.jsx';
import dynamic from 'next/dynamic';

const ListView = dynamic(() => import('../../components/ListView/ListView'), {
  ssr: true, 
});

export default function Home() {
  return (
    <div>
    <NavbarSimple />
    <ListView />
    </div>
  );
}
