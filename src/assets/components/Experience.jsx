import React from 'react'
import {Projects} from '/public/data.js'

const Experience = () => {
  return (
    <>
    <div className='experience flex flex-col gap-20 w-full justify-center p-2 border-b-2 border-slate-400 pb-10'>
        <h1 className='text-4xl font-thin text-slate-50 text-center mt-10'>Experience</h1>
      <div className="container items-center mx-auto">
    <div className="packet flex flex-col justify-center items-center align-middle gap-16">
        {Projects.map((project, index) => (
            <div key={index} className='flex flex-col-reverse md:flex-row  gap-16 md:justify-between w-full '>
                <img src={project.image} width={350}   className="rounded-xl mx-auto " alt="Project Image" />
                <div className="text text-center">
                <h1 className='text-2xl font-semibold italic text-slate-50 mt-10'>{project.name}</h1>
                <p className='text-slate-400 w-3/4 text-wrap mx-auto'>{project.description}</p>
               {project.technologies.map((tech, index) => (
                 <span key={index} className='mr-2 px-2 py-1 rounded bg-neutral-800 text-sm font-medium text-purple-500'>{tech}</span>
               ))}
                </div>
            </div>
        ))}
    </div>
      </div>
    </div>
    </>
  )
}

export default Experience
