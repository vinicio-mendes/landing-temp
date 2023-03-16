import React, { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition'

import TabsImage01 from '../images/tabs-image-01.jpg'
import HeroImage01 from '../images/hero-image-01.jpg'

function Tabs() {
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2
              className="h2 text-magenta-100 mb-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Aprenda, implemente e meça suas decisões estratégicas
            </h2>
            <p
              className="text-xl text-indico-100"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              A ferramenta consiste em metodologias fundamentadas
            </p>
            <p
              className="text-xl text-indico-100"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              no Vale do Silício (lar dos gigantes da tecnologia)
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div
              className="flex flex-wrap justify-center -m-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-indico-100 rounded-full group transition duration-500 ${
                  tab !== 1 && 'opacity-50'
                }`}
                onClick={() => setTab(1)}
              >
                <svg
                  className="w-4 h-4 fill-current text-tangerine-100 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                </svg>
                <span className="group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  FireTheBox
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-indico-100 rounded-full group transition duration-500 ${
                  tab !== 2 && 'opacity-50'
                }`}
                onClick={() => setTab(2)}
              >
                <svg
                  className="w-4 h-4 fill-current text-tangerine-100 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span className="group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Empreendedorismo Disciplinado
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-indico-100 rounded-full group transition duration-500 ${
                  tab !== 3 && 'opacity-50'
                }`}
                onClick={() => setTab(3)}
              >
                <svg
                  className="w-4 h-4 fill-current text-tangerine-100 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
                <span className="group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  CBL Apple
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-indico-100 rounded-full group transition duration-500 ${
                  tab !== 4 && 'opacity-50'
                }`}
                onClick={() => setTab(4)}
              >
                <svg
                  className="w-4 h-4 fill-current text-tangerine-100 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                </svg>
                <span className="group-hover:text-gray-200 transition-colors duration-150 ease-in-out">
                  Design Thinking
                </span>
              </button>
            </div>

            {/* Tabs items */}
            <div
              className="relative flex flex-col mt-16"
              data-aos="fade-up"
              ref={tabs}
            >
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={TabsImage01}
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">
                      Fácil de iniciar, construir e aplicar.
                    </h4>
                    <p className="text-lg text-justify">
                      A missão da FireTheBox é criar ambientes propícios para
                      potencializar diferentes pessoas e suas carreiras através
                      da inovação e resolução de problemas. Queremos permitir
                      que jovens comuns com acesso internet possam aprender
                      sobre tecnologia, inovação e empreendedorismo e possam
                      criar produtos que tenha potencial de virar uma startup ou
                      atender a demanda de alguma empresa do mercado..
                    </p>
                    <a
                      className="btn-sm bg-tangerine-100 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm text-white-100">Leia mais</span>
                      <svg
                        className="w-3 h-3 fill-current text-white-100 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={HeroImage01}
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Empreendedorismo Disciplinado</h4>
                    <p className="text-lg text-white-100 text-justify">
                      Uma abordagem passo a passo completa, integrada e
                      comprovada para criar produtos inovadores e altamente
                      bem-sucedidos. Criado pelo professor Bill Aulet do MIT -
                      Massachusets Institute of Technology, a Universidade
                      número 1 do mundo em negócios. Independentemente de seu
                      negócio se concentrar em desenvolver um produto físico,
                      serviço ou disponibilizar informações, A metodologia vai
                      guiar o empreendedor por 24 etapas nas quais será possível
                      identificar, testar e validar as suas principais teses de
                      negócio, permitindo uma melhor percepção do real potencial
                      de mercado da sua solução.
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Leia mais</span>
                      <svg
                        className="w-3 h-3 fill-current text-white-100 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={TabsImage01}
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Challenge Based Learning (CBL)</h4>
                    <p className="text-lg text-white-100 text-justify">
                      A abordagem educacional conhecida como Challenge Based
                      Learning (CBL) tem como objetivo incentivar os estudantes
                      a resolver desafios reais, aplicando suas habilidades e
                      conhecimentos em diversas áreas. Ela começou a ser
                      desenvolvida na Apple desde 2008 e foi publicado em 2016
                      por Mark Nichols, Karen Cator e Marco Torres. Nessa
                      metodologia, os alunos são os protagonistas do próprio
                      processo de aprendizagem, sendo estimulados a se envolver
                      em questões complexas e multidisciplinares, buscando
                      soluções inovadoras e eficazes para os problemas
                      apresentados.
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Leia mais</span>
                      <svg
                        className="w-3 h-3 fill-current text-white-100 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={HeroImage01}
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Design Thinking</h4>
                    <p className="text-lg text-white-100 text-justify">
                      Design Thinking é uma abordagem metodológica para o
                      desenvolvimento de produtos e serviços que se concentra
                      nas necessidades, desejos e limitações dos usuários. O
                      objetivo principal do Design Thinking é transformar
                      dificuldades e limitações em benefícios para o cliente e
                      em valor de negócios para a empresa. Aqui na Fire
                      acreditamos que quando a DT começa a ser compreendido e
                      aplicado, ela é capaz de criar um ambiente que impulsiona
                      a inovação e molda uma nova cultura. Isso leva o negócio a
                      ser mais proativa na sugestão de soluções, com uma
                      abordagem centrada no cliente.
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Leia mais</span>
                      <svg
                        className="w-3 h-3 fill-current text-white-100 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={TabsImage01}
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">
                      Optimize and scale, easy to start
                    </h4>
                    <p className="text-lg text-white-100">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-purple-700 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="w-3 h-3 fill-current text-white-100 shrink-0 ml-2"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs
