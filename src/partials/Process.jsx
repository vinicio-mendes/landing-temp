import React from 'react'
function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-magenta-100" data-aos="fade-up">
              Um ecossistema com diferentes objetivos e necessidades
            </h2>
            <p
              className="text-xl text-indico-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Estamos aqui caso deseje capacitar pessoas, gerenciar processos de
              inovação ou acessar jovens talentos especializados.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: 'calc(100% - 32px)',
                  left: 'calc(50% + 48px)',
                  top: '32px',
                }}
                data-aos="fade-in"
                data-aos-delay="200"
              ></div>
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-indico-100"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 text-magenta-100 mb-2">
                <span className="text-tangerine-100">1</span>. Capacitação
              </h4>
              <p className="text-lg text-indico-100 text-justify">
                O abismo entre conhecimento acadêmico e habilidades práticas
                demandadas pelo mercado cria uma lacuna desafiadora. Estudantes
                e colaboradores frequentemente enfrentam a transição para o
                ambiente de trabalho armados apenas com teoria, sem a
                experiência prática ou o pensamento crítico necessários para
                inovar e resolver problemas reais.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: 'calc(100% - 32px)',
                  left: 'calc(50% + 48px)',
                  top: '32px',
                }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-indico-100"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g fill="none" fillRule="evenodd">
                  <path
                    className="stroke-current text-purple-300"
                    d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M36 32l-4-3-4 3V22h8z"
                  />
                </g>
              </svg>
              <h4 className="h4 text-magenta-100 mb-2">
                <span className="text-tangerine-100">2</span>. Inovação
              </h4>
              <p className="text-lg text-indico-100 text-justify">
                Organizações lutam para se adaptar a um cenário em rápida
                evolução, onde dados abundantes e ideias brutas muitas vezes não
                são traduzidos em estratégias de inovação eficazes. Há uma
                dificuldade em alinhar o potencial de inovação com as metas de
                negócios concretas, resultando em projetos que não atingem sua
                capacidade máxima ou falham em gerar impacto significativo.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-indico-100"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 35l4 4 12-15"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M42 29h-3M42 34h-7M42 39H31"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 text-magenta-100 mb-2">
                <span className="text-tangerine-100">3</span>. Contratação
              </h4>
              <p className="text-lg text-indico-100 text-justify">
                A corrida por talentos especializados e alinhados com a cultura
                de inovação é uma barreira contínua. Empresas e eventos
                tecnológicos, como hackathons, enfrentam desafios na atração e
                retenção de indivíduos que não apenas possuem habilidades
                técnicas, mas também são visionários, criativos e prontos para
                impulsionar a próxima onda de inovação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
