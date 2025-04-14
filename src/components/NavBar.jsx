import React, { useState } from 'react'
import Modal from './Modal'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  function toggleModal() {
      setOpen(!open)
    }
  return (
    <>
    {
      open && <Modal 
      toggleModal={toggleModal}/>

    }
    <nav className="md:flex justify-between items-center">
      <img src="/icons/logo.svg" alt="" />
      {/* <!-- boton --> */}
      <div className="flex justify-center my-6 md:mx-5 md:my-4 " id="abrirModal">
        <button
          className="w-68 h-10 flex items-center shadow-[0px_1px_4px_1px_rgb(0,0,0,0.2)] rounded-lg divide-x divide-gray-200 cursor-pointer "
           onClick={toggleModal}>
          <div className="h-full flex items-center px-3.5 text-neutral-300">Add location</div>
          <div className="h-full flex items-center px-3.5 text-neutral-300">Add guests</div>
          <img src="/icons/search.svg" alt="" className="w-5 mx-2.5" />
        </button>
      </div>
      </nav>
      </>)
}
