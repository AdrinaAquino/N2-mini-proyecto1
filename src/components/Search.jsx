import React from 'react'
import useData from '../hooks/useData';
export default function Search({ location, guests,setFilteredTasks }) {
    const { tasks } = useData("stays.json")
    const buscar = () => { 
        let locationValue = (location||"").toLowerCase().split(",")[0];
        let guestValue = parseInt(guests) || 0;
        let listaFiltrada = tasks;
        if (locationValue !== "" && guestValue === 0) {
            listaFiltrada = tasks.filter((e) =>  e.city.toLowerCase() === locationValue )
        } else if (locationValue === "" && guestValue > 0) {
            listaFiltrada = tasks.filter((e) => e.maxGuests >= guestValue)
        } else if (locationValue !== "" && guestValue >= 0) {
            listaFiltrada = tasks.filter((e) => e.maxGuests >= guestValue && e.city.toLowerCase() === locationValue)
        }
        console.log(listaFiltrada)
        setFilteredTasks(listaFiltrada);
    }
    return (
        <div className=" absolute top-122 right-1/2 translate-1/2 text-white md:h-full md:static md:translate-0 md:flex md:justify-center md:items-center md:text-white md:w-1/3">
            <button className="flex px-5 py-2 border rounded-3xl bg-[#eb5757] cursor-pointer hover:bg-rose-700"
                id="search" onClick={buscar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                search
            </button>
        </div>
    )
}





