import React from 'react'

import vinicioteam from '../images/vinicioteam.png'
import nicolasteam from '../images/nicolasteam.png'
import pedroteam from '../images/pedroteam.png'
import viniciusteam from '../images/viniciusteam.png'
import carlosteam from '../images/carlosteam.png'
import paulateam from '../images/paulateam.png'
import tiagoteam from '../images/tiagoteam.png'

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-magenta-100">
              Nosso time de excelência{' '}
            </h2>
            <p className="text-xl text-indico-100">
              Estamos espalhados por todo Brasil e lado a lado de Portugal, para
              conseguir alcançar desde o <b>interior</b> até a <b>capital.</b>
            </p>
          </div>

          {/* Team members */}
          <div
            className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={vinicioteam}
                  width="120"
                  height="120"
                  alt="Team member 01"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Vinicio Mendes
                </h4>
                <div className="text-gray-500 mb-1">CEO </div>
                <a
                  className="block text-magenta-100 hover:text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/oviniciomendes/"
                >
                  @oviniciomendes
                </a>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={nicolasteam}
                  width="120"
                  height="120"
                  alt="Team member 02"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Nícolas Gabriel
                </h4>
                <div className="text-gray-500 mb-1">CTO</div>
                <a
                  className="block text-magenta-100 text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/nicolasgabriel13/"
                >
                  @nicolasgabriel13
                </a>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={pedroteam}
                  width="120"
                  height="120"
                  alt="Team member 03"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Pedro Oliveira
                </h4>
                <div className="text-gray-500 mb-1">Product Onwer</div>
                <a
                  className="block text-magenta-100 hover:text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/pedrocostol/"
                >
                  @pedrocostol
                </a>
              </div>
            </div>

            {/* 4th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={viniciusteam}
                  width="120"
                  height="120"
                  alt="Team member 04"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Vinicius Medeiros
                </h4>
                <div className="text-gray-500 mb-1">Head of Design</div>
                <a
                  className="block text-magenta-100 hover:text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/vrms/"
                >
                  @vrms
                </a>
              </div>
            </div>

            {/* 5th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={carlosteam}
                  width="120"
                  height="120"
                  alt="Team member 05"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Carlos Daniel
                </h4>
                <div className="text-gray-500 mb-1">Sales leader</div>
                <a
                  className="block text-magenta-100 hover:text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/carlos-daniel-nascimento-da-concei%C3%A7%C3%A3o-86a321174/"
                >
                  @carllosdaniell
                </a>
              </div>
            </div>

            {/* 6th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={paulateam}
                  width="120"
                  height="120"
                  alt="Team member 06"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Paula Barros
                </h4>
                <div className="text-gray-500 mb-1">CEO NGUZU & Parter</div>
                <a
                  className="block text-magenta-100 hover:text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/paula-barros-2a724433/"
                >
                  @PaulaBarros
                </a>
              </div>
            </div>

            {/* 7th member */}
            <div
              className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <img
                  className="rounded-full mb-4"
                  src={tiagoteam}
                  width="120"
                  height="120"
                  alt="Team member 07"
                />
                <h4 className="text-xl font-medium mb-1 text-tangerine-100">
                  Tiago Cardoso
                </h4>
                <div className="text-gray-500 mb-1">Ecosystem Builder</div>
                <a
                  className="block text-magenta-100 hover:text-magenta-600 transition duration-150 ease-in-out"
                  href="https://www.linkedin.com/in/tiagommcardoso/"
                >
                  @TiagoCardoso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
