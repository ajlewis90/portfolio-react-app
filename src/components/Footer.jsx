import React, {useState} from 'react'
import logoah from '../assets/logoah.png'
import {Link} from 'react-scroll'

const Footer = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=> setNav(!nav)

  return (
    <footer class="p-4 shadow md:px-6 md:py-8 bg-slate-800">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img src= {logoah} class="mr-3 h-8" alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap "></span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href='/' class="mr-2 hover:underline md:mr-1 "><Link onClick={handleClick}  to="home"  smooth={true}  duration={500}>Home</Link></a>
            </li>
            <li>
                <a href='/' class="mr-2 hover:underline md:mr-1"><Link onClick={handleClick}  to="about"  smooth={true}  duration={500}>About</Link></a>
            </li>
            <li>
                <a href='/' class="mr-2 hover:underline md:mr-6 "><Link onClick={handleClick}  to="skills"  smooth={true}  duration={500}>Skills</Link></a>
            </li>
            
        </ul>
    </div>
    <hr class="my-6 border-green-600 sm:mx-auto dark:border-green-600 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Alex Hughes. All Rights Reserved.
    </span>
</footer>
  )
}

export default Footer