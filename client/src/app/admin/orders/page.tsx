import Image from "next/image";
import Orders from './../../../components/AdminPage/Orders/Orders.jsx'
import Admin from './../../../components/AdminPage/Admin.jsx';
export default function Home() {
  return (
    <div>
      <Admin />
        <Orders />
    </div>
  );
}
