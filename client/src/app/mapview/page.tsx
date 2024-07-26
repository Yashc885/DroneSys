import Image from "next/image";
import Mapview from "./../../components/mapview/Mapview.jsx";
import {NavbarSimple} from "./../../components/Common/Navbar.jsx"
export default function Home() {
  return (
    <div>
      <NavbarSimple />
    <Mapview />
    </div>
  );
}
