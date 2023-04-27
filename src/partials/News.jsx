import React from 'react'
import { Link } from 'react-router-dom'

import NewsImage01 from '../images/news-01.jpg'
import NewsImage02 from '../images/news-02.jpg'
import NewsImage03 from '../images/news-03.jpg'
import carlosteam from '../images/carlosteam.png'

function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-magenta-100" data-aos="fade-up">
            Adquira novos conhecimentos e aprenda com as mentes mais brilhantes do mundo das startups.
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
                    to="https://www.notion.so/firethebox/Empreendedorismo-Jovem-no-Brasil-d13ae96ca8744d609b95c95ddeb4169f?pvs=4"
                  >
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={NewsImage01}
                        width="352"
                        height="198"
                        alt="News 01"
                      />
                    </figure>
                  </Link>
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
                  <h3 className="h4 mb-2">
                    <Link
                      className="text-magenta-100 hover:text-magenta-300 transition duration-150 ease-in-out"
                      to="https://firethebox.notion.site/Empreendedorismo-Jovem-no-Brasil-d13ae96ca8744d609b95c95ddeb4169f"
                      target="_blank"
                    >
                      Empreendedorismo Jovem no Brasil.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-indico-100 grow text-justify">
                  Empreender no Brasil sempre foi e será um verdadeiro duelo de
                  gigantes, de um lado jovens com mentes brilhantes presos em
                  ecossistemas nocivos e destruidores de inovação, do outro
                  jovens com sede por transformar a vida daqueles que estão ao
                  seu redor com soluções que moldaram o presente e aproximaram
                  um futuro melhor.
                </p>
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
                    <span className="text-gray-500">Março 19, 2023</span>
                  </div>
                </footer>
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
                    to="https://www.notion.so/firethebox/Empreendedorismo-no-Metaverso-db198bcaa4d342308a1ecf9c58c5145e?pvs=4"
                  >
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={NewsImage02}
                        width="352"
                        height="198"
                        alt="News 02"
                      />
                    </figure>
                  </Link>
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
                  <h3 className="h4 mb-2">
                    <Link
                      className="text-magenta-100 hover:text-magenta-300 transition duration-150 ease-in-out"
                      to="https://firethebox.notion.site/Empreendedorismo-no-Metaverso-db198bcaa4d342308a1ecf9c58c5145e"
                      target="_blank"
                    >
                      Empreendedorismo no Metaverso.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-indico-100 grow text-justify">
                  Seja no mundo real ou em órbitas virtuais, empreender sempre
                  trará novos desafios a desafiantes que sabem se adaptar a
                  qualquer ambiente, o metaverso vem sendo palco para grandes
                  percursores de inovação ditarem tendências de mercado que a
                  pouco não passavam de sonhos distantes, porém que hoje batem a
                  sua porta e lhe entregam soluções para seu dia a dia..
                </p>
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
                    <span className="text-gray-500">Março 19, 2023</span>
                  </div>
                </footer>
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
                    to="https://firethebox.notion.site/Empreendedorismo-com-Chat-GPT-3c38a30496224db39676931c5326b58d"
                  >
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={NewsImage03}
                        width="352"
                        height="198"
                        alt="News 03"
                      />
                    </figure>
                  </Link>
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
                  <h3 className="h4 mb-2">
                    <Link
                      className="text-magenta-100 hover:text-magenta-300 transition duration-150 ease-in-out"
                      to="https://firethebox.notion.site/Empreendedorismo-com-Chat-GPT-3c38a30496224db39676931c5326b58d"
                      target="_blank"
                    >
                      Empreendedorismo com Chat-GPT.
                    </Link>
                  </h3>
                </header>
                <p className="text-lg text-indico-100 grow text-justify">
                  Você empreendedor não pode ignorar a revolução que o seu mais
                  novo amigo vem trazendo ao mercado, afinal de contas o
                  Chat-GPT veio para ficar e já está mudando o ecossistema
                  empreendedor no Brasil e no mundo, tendo em vista que fazer a
                  pergunta certa pode lhe trazer grandes vantagens frente ao seu
                  concorrente que sem dúvidas está fazendo a mesma coisa.
                </p>
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
                    <span className="text-gray-500">Março 19, 2023</span>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
