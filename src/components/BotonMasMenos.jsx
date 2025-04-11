import React, { useEffect, useState } from 'react'

export default function BotonMasMenos({ setGuests }) {
    const [contadorGuests, setContadorGuest] = useState(0)
    const [contadorGuests2, setContadorGuest2] = useState(0)
    const restar = () => { contadorGuests > 0 ? setContadorGuest(contadorGuests - 1) && setContadorGuest2(contadorGuests2 - 1) : 0 }
    const sumar = () => { contadorGuests >= 0 ? setContadorGuest(contadorGuests + 1) && setContadorGuest2(contadorGuests2 + 1) : 0 }
    const restar2 = () => { contadorGuests2 > 0 ?  setContadorGuest2(contadorGuests2 - 1) : 0 }
    const sumar2 = () => { contadorGuests2 >= 0 ?  setContadorGuest2(contadorGuests2 + 1) : 0 }
    useEffect(()=>{
        setGuests(contadorGuests+contadorGuests2)
    },)
    
    return (
        <>
            <div className="h-70 hidden md:h-50" id="mas-menos">
                <div className="flex flex-col items-start py-3 m-4 md:m-2 md:py-0 px-3 md:items-center">
                    <span className="font-semibold">Adult</span>
                    <span className="text-gray-400 mb-4">ages 18 or above</span>
                    <div id="button-guestsA">
                        <button
                            className="border border-gray-400 px-3 py-1 bg-gray-100 mr-5 rounded-sm cursor-pointer hover:bg-gray-300"
                            id="a-" onClick={restar}>-</button>
                        <span id="display">{contadorGuests}</span>
                        <button
                            className="border border-gray-400 px-3 py-1 bg-gray-100 mx-5 rounded-sm cursor-pointer hover:bg-gray-300"
                            id="a+" onClick={sumar}>+</button>
                    </div>
                </div>
                <div className="flex flex-col items-start py-3 m-4 md:m-2 md:py-0 px-3 md:items-center">
                    <span className="font-semibold">Children</span>
                    <span className="text-gray-400 mb-4">ages 17 or below</span>
                    <div id="button-guestsN">
                        <button
                            className="border border-gray-400 px-3 py-1 bg-gray-100 mr-5 rounded-sm cursor-pointer hover:bg-gray-300"
                            id="n-" onClick={restar2}>-</button>
                        <span id="displayN">{contadorGuests2}</span>
                        <button
                            className="border border-gray-400 px-3 py-1 bg-gray-100 mx-5 rounded-sm cursor-pointer hover:bg-gray-300"
                            id="n+" onClick={sumar2}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}
