import React from 'react'
import CastMap from '../assets/castMapscreen.png'
import comingsoon from '../assets/comingsoon.jpg'
import dash from '../assets/dash.png'
import AHP from '../assets/AHP.png'
import AHPP from '../assets/AHPP.png'
import AHCL from '../assets/AHCL.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-b from-[#0a192f] to-slate-800'>
        {/* container for text  */}
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* container for grids and displaying work  WorkImg*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>




                {/* Grid Item */}
                <div style={{backgroundImage:`url(${CastMap})`}}
                className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            CastMap-Svelte-Firebase
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Mrmcmxc/CastMap-Svelte-Firebase.git"> 
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Github</button>
                            </a>
                        </div>
                    </div>
                </div>




                {/* Grid Item */}
                <div style={{backgroundImage:`url(${dash})`}}
                className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            BitTicket-C++-Qt 
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/Mrmcmxc/BitTicket-cpp-Qt">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Github</button>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Grid Item */}
                <div style={{backgroundImage:`url(${AHP})`}}
                className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Portfolio-React-JS
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://github.com/Mrmcmxc/React-JS-Tailwind-Portfolio.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Github</button>
                            </a>
                        </div>
                    </div>
                </div>




                {/* Grid Item */}
                <div style={{backgroundImage:`url(${AHPP})`}}
                className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Platinum Paws-E-Com
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://www.platinumpaws.co.nz/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Website</button>
                            </a>
                        </div>
                    </div>
                </div>



                {/* Grid Item */}
                <div style={{backgroundImage:`url(${AHCL})`}}
                className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            CelebratingLove-Website 
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="https://www.celebratinglove.co.nz/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Website</button>
                            </a>
                        </div>
                    </div>
                </div>




                {/* Grid Item */}
                <div style={{backgroundImage:`url(${comingsoon})`}}
                className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Coming soon 
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Coming Soon</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </div>

        </div>


   
  )
}

export default Work