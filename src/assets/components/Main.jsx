import React from 'react'
import Profile from '/src/assets/profile.jpg'
import {motion} from 'framer-motion'

const container = (delay)=>({
  hidden : {x:-100,opacity:0},
  show : {
    x:0,
    opacity:1,
    transition : {duration : 0.5, delay : delay }
  }
})
const Main = () => {
  return (
    <>
    <div className="packet w-full">
      <div className="container flex flex-col md:flex-row justify-center gap-6 md:gap-44 lg:gap-60 items-center my-auto p-8 border-b-2 border-slate-400 md:max-w-7xl mx-auto">
        <div className="textcontent text-w flex flex-col gap-2 ">
            <div className="name flex flex-col gap-4">
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          whileInView="show"
          className='text-4xl font-thin text-slate-50 '>Abdul Moeez</motion.h1>
          <motion.span 
             variants={container(0.5)}
             initial="hidden"
             animate="show"
          className='text-xl font-bold italic bg-gradient-to-r from-purple-900 via-slate-400 to-rose-300 bg-clip-text text-transparent tracking-tight'>Front-end Developer</motion.span>
          </div>
          <div className="summary flex flex-wrap text-wrap w-auto text-white">
            <motion.p
               variants={container(1)}
               initial="hidden"
               whileInView="show">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut quasi aliquid eaque illo odio nam dicta soluta. Similique veniam, id voluptate atque incidunt molestias nobis consectetur! Repudiandae, ut quod!</motion.p>
          </div>
        </div>
        <div className="visualcontent w-full lg:w-1/2 lg:p-8 mt-5 ">
          <motion.img
            
            
          initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration : 0.5,delay : 0.8}}
           src={Profile} alt="" className='rounded-xl' width={"800px"}/>
        </div>
      </div>

    </div>
    </>
  )
}

export default Main
