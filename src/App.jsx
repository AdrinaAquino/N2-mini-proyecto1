import React from 'react'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import Contador from './components/Contador'
import { useState } from 'react';
import useData from './hooks/useData';
export default function App() {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const { tasks } = useData("stays.json");
  const tasksToShow = filteredTasks.length > 0 ? filteredTasks : tasks;
  return (
    <div>
      <NavBar 
      setFilteredTasks={setFilteredTasks}
      />

      <main id="modal" className="h-screen">

        <section className="w-5/6 m-auto ">
          <Contador 
          tasks={tasksToShow}/>
          <article className="w-full flex flex-wrap justify-center" id="principal ">
          {tasksToShow.length > 0 ? 
              <Cards tasks={tasksToShow} />
            :
<p className="text-center text-gray-500 mt-8">No hay resultados disponibles.</p>
            }
          </article>
        </section>
      </main>
    </div>
  )
}
