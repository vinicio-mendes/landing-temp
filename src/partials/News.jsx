import React from 'react'
import { Link } from 'react-router-dom'

import Imagemoquefazemos from '../images/Imagemoquefazemos.png'
import Imagemoquepodemos from '../images/imagemoquepodemos.png'
import ImagemSobreNos from '../images/imagemsobrenos.png'

function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-magenta-100" data-aos="fade-up">
              Conheça um pouco mais sobre a FireTheBox nas mídias
            </h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <Link
                    className="block mb-6"
                    to="https://www.instagram.com/p/C48Po9VOVOA/?img_index=1"
                  >
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={ImagemSobreNos}
                        width="352"
                        height="198"
                        alt="News 01"
                      />
                    </figure>
                  </Link>
                  {/*
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Tendências
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Mercado
                        </a>
                      </li>
                    </ul>
                  </div>
                   */}
                  <h3 className="h4 mb-2">
                    <Link
                      className="text-magenta-100 hover:text-magenta-300 transition duration-150 ease-in-out"
                      to="https://www.instagram.com/p/C48Po9VOVOA/?img_index=1"
                      target="_blank"
                    >
                      Entenda um pouco mais sobre nossa missão e visão
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-indico-100 grow text-justify">
                  Buscamos democratizar o acesso ao empreendedorismo e à
                  inovação para os jovens do Brasil, conectando a Geração Z a um
                  ecossistema de oportunidades. Entenda mais.
                </p>
                {/*
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img
                      className="rounded-full shrink-0 mr-4"
                      src={carlosteam}
                      width="40"
                      height="40"
                      alt="Author 01"
                    />
                  </a>
                  <div className="font-medium">
                    <a
                      className="text-tangerine-100 hover:text-tangerine-300 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Carlos Daniel
                    </a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Novembro 1, 2023</span>
                  </div>
                </footer>
                 */}
              </article>

              {/* 2nd article */}
              <article
                className="flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <header>
                  <Link
                    className="block mb-6"
                    to="https://www.instagram.com/p/C5Ems4pOJUF/?img_index=1"
                  >
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={Imagemoquefazemos}
                        width="352"
                        height="198"
                        alt="News 02"
                      />
                    </figure>
                  </Link>
                  {/*
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Tendências
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Mercado
                        </a>
                      </li>
                    </ul>
                  </div>
                  */}
                  <h3 className="h4 mb-2">
                    <Link
                      className="text-magenta-100 hover:text-magenta-300 transition duration-150 ease-in-out"
                      to="https://www.instagram.com/p/C5Ems4pOJUF/?img_index=1"
                      target="_blank"
                    >
                      Entenda aqui o um pouco mais das nossas soluções
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-indico-100 grow text-justify">
                  Na FireTheBox, desbloqueamos o potencial empreendedor da sua
                  organização com soluções educacionais personalizadas, gestão
                  de desafios e suporte de IA. Entenda mais.
                </p>
                {/*
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img
                      className="rounded-full shrink-0 mr-4"
                      src={carlosteam}
                      width="40"
                      height="40"
                      alt="Author 02"
                    />
                  </a>
                  <div className="font-medium">
                    <a
                      className="text-tangerine-100 hover:text-tangerine-300 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Carlos Daniel
                    </a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Novembro 1, 2023</span>
                  </div>
                </footer>
                 */}
              </article>

              {/* 3rd article */}
              <article
                className="flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <header>
                  <Link
                    className="block mb-6"
                    to="https://www.instagram.com/p/C5BgP_FuT7B/?img_index=1"
                  >
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={Imagemoquepodemos}
                        width="352"
                        height="198"
                        alt="News 03"
                      />
                    </figure>
                  </Link>
                  {/*
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Tendências
                        </a>
                      </li>
                      <li className="m-1">
                        <a
                          className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Mercado
                        </a>
                      </li>
                    </ul>
                  </div>
                */}
                  <h3 className="h4 mb-2">
                    <Link
                      className="text-magenta-100 hover:text-magenta-300 transition duration-150 ease-in-out"
                      to="https://www.instagram.com/p/C5BgP_FuT7B/?img_index=1"
                      target="_blank"
                    >
                      Entenda mais como criamos sinergias
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-indico-100 grow text-justify">
                  Na FireTheBox, transformamos o futuro da inovação e do
                  empreendedorismo, criando pontes entre empresas,
                  universidades, eventos de inovação, centros tecnológicos e
                  ligas de empreendedorismo. Entenda mais.
                </p>
                {/*
                <footer className="flex items-center mt-4">
                  <a href="#0">
                    <img
                      className="rounded-full shrink-0 mr-4"
                      src={carlosteam}
                      width="40"
                      height="40"
                      alt="Author 03"
                    />
                  </a>
                  <div className="font-medium">
                    <a
                      className="text-tangerine-100 hover:text-tangerine-300 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Carlos Daniel
                    </a>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500">Novembro 1, 2023</span>
                  </div>
                </footer>
               */}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
