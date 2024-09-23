import React from 'react'
import { FaCheck } from "react-icons/fa6";

function TableThree({cor, mensal}) {
  return (
    <div>

<div className='w-[355px] mt-4 h-[922px]  border-2 border-[#A3A9BC] p-4 rounded-[6px]'>
                <div className='flex flex-col items-center mt-2 gap-3'>
                    <h2 className='text-[#2D2D2D] text-[25px] font-[600]'>Premium</h2>
                    
                    {
                        mensal === true ? <div className='flex flex-col items-center gap-2'>
                        <h3 className='text-[#9C9C9C] text-[16px] font-[700]'><strike>R$ 699,90</strike></h3>
                         <h2 className={`text-[${cor}] text-[18px] font-[700] bg-[#f78da7]`}>ECONOMIZE 22%</h2>
                    </div> : <h1 className='mb-[32px]'></h1>
                    }
                    
                    <h1 className={' text-[48px] font-[700] flex items-center gap-2'}>
                    {
                            mensal === true ? <><span className={`text-[${cor}] text-[18px]`}>R$</span><span className='text-[#D33061]'>499,90 </span><span className='text-[18px] text-[#D33061]'>/MÊS*</span></> : <><span className={`text-[#D33061] text-[18px]`}>R$</span><span className='text-[#D33061]'>699,90</span> <span className='text-[18px] text-[#D33061]'>/MÊS*</span></> 
                        }
                    </h1>
                    <p className='text-center text-[16px] text-[#4a4a4a] font-[600]'>Plano para Clinicas avançadas em tecnologia e faturamento</p>
                    <div className={`bg-[#D33061] px-10 cursor-pointer py-3 rounded-[6px] text-white text-[16px] font-[700] mb-7 `}>
                        Contratar
                    </div>
                </div>

                <div className='bg-[#D5DFFF] w-full h-[2px]'>

                </div>
                
                <div className=' flex flex-col gap-16'>
                    <div>
                        <h2 className='text-[18px] text-[#393939] font-[700] my-4'>Recursos do plano Starter:</h2>
                        <ul className='text-[17px] text-[#2A2A2A] font-[550] flex flex-col gap-5'>
                            <li>Tudo do plano Personal e mais:</li>
                            <li className='flex items-center gap-2'><FaCheck /> Até 10 profissionais</li>
                            <li className='flex items-center gap-2'><FaCheck />Sem limite de Atendentes</li>
                            <li className='flex items-center gap-2'><FaCheck /> Suporte Presencial*</li>
                            <li className='flex items-center gap-2'><FaCheck /> Telemedicina*</li>
                            <li className='flex items-center gap-2'><FaCheck /> Integração com outros softwares*</li>
                            <li className='flex items-center gap-2'><FaCheck /> IA com ChatGPT*</li>
                            <li className='flex items-center gap-2'><FaCheck /> Gestão Financeira</li>
                            <li className='flex items-center gap-2'><FaCheck /> Customização de relatórios*</li>
                        </ul>
                    </div>
                    <p className='text-[16px] text-[#393939] font-[500]'>* Valores negociados em separado</p>
                </div>

            </div>

    </div>
  )
}

export default TableThree