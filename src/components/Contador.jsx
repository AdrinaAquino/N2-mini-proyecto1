import React from 'react'
import useData from '../hooks/useData'

export default function Contador() {
    const { tasks } = useData("stays.json")
    let contador=tasks.length >= 12 ? 12 + "+" : tasks.length
    return (
        < header className = "w-full flex justify-between px-0 mb-5 md:w-3/4 md:m-auto" >
            <h1 className="font-bold text-2xl">Stays in Finland</h1>
            <div>         
                <p><span id="conta-stays">{contador}</span> stays</p>
            </div>
        </header >

    )
}
