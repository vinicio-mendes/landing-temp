import React from 'react'

import TargetImage from '../images/features-02-image.png'

function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t text-magenta-100">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Temos o caminho ideal para você
            </h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <img
                  className="mx-auto md:max-w-none"
                  src={TargetImage}
                  width="540"
                  height="520"
                  alt="Features 02"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div
                    className="font-architects-daughter text-xl text-tangerine-100 mb-2"
                    data-aos="fade-left"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    Temos o melhor desafio para você
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-tangerine-100">.</span> Para quem
                      está começando
                    </h4>
                    <p className="text-lg text-indico-100 text-justify">
                      Aqui só é preciso vontade e curiosidade, não se preocupe
                      com conhecimentos prévios, a ferramenta te mostra o
                      caminho para a construção do projeto empreendedor
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-tangerine-100">.</span> Para quem
                      está empreendendo
                    </h4>
                    <p className="text-lg text-indico-100 text-justify">
                      Construiu o MVP, mas não sabe como seguir ? Junto à nossa
                      rede de mentores, vamos te guiar durante a validação do
                      negócio e te conectar com possíveis parceiros de negócio.
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-tangerine-100">.</span> Para quem
                      deseja trabalhar com startups
                    </h4>
                    <p className="text-lg text-indico-100">
                      Gosta de tecnologia, design, marketing ou finanças ? Aqui
                      dentro você pode se desenvolver trabalhando com projetos
                      reais de empresas tecnológicas do mercado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Target
