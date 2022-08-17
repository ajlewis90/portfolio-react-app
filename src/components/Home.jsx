import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import alexweddingdp from "../assets/alexweddingdp.jpg"
import {Link} from 'react-scroll'


const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick=()=> setNav(!nav)
  return (
    
  <div className='bg-gradient-to-t from-[#0a192f] via-teal-900 to-slate-800 background-animate'>
    <div name='home'className="w-full h-[1000px] " >

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[900px]' >
        <div  style={{backgroundImage:`url(${alexweddingdp})`}} className='h-[300px] w-[300px] bg-contain bg-no-repeat rounded-full mx-auto p-44'> </div>
          <p className='text-green-600  pt-4 pl-2 text-base font-normal'>Hi, my name is </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#eeeeee]'>Alex Hughes.</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#f8f8f8]'>Portfolio.</h2>
          <p className='text-white pt-2 max-w-[700px] pl-2 text-base font-normal'> Please take a look around. </p>
          
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 mx-2 flex items-center hover:bg-green-600 hover:border-green-600'><Link onClick={handleClick}  to="work"  smooth={true}  duration={500}>View Work</Link>
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-4 '/></span>
              </button>
            </div>
        </div>
      </div>
      </div>
    
  
  )
}

export default Home