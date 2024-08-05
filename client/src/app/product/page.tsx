import Image from "next/image";
import Product from "../../components/Product/Product.jsx";
import { NavbarSimple } from "../../components/Common/Navbar";
import data from '../../components/ListView/db/data.js'
export default function Home() {
    const dront = data[0];
  return (
    <div>
    <NavbarSimple />
      <Product drone={dront}/>
    </div>
  );
}