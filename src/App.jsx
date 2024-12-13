import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar.jsx'
import Main from './assets/components/Main.jsx'
import About from './assets/components/About.jsx'
import Tech from './assets/components/Tech.jsx'
import Experience from './assets/components/Experience.jsx'
import Contact from './assets/components/Contact.jsx'

function App() {


  return (
    <>
      <div class="fixed h-screen -z-10 ">
        <div class="fixed inset-0 ">
          <div class="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:bottom-0 [&>div]:left-[-15%] [&>div]:right-0 [&>div]:top-[05%] [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
          <div>
          </div>
              <div class="relative h-full w-full   [&>div]:absolute [&>div]:bottom-0 [&>div]:left-[260%]  [&>div]:top-[70%] [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
              <div>
              </div>
            
              </div>
              </div>
    
          </div>
        </div>
        <Navbar />
        <Main />
        <About />
        <Tech />
        <Experience />
        <Contact />
      </>
      )
}

      export default App
