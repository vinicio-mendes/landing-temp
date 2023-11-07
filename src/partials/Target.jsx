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
             Mostramos o momento ideal para você
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
                    O momento para empreender é agora
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-tangerine-100">.</span> Descobrir
                    </h4>
                    <p className="text-lg text-indico-100 text-justify">
                    A FireTheBox é um catalisador para aspirantes a empreendedores: uma plataforma que transforma curiosidade em capacidade empreendedora, 
                    guiando usuários de todos os níveis de habilidade através de um percurso educativo e prático rumo à inovação e ao sucesso empresarial
                    .
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-tangerine-100">.</span>Validar
                    </h4>
                    <p className="text-lg text-indico-100 text-justify">
                    Acenda a chama da inovação com a FireTheBox! Se você tem um MVP pronto para brilhar, estamos aqui para turbiná-lo. Nossa plataforma é o trampolim que você precisa para saltar das ideias para a ação, oferecendo ferramentas afiadas de análise e feedback que vão polir seu produto até ele brilhar. Com FireTheBox, eleve seu MVP do básico ao extraordinário, guiado por dados sólidos e insights do mercado. Prepare-se para conquistar o mercado com confiança e estratégia!
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2">
                      <span className="text-tangerine-100">.</span> Escalar
                    </h4>
                    <p className="text-lg text-indico-100">
                    Escalando novas alturas? FireTheBox é o seu booster! 
                    Quando seu MVP já provou seu valor e você está pronto para o grande salto, 
                    nossa plataforma é a sua aliada estratégica para um crescimento explosivo. 
                    Com análises avançadas e insights profundos, nós somos o vento sob as suas asas, 
                    impulsionando você para uma expansão de mercado sem fronteiras.
                     Junte-se a uma comunidade vibrante de visionários e mentores, 
                     conecte-se com investidores e experts e use a FireTheBox para turbinar seu crescimento,
                      afiar suas estratégias de aquisição e dominar o mercado. Navegue pelo emocionante mundo da expansão com a gente,
                       gerenciando recursos com a maestria de um campeão. Vamos decolar!






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
