import Image from "next/image";
import Admin from "./../../../components/AdminPage/Admin.jsx";
import Products from "./../../../components/AdminPage/Products/ProductList.jsx"
export default function Home() {
  return (
    <div>
      <Admin />
        <Products />
    </div>
  );
}
