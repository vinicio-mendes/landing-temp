import React from 'react'
import { Link } from 'react-router-dom'
import NGUZU from '../images/NGUZU.png'

function Clients() {
  return (
    <section>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className=" max-w-3xl mx-auto text-center ">
            <div className="  fill-current inline-flex text-magenta-100">
              <div className="">
              <div>
              <h1 className="h2 mb-4  ">Somos</h1>
              </div>
              <div>
              <Link
                to="https://www.linkedin.com/pulse/nguzu-project-como-criamos-e-concretizamos-tiago-cardoso/?originalSubdomain=pt"
                
              >
                <img 
                  className="  m-auto transition duration-150 ease-in-out"
                  src={NGUZU}
                  alt="NGUZU"
                  
                 />
              </Link>
             </div>
             <div>
              <h1 className="h2 mb-4">  Somos internacionais</h1>
              </div>
              </div>
            </div>
            <p className="text-xl text-indico-100">
              Dentro do maior ecossistema, construindo novas empresas e
              oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
