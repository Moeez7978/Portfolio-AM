import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiJsBadge } from 'react-icons/di'

const Tech = () => {
    return (
        <>
                <h1 className='text-4xl font-thin text-slate-50 text-center mt-10'>Technologies</h1>
            <div className="container border-b-2 border-slate-400 p-24 mx-auto">
                <div className="packet flex flex-wrap justify-center items-center gap-6 ">
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <DiHtml5 className='text-4xl text-orange-700'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <DiCss3 className='text-4xl text-sky-700'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <DiJsBadge className='text-4xl text-yellow-400'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <SiTailwindcss className='text-4xl text-cyan-400'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <FaNodeJs className='text-4xl text-green-500'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-600 p-6'>
                <RiReactjsLine className='text-4xl text-cyan-500'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <TbBrandNextjs className='text-4xl text-white'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <SiMongodb className='text-4xl text-green-700'/>
                    </div>
                    <div className='rounded-2xl border-4 border-neutral-700 p-6'>
                <SiExpress className='text-4xl text-white'/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Tech
