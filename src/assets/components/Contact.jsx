import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact flex flex-col gap-4 w-fit mx-auto p-2">
        <h1 className='text-4xl font-thin text-slate-50 text-center mt-10'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
          <p className='text-slate-400 my-4'>Lahore, Punjab, Pakistan.</p>
          <a href="https://wa.me/+923227978911" target="_blank"><p className='text-slate-400 my-4'>+92-322-7978911</p></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=moeez7978911%40gmail.com" target='_blank'><p className='text-slate-400 my-4 underline'>moeez7978911@gmail.com</p></a>
        </div>
      </div>
    </>
  )
}

export default Contact
