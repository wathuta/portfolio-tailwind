import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'



const Portfolio = () => {
    const portfolio =[
        {
            id:1,
            src:arrayDestruct
            // add links
        },
        {
            id:2,
            src:reactParallax
            //add link
        },
        {
            id:3,
            src:navbar
            //add link
        },
        {
            id:4,
            src:reactSmooth
            //add link
        },
        {
            id:5,
            src:installNode
            //add link
        },
        {
            id:6,
            src:reactWeather
            //add link
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  hover:text-gray-500 hover:border-gray-500 cursor-pointer'>Portfolio</p>
                <p className='py-6'>Check Out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {/* Cards */}
            {
                portfolio.map(({id,src})=>(
                    
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded:md hover:scale-105 duration-200' />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 hover:scale-105 duration-200' >Demo</button>
                        <button className='w-1/2 px-6 py-3 hover:scale-105 duration-200'>Code</button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio