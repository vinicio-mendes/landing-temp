import React from 'react'
function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-magenta-100" data-aos="fade-up">
              Nosso combo para pontencializar sua ideia de negócio
            </h2>
            <p
              className="text-xl text-indico-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A FireTheBox oferece um roteiro interativo e dinâmico que capacita empreendedores a desenvolver, validar e escalar seus projetos com confiança e eficácia.
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
                <span className="text-tangerine-100">1</span>. Metodologia
              </h4>
              <p className="text-lg text-indico-100 text-center">
                
A FireTheBox oferece um roteiro interativo e prático para o desenvolvimento e validação eficaz de ideias empreendedoras.
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
                <span className="text-tangerine-100">2</span>. Co-criação
              </h4>
              <p className="text-lg text-indico-100 text-center">
                Construa com sua equipe em tempo real, interaja com outras
                equipes aprenda em conjunto.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="w-16 h-16 mb"
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
                className="stroke-current text-purple-100"
                d="M6 20a1 1 0 001-1v-7a1 1 0 00-2 0v7a1 1 0 001 1zM10 10v9a1 1 0 002 0v-9a1 1 0 00-2 0zM15 13v6a1 1 0 002 0v-6a1 1 0 00-2 0zM20 9v10a1 1 0 002 0V9a1 1 0 00-2 0zM6 9a1 1 0 00.707-.293l3.586-3.586a1.025 1.025 0 011.414 0l2.172 2.172a3 3 0 004.242 0l5.586-5.586A1 1 0 0022.293.293l-5.586 5.585a1 1 0 01-1.414 0l-2.172-2.171a3 3 0 00-4.242 0L5.293 7.293A1 1 0 006 9z"
                fill="white"
                transform="translate(18,19)"
                />

              </svg>
              <h4 className="h4 text-magenta-100 mb-2">
                <span className="text-tangerine-100">3</span>. Metrificação
              </h4>
              <p className="text-lg text-indico-100 text-center">
                Através de nossa metodologia de "Momentos Estratégicos", somos capazes de medir o avanço de cada equipe, fornecendo feedbacks precisos sobre seus níveis de engajamento e progresso.
              </p>
            </div>

             {/* 4rd item */}
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
                <span className="text-tangerine-100">4</span>. Gamificação
              </h4>
              <p className="text-lg text-indico-100 text-center">
                Por meio de um sistema gamificado que estratifica por momentos e incentiva a competição saudável, tornamos o aprendizado uma jornada divertida e descomplicada, transformando desafios complexos em experiências empolgantes e gratificantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
