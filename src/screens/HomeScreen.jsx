import React from 'react'
import '../tailwind.css'
import Header from '../components/Header'
import frame from '../assets/Frame1.svg'
import Mision from '../components/Mision'
import Footer from '../components/Footer'
import SimpleMap from '../components/Map'
function HomeScreen() {
    const callouts = [
        {
          name: 'Desk and Office',
          description: 'Work from home accessories',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
      ]
  return (
    <div >
        <Header/>
        <div className="bg-gray-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py- sm:py-24 lg:max-w-none lg:py-0  ">

          <div className=" lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="relative h-100 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={frame}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="group relative" style={{alignSelf:"center"}}>
                
              <div className="text-center" >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Únete a nuestro equipo y alcanza tu máximo potencial en el deporte
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              LIGA DE VOLEIBOL DE FUERZAS ARMADAS
            </p>
            <p className=" text-lg leading-8 text-gray-600">
            “AMISTAD, DISCIPLINA Y FORTALEZA”
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTnn4OVkmB5kZ850fBW6iZSdcux8dneXM0OdQfjx11852C8Q/viewform?vc=0&c=0&w=1&flr=0"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Inicia ahora
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Aprende mas sobre nosotros <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
              </div>
          </div>
        </div>
        </div>
        <Mision/>
        
        <SimpleMap/>
        
        
        <Footer/>
        
    </div>
    </div>
  )
}

export default HomeScreen