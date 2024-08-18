import Image from "next/image";
import DashBoard from './../../../components/AdminPage/DashBoard/DasBoard.jsx'
import Admin from './../../../components/AdminPage/Admin.jsx';
export default function Home() {
  return (
    <div>
      <Admin />
        <DashBoard />
    </div>
  );
}
