import React from 'react'
import Modal from './Modal'

export default function NavBar() {
  return (
    
      <nav className="md:flex justify-between items-center">
        <img src="/icons/logo.svg" alt="" />
        {/* <!-- boton --> */}
        <div className="flex justify-center my-6 md:mx-5 md:my-4">
          <button
            className="w-68 h-10 flex items-center shadow-[0px_1px_4px_1px_rgb(0,0,0,0.2)] rounded-lg divide-x divide-gray-200 cursor-pointer "
            id="botonMobile">
            <div className="h-full flex items-center px-3.5 text-neutral-300">Add location</div>
            <div className="h-full flex items-center px-3.5 text-neutral-300">Add guests</div>
            <img src="/icons/search.svg" alt="" className="w-5 mx-2.5" />
          </button>
        </div>
        {/* <!-- modal contenido--> */}
        <Modal/>
      </nav>

  )
}
