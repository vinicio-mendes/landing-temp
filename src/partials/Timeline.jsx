import React from 'react'

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4 text-magenta-100">
              Nunca conformados com a realidade ao seu redor, sempre atrás de
              melhorar a vida de outras pessoas e unidos pelo espírito
              empreendedor{' '}
            </h2>
            {/* <p className="text-xl text-indico-100">
              unidos pelo o espírito empreendedor
            </p> */}
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
                  Criamos o primeiro aplicativo educacional construído como o
                  intuito de auxiliar estudantes do ensino médio à ingressar em
                  um Instituto Federal (IF)
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
                  <h4 className="h4 text-magenta-100">Maratona Teen</h4>
                </div>
                <p className="text-lg text-indico-100">
                  Conquistamos a maratona de desenvolvimento de soluções do Mato
                  Grosso, o que nos levou a conhecer a rede NGUZU que foi
                  fundamental para a nossa fundação
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
                  O início
                </div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">
                    2022
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
                  A paixão pelo empreendedorismo e a vontade de mudar o mundo
                  foram essenciais para o nascimento da FireTheBox
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
                    2022
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
                    Uma educação empreendedora
                  </h4>
                </div>
                <p className="text-lg text-indico-100">
                  Com a entrada na rede NGUZU conhecemos chaves fundamentais que
                  nos levaram a criar uma ferramenta prática e eficaz para
                  promover empreendedorismo jovem
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
                    2023
                  </div>

                  <div
                    className="absolute left-0 w-2 h-2 bg-indico-100 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2"
                    aria-hidden="true"
                  ></div>
                  <h4 className="h4 text-magenta-100">
                    Conectar jovens de todo o Brasil com polos de inovação e
                    empreendedorismo
                  </h4>
                </div>
                <p className="text-lg text-indico-100">
                  Hoje, a FireTheBox vem com a missão de democratizar o
                  empreendedorismo e inovação para jovens de todo Brasil,
                  através de ambientes propícios para potencializar ideias,
                  projetos e carreiras
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
