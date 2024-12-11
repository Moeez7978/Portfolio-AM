import React from 'react'
import Profile from '/src/assets/profile.jpg'

const About = () => {
  return (
    <>
    <div className="about flex gap-4 w-fit mx-auto p-2">
    <h1 className='text-4xl font-thin text-slate-50 text-center mt-10'>About</h1>
    <h1 className='text-4xl font-thin text-slate-600 text-center mt-10'>Me</h1>
    </div>
      <div className="container flex flex-col md:flex-row justify-between gap-6 md:gap-44 lg:gap-60 align-center items-center my-auto p-8 border-b-2 border-slate-400 w-fit mx-auto">
        <div className="visualcontent w-full lg:w-1/2 lg:p-8 mt-5 ">
          <img src={Profile} alt="" className='rounded-xl ' width={"800px"} />
        </div>
        <div className="textcontent text-w flex flex-col gap-2 ">
            <div className="name flex flex-col gap-4">
          <h1 className='text-4xl font-thin text-slate-50 '>Abdul Moeez</h1>
          <span className='text-xl font-bold italic bg-gradient-to-r from-purple-900 via-slate-400 to-rose-300 bg-clip-text text-transparent tracking-tight'>Front-end Developer</span>
          </div>
          <div className="summary flex flex-wrap text-wrap w-auto text-white">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut quasi aliquid eaque illo odio nam dicta soluta. Similique veniam, id voluptate atque incidunt molestias nobis consectetur! Repudiandae, ut quod!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
