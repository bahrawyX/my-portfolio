import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
return (
    <>
    <nav className="background-color:hsl(218 12% 18%)"> 
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

      </div>
      <div className="flex items-center w-full justify-between">
          <div className="flex">
          <NavLink to="/" style={{display: 'contents'}}> <img className="h-8 w-auto" src="../images/logo.svg" alt="Bahrawy" /> <span  className='logoText px-2 text-2xl'>Bahrawy</span></NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <NavLink to="/" className=" text-white rounded-md px-3 py-2 text-sm font-medium" ><span className='hash'>#</span>Home</NavLink>
              <NavLink to="/projects" className= "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><span className='hash'>#</span>Projects</NavLink>
              <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><span className='hash'>#</span>About</NavLink>
              <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><span className='hash'>#</span>Contact</NavLink>
            </div>
          </div> 
        </div>

      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

      </div>
    </div>
  </div>
  {/* Mobile menu, show/hide based on menu state. */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>

    </>
)
}

export default Navbar