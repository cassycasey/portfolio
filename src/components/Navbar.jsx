import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav)

    return(
        <div className="fixed w-full h-[70px] flex justify-between px-4 pt-6 bg-[#0a192f] text-center flex-row">
            <div className="text-white">
                <h1 className="font-bold text-2xl">Daniels<span className="text-rose-800">Portfolio</span></h1>
            </div>

                {/* Menu */}
                <ul className="hidden md:flex pr-5 gap-5 md:gap-x-9 text-white font-bold">
                    <li className="px-6 border-pink-700 hover:border-b-2 hover:text-pink-700 cursor-pointer">
                    <Link to="home" smooth={true} duration={500}>
                      Home
                    </Link>
                    </li>

                    <li className="px-6 border-pink-700 hover:border-b-2 hover:text-pink-700 cursor-pointer">
                    <Link to="about" smooth={true} duration={500}>
                      About
                    </Link>
                    </li>

                    <li className="px-6 border-pink-700 hover:border-b-2 hover:text-pink-700 cursor-pointer">
                    <Link to="projects" smooth={true} duration={500}>
                      Projects
                    </Link>
                    </li>

                    <li className="px-6 border-pink-700 hover:border-b-2 hover:text-pink-700 cursor-pointer">
                    <Link to="skills" smooth={true} duration={500}>
                      Skills
                    </Link>
                    </li>

                    <li className="px-6 border-pink-700 hover:border-b-2 hover:text-pink-700 cursor-pointer">
                    <Link to="contact" smooth={true} duration={500}>
                      Contacts
                    </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div onClick={handleNav} className="block md:hidden z-10">
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile Menu */}
                <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                    <li className="py-6 text-4xl border-pink-700 hover:border-b-2 hover:text-pink-700">
                      <Link onClick={handleNav} to="home" smooth={true} duration={500}>
                        Home
                      </Link>
                    </li>

                    <li className="py-6 text-4xl border-pink-700 hover:border-b-2 hover:text-pink-700">
                      <Link onClick={handleNav} to="about" smooth={true} duration={500}>
                        About
                      </Link>
                    </li>

                    <li className="py-6 text-4xl border-pink-700 hover:border-b-2 hover:text-pink-700">
                      <Link onClick={handleNav} to="projects" smooth={true} duration={500}>
                        Projects
                      </Link>
                    </li>

                    <li className="py-6 text-4xl border-pink-700 hover:border-b-2 hover:text-pink-700">
                      <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
                        Skills
                      </Link>
                    </li>

                    <li className="py-6 text-4xl border-pink-700 hover:border-b-2 hover:text-pink-700">
                      <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                    </li>
                </ul>


        </div>
    );
}

export default Navbar;
