import React from 'react'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import Contador from './components/Contador'
import Modal from './components/Modal'

export default function App() {
  return (
    <div>
      <NavBar />

      <main id="modal" className="h-screen">

        <section className="w-5/6 m-auto ">
          <Contador />
          <article className="w-full flex flex-wrap justify-center" id="principal ">
            <Cards />

          </article>
        </section>
      </main>
    </div>
  )
}
