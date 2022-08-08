import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4'>
        <div className='max-w-screen-lg flex flex-col justify-center w-full h-full mx-auto' >
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4  hover:text-gray-500 hover:border-gray-500 cursor-pointer'>About</p>
            </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laudantium, magni ipsum commodi laboriosam molestias, doloremque dolor vel distinctio cumque quas in dolores quibusdam impedit, tempora non? Dolorem, at in.
                    Voluptate, quisquam suscipit! Nostrum laboriosam repellendus velit adipisci soluta ea,  tempora dolores eum aut?
                </p>
            <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias reprehenderit quaerat laudantium voluptatem tempore fuga laboriosam, tenetur quasi sequi, fugiat temporibus et exercitationem. Harum vel incidunt veniam eos velit! Dolore officiis magnam libero mollitia similique illum? Doloremque, veritatis. Sequi dolores obcaecati laudantium, magni molestias alias ex mollitia distinctio ea?
                </p>
        </div>
    </div>
  )
}

export default About