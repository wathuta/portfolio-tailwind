import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"



const Experience = () => {
  const links = [
    {
      id:1,
      src: html,
      title:"HTML",
      styles:"shadow-orange-500" 
    },
    {
      id:2,
      src: css,
      title:"CSS",
      styles:"shadow-blue-500" 
    },
    {
      id:3,
      src: javascript,
      title:"Javascript",
      styles:"shadow-yellow-500" 
    },
    {
      id:4,
      src: reactImage,
      title:"REACT",
      styles:"shadow-blue-600" 
    },
    {
      id:5,
      src: tailwind,
      title:"TailWind",
      styles:"shadow-sky-400" 
    },
    {
      id:7,
      src: github,
      title:"Github",
      styles:"shadow-gray-400" 
    }
  ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4  hover:text-gray-500 hover:border-gray-500 cursor-pointer'>Experience</p>
                <p className='py-6'> These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
              {links.map(({id,src,title,styles})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${styles}`}>
                <img src={src} className="w-20 mx-auto" alt={title}/>
                <p className='mt-4'>{title}</p>
              </div>

              ))}
        </div>
        </div>
    </div>
  )
}

export default Experience