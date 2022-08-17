import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'



const About = () => {
  const [nav, setNav] = useState(false)
  const handleClick=()=> setNav(!nav)
  return (

    <div name='about' className='w-full h-[1000px] bg-gradient-to-b from-[#0a192f] to-slate-800 text-gray-300 '>

      <div className='flex flex-col justify-center items-center w-full h-full sm:h-80%'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
          <div  className='sm: pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>My Journey</p>
          </div>
          <div className='bg-cover w-full h-full' ></div>
          </div>
          <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm: text-4xl font-bold pl'>
              <p> Hi, Nice to meet you.</p>
              <div className='text-base font-normal'>
              <p> I am passionate about building excellent software that imporves the lives of users. I am currently retraining at Yoobee College. After 8 years in the Civil engineering field I felt I needed to follow my passion for tech.</p>
              <br />
              <p>At the begining of 2020 I began study with Yoobee  completing a Diploma in Web and UX Design. This sparked my curiosity further and I decided to continue on to the Bachelor of Software Engineering. My focus is to become a full stack developer.</p>
              <br />
              <p></p>

              <div>
              <button className='text-white text-sm group border-2 px-6 py-3 my-4 mr-2 flex items-center hover:bg-green-600 hover:border-green-600'>Blog (Coming Soon)
              <span className='group-hover:rotate-90 duration-300'></span>
              </button>
            </div>
            </div>
            </div>
            
            <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">January 2015-2020</time>
                    <h3 class="text-lg font-semibold  ">OPUS/WSP Civil Engineering</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">February 2020-2021</time>
                    <h3 class="text-lg font-semibold ">Yoobee Diploma in Web and UX Design</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2021-2023</time>
                    <h3 class="text-lg font-semibold">Yoobee - Bachelor of Software Engineering</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                </li>
              </ol>
            </div>
            
            </div>
          </div>




            
        
    

  )
}

export default About