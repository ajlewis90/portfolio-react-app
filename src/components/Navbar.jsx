import React , {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logoah from '../assets/logoah.png'
import {Link} from 'react-scroll'


const useNavbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick=()=> setNav(!nav)

  return (
   <nav>
    <div className='fixed w-full h-[100px] flex justify-between items-center px-12  from-[#0a192f] text-gray-300 '>
      
      {/* Logo */}
      <div>
        <img className='hidden  sm:flex' src = {logoah} alt = "logo image" style={{width: '80px'}} />
      </div>

      {/* Menu  */}
      <ul  className='hidden  md:flex'>
        <li className='hover:underline '><Link  to="home"  smooth={true}  duration={500}>Home</Link ></li>
        <li className='hover:underline'><Link  to="about"  smooth={true}  duration={500}>About</Link></li>
        <li className='hover:underline'><Link  to="skills"  smooth={true}  duration={500}>Skills</Link></li>
        <li className='hover:underline'><Link  to="work"  smooth={true}  duration={500}>Work</Link></li>
        {/* <li className='hover:underline'><Link  to="contact"  smooth={true}  duration={500}>Contact</Link></li> */}
      </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 content-bar ' >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

         {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen opacity-90 bg-gradient-to-t from-[#0a192f] via-teal-900 to-slate-800 flex flex-col justify-center items-center '}>
          <li className='py-6 text text-4xl hover:underline'><Link onClick={handleClick}  to="home"  smooth={true}  duration={500}>Home</Link></li>
          <li className='py-6 text text-4xl hover:underline'><Link onClick={handleClick} to="about"  smooth={true}  duration={500}>About</Link></li>
          <li className='py-6 text text-4xl hover:underline'><Link onClick={handleClick} to="skills"  smooth={true}  duration={500}>Skills</Link></li>
          <li className='py-6 text text-4xl hover:underline'><Link onClick={handleClick} to="work"  smooth={true}  duration={500}>Work</Link></li>
          {/* <li className='py-6 text text-4xl hover:underline'><Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>Contact</Link> </li> */}
          
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flec-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/alexander-hughes-856a31a7/">
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Mrmcmxc">
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                CV <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>

        </div> 


      </div>
      </nav>
    
  )
}

export default useNavbar

