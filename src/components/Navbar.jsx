





import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // Redux auth state (persisted)
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-blue-400 font-bold border-b-2 border-blue-400 pb-1"
      : "text-gray-300 hover:text-blue-400 transition-all duration-300";
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md px-6 md:px-20 py-4 flex items-center justify-between">

      {/* --- LEFT: LOGO --- */}
      <div className="flex items-center z-50">
        <Link to="/">
          <img
            src="/images/logo.PNG"
            alt="Logo"
            className="h-12 md:h-16 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* --- MIDDLE: NAV LINKS (Desktop) --- */}
      <ul className="hidden md:flex space-x-10 font-medium tracking-wide">
        <li><Link to="/" className={getLinkClass("/")}>Home</Link></li>
        <li><Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link></li>
        <li><Link to="/offers" className={getLinkClass("/offers")}>Offers</Link></li>
        <li><Link to="/blog" className={getLinkClass("/blog")}>Blog</Link></li>
        <li><Link to="/contact" className={getLinkClass("/contact")}>Contact Us</Link></li>

        {/* --- LOGIN / LOGOUT --- */}
        {/* {!isAuthenticated ? (
          <li>
            <Link to="/login" className="text-blue-400 font-bold hover:underline">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="text-red-400 font-bold hover:underline"
            >
              Logout
            </button>
          </li>
        )} */}
      </ul>

      {/* --- RIGHT: SEARCH & MOBILE HAMBURGER --- */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:flex items-center group">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 border border-white/20 text-white focus:border-blue-500 focus:bg-black/60 outline-none rounded-full py-2 px-4 pl-10 w-40 md:w-60 group-hover:w-72 transition-all duration-700 ease-in-out"
          />
          <Search className="absolute left-3 text-gray-400 w-4 h-4 group-focus-within:text-blue-400 transition-colors duration-700" />
        </div>

        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden flex flex-col items-center justify-center space-y-8 text-2xl`}
      >
        <ul className="text-center space-y-6">
          <li onClick={() => setIsOpen(false)}><Link to="/" className={getLinkClass("/")}>Home</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/offers" className={getLinkClass("/offers")}>Offers</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/blog" className={getLinkClass("/blog")}>Blog</Link></li>
          <li onClick={() => setIsOpen(false)}><Link to="/contact" className={getLinkClass("/contact")}>Contact Us</Link></li>
{/* 
          {!isAuthenticated ? (
            <li onClick={() => setIsOpen(false)}>
              <Link to="/login" className="text-blue-400 font-bold hover:underline">Login</Link>
            </li>
          ) : (
            <li onClick={() => { setIsOpen(false); handleLogout(); }}>
              <button className="text-red-400 font-bold hover:underline">Logout</button>
            </li>
          )} */}
        </ul>

        {/* Mobile search bar */}
        <div className="relative flex items-center mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 border border-white/20 text-white rounded-full py-3 px-6 pl-12 w-64 outline-none"
          />
          <Search className="absolute left-4 text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
