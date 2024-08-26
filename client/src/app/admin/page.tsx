import Image from "next/image";
import Admin from "./../../components/AdminPage/Admin.jsx";
import VendorForm from './../../components/Login/VendorForm.tsx'
export default function Home() {
  return (
    <div>
        <Admin />
        <VendorForm />
    </div>
  );
}
