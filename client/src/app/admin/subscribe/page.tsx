import Image from "next/image";
import Subscribe from './../../../components/AdminPage/Subscribe/Subscribe.jsx'
import Admin from './../../../components/AdminPage/Admin.jsx'
import Footer from './../../../components/Common/Footer.jsx';
export default function Home() {
  return (
    <div>
        <Admin />
        <Subscribe />
    </div>
  );
}
