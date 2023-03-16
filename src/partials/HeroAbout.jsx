import React from 'react'

import HeroImage from '../images/about-hero.jpg'

function HeroAbout() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={HeroImage}
          width="1440"
          height="394"
          alt="About"
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-75"
          aria-hidden="true"
        ></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4 text-magenta-100" data-aos="fade-up">
              A história por trás do projeto
            </h1>
            <p
              className="text-xl text-white-100 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
             Empreendedores criando ferramentas nescessárias para empresas empreenderem
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
