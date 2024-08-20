import Image from "next/image";
import Successful from './../../../components/superuser/Successful.jsx';
import Navbar from './../../../components/superuser/Navbar.jsx';
export default function Home() {
  return (
    <div>
        <Navbar />
    <Successful />
    </div>
  );
}
