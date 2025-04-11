import React, { useState } from 'react'
import BotonMasMenos from './BotonMasMenos'
import ListaLugar from './ListaLugar'

export default function Modal() {
const [location,setLocation]=useState("")
const handleChange=(e)=>{setLocation(e.target.value)}

const [guests,setGuests]=useState("")
const handleNumber=(e)=>{setGuests(e.target.value)}

return (
    <div className=" h-140 w-full fixed top-0 z-10 bg-white  md:h-85" id="modal-content">
          <div className="font-semibold flex justify-between p-5">
            <span className="md:hidden">Edit your search</span>
            <button className="text-3xl cursor-pointer md:hidden" id="closeMobile">&times;</button>
          </div>
          <div
            className=" w-80 rounded-3xl shadow-[0px_1px_4px_1px_rgb(0,0,0,0.2)] flex flex-col m-auto md:flex-row md:w-4/5 md:items-center md:divide-x md:divide-gray-200">
            <div className="flex flex-col p-3 md:w-1/3 border-b-1 border-b-gray-200 md:border-b-0">
              <label htmlFor="location">LOCATION</label>
              <input type="text" name="locat" placeholder="Add location" value={location} onChange={handleChange}
                className="shadow rounded-sm px-2" />
            </div>
            <div className="flex flex-col p-3 md:w-1/3">
              <label htmlFor="guests">GUESTS</label>
              <input type="text" name="gues" placeholder="Add guests" value={guests} onChange={handleNumber}
                className="shadow rounded-sm px-2" />
            </div>
            {/* <!-- SEARCH --> */}
            <div
              className=" absolute bottom-10 right-1/2 translate-1/2 text-white md:h-full md:static md:translate-0 md:flex md:justify-center md:items-center md:text-white md:w-1/3">
              <button className="flex px-5 py-2 border rounded-3xl bg-[#eb5757] cursor-pointer hover:bg-rose-700"
                id="search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="white" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>search</button>
            </div>
          </div>

          {/* <!-- lista --> */}
          <ListaLugar
          location={location}
          setLocation={setLocation}
          />

          {/* <!-- MAS+ -MENOS --> */}
          <BotonMasMenos
          setGuests={setGuests}
          />
        </div>
  )
}
