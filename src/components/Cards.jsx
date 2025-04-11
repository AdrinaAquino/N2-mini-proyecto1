import useData from '../hooks/useData';

export default function Cards() {
    const { tasks} = useData("stays.json")
    
    const habitaciones = tasks

    return (
        <>
            {habitaciones?.map((habitacion,id) => {
                let contenido;
                if (habitacion.superHost === true && habitacion.beds !== null) {
                    contenido = <div className="w-95 flex flex-col items-center my-3" key={id}>
                        <div className=" w-90 h-70 rounded-3xl overflow-hidden">
                            <img
                                src={habitacion.photo}
                                alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className=" w-90 flex flex-col items-start px-1">
                            <div className="w-full flex justify-between my-3">
                                <div>
                                    <span className="border rounded-2xl px-1 font-semibold text-xs">SUPERHOST</span>
                                    <span>{habitacion.type} .</span>
                                    <span>{habitacion.beds} beds</span>
                                </div>
                                <div className="flex">
                                    <img src="/public/icons/star.svg" alt="" className="w-6" />
                                    <span>{habitacion.rating}</span>
                                </div>

                            </div>
                            <p className="font-bold text-sm"> {habitacion.title}</p>
                        </div>
                    </div>

                } else if (habitacion.superHost === true && habitacion.beds === null) {

                    contenido = <div className="w-95 flex flex-col items-center my-3" key={id}>
                        <div className=" w-90 h-70 rounded-3xl overflow-hidden">
                            <img
                                src={habitacion.photo}
                                alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className=" w-90 flex flex-col items-start px-2">
                            <div className="w-full flex justify-between my-3">
                                <div>
                                    <span className="border rounded-2xl px-1 font-semibold text-sm">SUPERHOST</span>
                                    <span>{habitacion.type}</span>
                                    <span></span>
                                </div>
                                <div className="flex">
                                    <img src="/public/icons/star.svg" alt="" className="w-6" />
                                    <span>{habitacion.rating}</span>
                                </div>

                            </div>
                            <p className="font-bold text-sm"> {habitacion.title}</p>
                        </div>
                    </div>

                } else if (habitacion.beds === null) {

                    contenido = <div className="w-95 flex flex-col items-center my-3" key={id}>
                        <div className=" w-90 h-70 rounded-3xl overflow-hidden">
                            <img
                                src={habitacion.photo}
                                alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className=" w-90 flex flex-col items-start px-2">
                            <div className="w-full flex justify-between my-3">
                                <div>
                                    <span>{habitacion.type}</span>
                                    <span></span>
                                </div>
                                <div className="flex">
                                    <img src="/public/icons/star.svg" alt="" className="w-6" />
                                    <span>{habitacion.rating}</span>
                                </div>

                            </div>
                            <p className="font-bold text-sm">{habitacion.title}</p>
                        </div>
                    </div>

                } else if (habitacion.null !== null) {
                    contenido = <div className="w-95 flex flex-col items-center my-3" key={id}>
                        <div className=" w-90 h-70 rounded-3xl overflow-hidden">
                            <img
                                src={habitacion.photo}
                                alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className=" w-90 flex flex-col items-start px-2">
                            <div className="w-full flex justify-between my-3">
                                <div>
                                    <span>{habitacion.type} .</span>
                                    <span>{habitacion.beds} beds</span>
                                </div>
                                <div className="flex">
                                    <img src="/public/icons/star.svg" alt="" className="w-6" />
                                    <span>{habitacion.rating}</span>
                                </div>

                            </div>
                            <p className="font-bold text-sm"> {habitacion.title}</p>
                        </div>
                    </div>
                }
                return [contenido]                
            })}
        </>
    )
}
