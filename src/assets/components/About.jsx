import React from 'react'
import Profile from '/src/assets/profile.jpg'
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})
const About = () => {
  return (
    <>
      <div className="about flex gap-4 w-fit mx-auto p-12">
        <h1 className='text-4xl font-thin text-slate-50 text-center mt-10'>About</h1>
        <h1 className='text-4xl font-thin text-slate-600 text-center mt-10'>Me</h1>
      </div>
      <div className="container flex flex-col md:flex-row justify-center gap-6 md:gap-44 lg:gap-60 align-center items-center my-auto p-8 border-b-2 border-slate-400 md:max-w-7xl mx-auto">
       

        <div className="summary flex flex-wrap text-wrap text-center text-white items-center">
          <motion.span className='text-center mx-auto w-3/4'
          variants={container(0)}
          initial="hidden"
          whileInView="show">
          As a passionate and driven Software Engineer, I possess a robust skill set in front-end development and beyond. My expertise spans HTML, CSS, JavaScript, and React, allowing me to craft responsive and dynamic web applications.
          </motion.span >
            <motion.span className='text-center mx-auto w-3/4'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 ,delay:0.5}}
            >
              I enhance user interfaces with the precision and elegance of Tailwind CSS and build robust server-side functionalities with Node.js.Additionally, my foundation in C++, Object-Oriented Programming (OOP), and basic Linux commands equips me with the versatility to tackle various technical challenges.
            </motion.span >
            <motion.span className='text-center mx-auto w-3/4'
            variants={container(1)}
            initial="hidden"
            whileInView="show">
            Currently, I am deepening my knowledge in Data Structures and Algorithms (DSA) to optimize problem-solving strategies and improve code efficiency. This continuous pursuit of learning reflects my commitment to staying ahead in the ever-evolving tech landscape.
            </motion.span >
        
      </div>
      </div>
      
    </>
  )
}

export default About
