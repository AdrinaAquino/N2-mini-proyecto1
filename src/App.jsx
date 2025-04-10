import React from 'react'
import Cards from './components/Cards'

export default function App() {
  return (
    <div>

      {/* <!-- NAV --> */}
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
        <div className=" h-150 w-full fixed top-0 z-10 bg-white hidden md:h-85" id="modal-content">
          <div className="font-semibold flex justify-between p-5">
            <span className="md:hidden">Edit your search</span>
            <button className="text-3xl cursor-pointer md:hidden" id="closeMobile">&times;</button>
          </div>
          <div
            className=" w-80 rounded-3xl shadow-[0px_1px_4px_1px_rgb(0,0,0,0.2)] flex flex-col m-auto md:flex-row md:w-4/5 md:items-center md:divide-x md:divide-gray-200">
            <div className="flex flex-col p-3 md:w-1/3 border-b-1 border-b-gray-200 md:border-b-0">
              <label htmlFor="location">LOCATION</label>
              <input type="text" name="locat" placeholder="Add location" id="location"
                className="shadow rounded-sm px-2" />
            </div>
            <div className="flex flex-col p-3 md:w-1/3">
              <label htmlFor="guests">GUESTS</label>
              <input type="text" name="gues" placeholder="Add guests" id="guests" value="0"
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
          <div className="h-70 hidden md:h-50" id="lista-fitrada">
            <ul className="flex flex-col items-start py-3 m-4 cursor-pointer  md:ml-40 " id="autocomplete-results">
              <li>Helsinki</li>
            </ul>
          </div>

          {/* <!-- MAS+ -MENOS --> */}
          <div className="h-70 hidden md:h-50" id="mas-menos">
            <div className="flex flex-col items-start py-3 m-4 md:m-2 md:py-0 px-3 md:items-center">
              <span className="font-semibold">Adult</span>
              <span className="text-gray-400 mb-4">ages 18 or above</span>
              <div id="button-guestsA">
                <button
                  className="border border-gray-400 px-3 py-1 bg-gray-100 mr-5 rounded-sm cursor-pointer hover:bg-gray-300"
                  id="a-">-</button>
                <span id="display">0</span>
                <button
                  className="border border-gray-400 px-3 py-1 bg-gray-100 mx-5 rounded-sm cursor-pointer hover:bg-gray-300"
                  id="a+">+</button>
              </div>
            </div>
            <div className="flex flex-col items-start py-3 m-4 md:m-2 md:py-0 px-3 md:items-center">
              <span className="font-semibold">Chindren</span>
              <span className="text-gray-400 mb-4">ages 17 or below</span>
              <div id="button-guestsN">
                <button
                  className="border border-gray-400 px-3 py-1 bg-gray-100 mr-5 rounded-sm cursor-pointer hover:bg-gray-300"
                  id="n-">-</button>
                <span id="displayN">0</span>
                <button
                  className="border border-gray-400 px-3 py-1 bg-gray-100 mx-5 rounded-sm cursor-pointer hover:bg-gray-300"
                  id="n+">+</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- MAIN --> */}
      <main id="modal" className="h-screen ">
        <section className="w-5/6 m-auto z-0 ">
          <header className="w-full flex justify-between px-0 mb-5 md:w-3/4 md:m-auto">
            <h1 className="font-bold text-2xl">Stays in Finland</h1>
            <div>
              <p><span id="conta-stays">1</span> stays</p>
            </div>
          </header>
          <article className="flex flex-wrap justify-center" id="principal">
            {/* <!-- datos desde js --> */}
            <div className="w-95 flex flex-col items-center my-3" >
              <div className=" w-90 h-70 rounded-3xl overflow-hidden">
                <img
                  src="${elemento.photo}"
                  alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" w-90 flex flex-col items-start px-1">
                <div className="w-full flex justify-between my-3">
                  <div>
                    <span className="border rounded-2xl px-1 font-semibold text-xs">SUPERHOST</span>
                    <span>DDD.</span>
                    <span>5 beds</span>
                  </div>
                  <div className="flex">
                    <img src="./src/images/icons/star.svg" alt="" className="w-6" />
                    <span>SSSSS</span>
                  </div>

                </div>
                <p className="font-bold text-sm"> AAAAA</p>
              </div>
            </div>
          </article>
        </section>
      </main>/


    </div>
  )
}
