import React from 'react'

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-magenta-100">Dando vida ás ideias do mundo</h2>
            <p className="text-xl text-indico-100">
              Auxiliamos empresas a criar o seu legado
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-3xl mx-auto -my-4 md:-my-6"
            data-aos-id-timeline
          >
            {/* 1st item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-tangerine-100 mb-2">
                  A semente
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2019
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-indico-100 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-magenta-100">O IFPrep</h4>
                </div>
                <p className="text-lg text-indico-100">
                  O primeiro aplicativo educaional contruido como o intuito de ajudar estudantes 
                  do ensino médio a engressar em um instituto federal
                </p>
              </div>
            </div>

            {/* 2nd item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-tangerine-100 mb-2">
                  A oportunidade
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2020
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-indico-100 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-magenta-100">
                    Maratona teen
                  </h4>
                </div>
                <p className="text-lg text-indico-100">
                  Ganhamos a maratona  de desenvolvimento de soluções do Mato Grosso que nos levou a conhecer a rede 
                  NGUZU que foi fundamental para a nossa criação
                </p>
              </div>
            </div>

            {/* 3rd item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-tangerine-100 mb-2">
                  O inicio
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2021
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-indico-100 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-magenta-100">Um carnaval diferente</h4>
                </div>
                <p className="text-lg text-indico-100">
                  A paixão pelo empreendedorismo e a vontade de mudar o mundo foram essencias
                  para o nascimento da FireTheBox
                </p>
              </div>
            </div>

            {/* 4th item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-tangerine-100 mb-2">
                  A criação
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2021
                  </div>
                  <div
                    className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute left-0 w-2 h-2 bg-indico-100 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-magenta-100">A educação empreendedora</h4>
                </div>
                <p className="text-lg text-indico-100">
                  Com a entrada na rede NGUZU conhecemos chaves fundamentais que nos levaram  a criar uma ferramenta prática
                  e eficaz para o empreendedorismo
                </p>
              </div>
            </div>
            {/* 5th item */}
            <div
              className="relative py-4 md:py-6 pl-24"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-tangerine-100 mb-2">
                 O desafio
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2022
                  </div>
                  
                  <div
                    className="absolute left-0 w-2 h-2 bg-indico-100 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-magenta-100">
                    Levar jovens de todo o Brasil aos polos empreendedores
                  </h4>
                </div>
                <p className="text-lg text-indico-100">
                  Com cases de sucesso envolvendo a USP ea UFPE a FireTheBox
                   vem com a missão de criar Startups de sucesso e desenvolver mentes empreendedoras 
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
