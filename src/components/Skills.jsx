import React, { Component } from 'react'
import Firebase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import CPP from'../assets/C++.png'

const Skills = () => {
  return (
    <div name= 'skills' className='w-full h-screen bg-gradient-to-t from-[#0a192f] via-teal-900 to-slate-800 text-gray-300'>
        {/* container for text */}
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-green-600 '> Skills</p>
                <p className='py-4 text-base '>// These are the technologies i have worked with and still learning</p>
            </div>

            {/* container for the grid and icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                    <a href=""></a>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPP} alt="C++ icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
                    <p className='my-4'>Firebase</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills