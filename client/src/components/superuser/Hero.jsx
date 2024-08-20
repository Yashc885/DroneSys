'use client'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RegisterAdmin from './../Register/RegisterAdmin.jsx';
import DashboardHero from './DashboardHero.jsx';

// Dummy components for routes
const Dashboard = () => <div><Dashboard /></div>;
const Vendors = () => <div>Vendors</div>;
const Users = () => <div>Users</div>;
const Admins = () => <div><RegisterAdmin /></div>;
const Grievance = () => <div>Grievance</div>;

const Hero = () => {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="">
          <div className="md:flex">
            <div className="w-[35%]">
              <Sidebar />
            </div>
            <div className="w-[65%] p-4">
              <Routes>
                <Route path="/superuser/vendor" element={<Vendors />} />
                <Route path="/superuser/user" element={<Users />} />
                <Route path="/superuser/admin" element={<Admins />} />
                <Route path="/superuser/grievance" element={<Grievance />} />
                <Route path="/superuser/home" element={<DashboardHero />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Hero;
