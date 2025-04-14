import React, { useEffect } from 'react'
import useData from '../hooks/useData'

export default function ListaLugar({ location, setLocation }) {
    const { tasks } = useData("stays.json")
    const remplazarTexto = (e) => {
        setLocation(e.target.textContent)
    }
    const lugaresUnicos = []
    tasks.forEach((lugar) => {
        const lugarTexto = `${lugar.city},${lugar.country}`
        if (!lugaresUnicos.includes(lugarTexto)) {
            lugaresUnicos.push(lugarTexto)
        }
    })

    return (

        <div className="h-70  md:h-50" id="lista-fitrada">
            <ul className="flex flex-col items-start py-3 m-4 cursor-pointer  md:ml-40 " id="autocomplete-results">
                {lugaresUnicos.map((lugar, id) => {
                    return <li onClick={remplazarTexto} key={id} value={location} >{lugar}</li>

                })}
            </ul>
        </div>
    )
}
