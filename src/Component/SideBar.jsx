import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, toggleMenu }) => {
  const [jobsOpen, setJobsOpen] = useState(false);
  const [fintechOpen, setFintechOpen] = useState(false); 
  const navigate = useNavigate();

  const handleJobsClick = () => {
    setJobsOpen(!jobsOpen);
  };

  const handleFintechClick = () => {
    setFintechOpen(!fintechOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-[100vh] w-64 bg-gray-700 text-white z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Close Button */}
        <button onClick={toggleMenu} className="self-end text-white">
          <X size={24} />
        </button>

        {/* Menu Links */}
        <Link to="/" onClick={toggleMenu} className="hover:text-blue-400">
          Home
        </Link>

         <a
          href="https://firsttracksolutiontechnologies.com/about"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          About
        </a>

         <a
        href="https://fts.firsttracksolutiontechnologies.com/loan"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-blue-400"
        >
        Loan
        </a>

        <a
        href="https://fts.firsttracksolutiontechnologies.com/insurance"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-blue-400"
        >
        Insurance
        </a>

        <a
        href="https://fts.firsttracksolutiontechnologies.com/credit-card"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-blue-400"
        >
        Credit Card
        </a>

           

        <a
          href="https://firsttracksolutiontechnologies.com/career"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          Career
        </a>
        
        <a
          href="https://firsttracksolutiontechnologies.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          Contact
        </a>

       
      </div>
    </div>
  );
};

export default Sidebar;