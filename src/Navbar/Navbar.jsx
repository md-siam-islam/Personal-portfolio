import { TiChevronRightOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div className="navbar  fixed top-0 left-0 bg-gray-800 bg-opacity-50  shadow-lg z-50 w-full px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li>
              <a><NavLink className={'uppercase font-bold text-white'}>Home</NavLink></a>
            </li>
            <li>
            <a><Link to="about" smooth={true} duration={500} ><NavLink className={'uppercase font-bold text-white'}>About</NavLink></Link></a>
            </li>
            <li>
            <a><Link to="skill" smooth={true} duration={500} ><NavLink className={'uppercase font-bold text-white'}>Skills</NavLink></Link></a>
            </li>
            <li>
              <a><NavLink className={'uppercase font-bold text-white'}>Projects</NavLink></a>
            </li>
            <li>
              <a ><Link to="contact" smooth={true} duration={500}><NavLink className={'uppercase font-bold text-white'}>Contact</NavLink></Link></a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-3xl text-2xl text-[#0A3981] uppercase"> siam.i</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a><NavLink to={"/"} className={'uppercase font-bold text-white'}>Home</NavLink></a>
            </li>
            <li>
              <a><Link to="about" smooth={true} duration={500} ><NavLink className={'uppercase font-bold text-white'}>About</NavLink></Link></a>
            </li>
            <li>
              <a><Link to="skill" smooth={true} duration={500} ><NavLink className={'uppercase font-bold text-white'}>Skills</NavLink></Link></a>
            </li>
            <li>
              <a><Link to="project" smooth={true} duration={500} ><NavLink className={'uppercase font-bold text-white'}>project</NavLink></Link></a>
            </li>
            
            <li>
              <a ><Link to="contact" smooth={true} duration={500}><NavLink className={'uppercase font-bold text-white'}>Contact</NavLink></Link></a>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#0A3981] text-white font-bold">HIRE ME<TiChevronRightOutline /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
