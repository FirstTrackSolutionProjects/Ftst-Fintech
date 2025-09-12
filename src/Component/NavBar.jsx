import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./SideBar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [fintechOpen, setFintechOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleFintechClick = () => setFintechOpen(!fintechOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Link to="/" className="flex items-center gap-2" onClick={closeMenu}> */}
           <a href="https://firsttracksolutiontechnologies.com" target="_blank" rel="noopener noreferrer">
            <img src="/companylogo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          </a>

            <span className="font-bold text-md leading-tight">
              First Track <br /> Solution Technologies
            </span>
          {/* </Link> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-black font-medium items-center">
          <Link to="/" className="hover:underline" onClick={closeMenu}>Home</Link>
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

            {/* <Link to="/career" className="hover:underline"  onClick={closeMenu}>Career</Link> */}

          <a
          href="https://firsttracksolutiontechnologies.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="hover:text-blue-400"
        >
          Contact
        </a>
        
          <Link to="/partner" className="hover:underline" onClick={closeMenu}>Partner</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-black p-2 rounded">
          <Menu size={40} />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <Sidebar isOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
    </>
  );
};

export default NavBar;