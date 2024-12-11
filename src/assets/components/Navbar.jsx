import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp, } from 'react-icons/fa6'
import { IconContext } from 'react-icons'
import './Navbar.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)

    }
    console.log(isOpen);
    return (
        <>
            <nav className='bg-transparent p-3 flex flex-row justify-between md:w-full border-b-2 border-slate-400'>
                <div className="pack flex flex-col md:flex-row md:justify-evenly md:w-full md:gap-28 ">
                <div className="logo flex justify-center items-center font-bold text-3xl cursor-pointer text-white">MZ</div>
                <ul className={` md:flex md:items-center md:gap-16 lg:gap-40 xl:gap-72 md:justify-between  w-full md:w-full ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="menu md:flex md:flex-row gap-5 justify-center items-center">
                            <li className="my-2 md:my-0 md:mx-2 text-white"> <a href="#" className="">Home</a> </li>
                            <li className="my-2 md:my-0 md:mx-2 text-white"> <a href="#" className="">About</a> </li>
                            <li className="my-2 md:my-0 md:mx-2 text-white"> <a href="#" className="">Services</a> </li>
                            <li className="my-2 md:my-0 md:mx-2 text-white"> <a href="#" className="">Contact</a> </li>
                        </div>
                        {/* list of icons */}
                        <div className="icons ">
                            <li className="my-2 md:my-0 md:mx-2"><div className="icons flex  flex-row gap-10 h-auto w-auto p-3 my-2 md:my-0 md:mx-2"> <IconContext.Provider value={{ size: "1.5em" ,color:"white"}}>
                                <a href="https://wa.me/+923227978911" target="_blank" ><FaWhatsapp /></a>
                                <a href="https://www.linkedin.com/in/abdul-moeez-64760529b/" target="_blank" ><FaLinkedin /></a>
                                <a href="https://github.com/Moeez7978" target="_blank" ><FaGithub /></a>

                            </IconContext.Provider></div>
                            </li></div>

                    </ul>
              </div>
                    <div className="md:hidden" onClick={toggleMenu}>
                        <button className="text-2xl text-white ">&#9776;</button>
                    </div>
                  
                  
                
        
         </nav >
        </>
    )
}

export default Navbar
