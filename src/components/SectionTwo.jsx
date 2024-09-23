import React from 'react'
import Cards from './Cards'
import CardsTwo from './CardsTwo'
import CardsThree from './CardsThree'
function SectionTwo() {
  return (
    <div>

<div className='flex flex-col items-center w-full'>

<div className='max-sm:flex-col max-sm:items-center mt-10 md:flex-row flex justify-center w-full mb-20' >
    <div className='flex flex-col items-center'>
            <h4 className='text-[rgba(0,0,0,.5)] font-poppins-bold text-[16px] font-[700]'>FUNCIONALIDADES</h4>
            <div className=' md:min-w-[382px] lg:min-w-[550px] mb-[20px] mt-4'>
                <h1 className='max-sm:text-[35px] text-center text-[#38383D] font-poppins-bold font-[600] text-[40px]'>Conheça <span className='text-[#0E62FD]'>funcionalidades</span> que fazem a diferença no <br /> seu atendimento</h1>
            </div>
           
    </div>
    
</div>


<div className='flex flex-col'>
    <Cards nome="Prontuário Eletrônico" texto="Manusear papel no dia a dia pode ser um desafio. Ganhe agilidade com um Prontuário Eletrônico e tenha todos os registros do paciente em tela única, informações de consultas, exames, atendimentos, histórico, anexo de documentos e muito mais." img="https://saudehd.com.br/wp-content/uploads/2023/08/Agendamento-300x225.png"/>
    
    <CardsTwo nome="Confirmação por WhatsApp" texto="REDUZA AS FALTAS EM ATÉ 70%.
    Com nossa  notificação e confirmação por WhatsApp integrado, você nem o cliente precisa ligar para confirmar nem desmarcar, é tudo pelo celular." img="https://saudehd.com.br/wp-content/uploads/2024/07/Design-sem-nome-25-768x465.png"/>
    
    <CardsThree nome="Totem de Autoatendimento" texto="CHEGA DE GENTE AGLOMERADA NA RECEPÇÃO Criamos um totem de Autoatendimento de baixo custo integrado. Sua recepcionista com atenção no cliente terá mais tempo para converter novos serviços. " img="https://saudehd.com.br/wp-content/uploads/2024/07/Toten-tela-2-768x768.png"/>
</div>

</div>
        


    </div>
  )
}

export default SectionTwo