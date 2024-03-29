import React, { useEffect, useRef, useState } from 'react'
import Transition from '../utils/Transition'

import Solucaopersonalizada01 from '../images/solucaopersonalizada01.svg'
import Solucaopersonalizada02 from '../images/solucaopersonalizada02.svg'
import Solucaopersonalizada03 from '../images/solucaopersonalizada03.svg'
import TabsImage01 from '../images/tabs-image-01.jpg'

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
              Soluções personalizadas para sua organização
            </h2>
            <p
              className="text-xl text-indico-100"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              A FireTheBox possui uma série de recursos que viabilizam jornadas
              de educação e inovação de maneira prática e personalizada. Confira
              abaixo as nossas soluções:
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
                  Jornadas de Empreendedorismo
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
                  Gestão de desafios de inovação
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
                  Suporte inteligente com IA
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
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      className="w-full h-full object-cover"
                      src={Solucaopersonalizada01}
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">
                      Criação de jornadas metrificadas de empreendedorismo
                    </h4>
                    <p className="text-lg text-white-100 text-justify">
                      Oferecemos um roteiro interativo e inteligente com IA e
                      gamificação para que seus estudantes ou colaboradores
                      adquiram conhecimentos teóricos ou complexos através da
                      elaboração de projetos reais e feedbacks dinâmicos,
                      aprimorando a transição do aprendizado para a aplicação
                      prática
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-tangerine-300 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Entenda mais</span>
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
              {/*
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
                      A FireTheBox tem como missão fomentar ecossistemas
                      inovadores que capacitem indivíduos de diversas origens a
                      impulsionar suas carreiras por meio do empreendedorismo
                      tecnológico e da resolução criativa de problemas. Nosso
                      objetivo é democratizar o aprendizado em tecnologia,
                      inovação e gestão empresarial, habilitando jovens com
                      acesso à internet a desenvolver produtos com potencial
                      disruptivo ou que atendam às necessidades específicas do
                      mercado empresarial.
                    </p>
                    <a
                      className="btn-sm bg-tangerine-100 hover:bg-tangerine-300 mt-6"
                      href="#0"
                    >
                      <span className="text-sm text-white-100">
                        Entenda mais
                      </span>
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
                */}
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
                      src={Solucaopersonalizada01}
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">
                      Criação de jornadas metrificadas de empreendedorismo
                    </h4>
                    <p className="text-lg text-white-100 text-justify">
                      Oferecemos um roteiro interativo e inteligente com IA e
                      gamificação para que seus estudantes ou colaboradores
                      adquiram conhecimentos teóricos ou complexos através da
                      elaboração de projetos reais e feedbacks dinâmicos,
                      aprimorando a transição do aprendizado para a aplicação
                      prática
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-tangerine-300 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Entenda mais</span>
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
                      src={Solucaopersonalizada02}
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">
                      Gestão de desafios corporativos e de inovação aberta
                    </h4>
                    <p className="text-lg text-white-100 text-justify">
                      Oferecemos o suporte para criação e gestão de maratonas
                      tecnológicas como Hackathons, através do monitoramento do
                      progresso, qualidade dos projetos e conexão entre
                      facilitadores e participantes, garantindo não só soluções
                      aplicáveis mas também identificação de futuros
                      colaboradores potenciais.
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-tangerine-300 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Entenda mais</span>
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
                      src={Solucaopersonalizada03}
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div className="relative bg-indico-100 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">
                      Suporte inteligente com IA para processos de inovação
                    </h4>
                    <p className="text-lg text-white-100 text-justify">
                      Oferecemos frameworks inteligentes com análise de dados e
                      estratégias de inovação, oferecendo insights e sugestões
                      personalizadas para aprimorar os processos do seu projeto
                      de descoberta, ideação, validação, prototipação ou
                      iteração.
                    </p>
                    <a
                      className="btn-sm text-white bg-tangerine-100 hover:bg-tangerine-300 mt-6"
                      href="#0"
                    >
                      <span className="text-sm">Entenda mais</span>
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
                      className="btn-sm text-white bg-tangerine-100 hover:bg-tangerine-300 mt-6"
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
