import Image from "next/image";
import Product from "../../../components/Product/Product.jsx";
import { NavbarSimple } from "../../../components/Common/Navbar";

export default function Home() {
  return (
    <div>
    <NavbarSimple />
      <Product />
    </div>
  );
}
