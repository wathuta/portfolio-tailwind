import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
    const Links = [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "http://linkedin.com",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "http://github.com/wathuta",
        },
        {
            id:3,
            child:(
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:wathutabrian@gmail.com",
        },
        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style:'rounded-br-md',
            download:true, 
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                Links.map(({id,child,href,style,download})=>(

            <li  key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded duration-300 hover:ml-[-5px]  bg-gray-500' +" "+style}>
                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="_blank">
                    <>
                        {child}
                    </>
                </a>
            </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SocialLinks