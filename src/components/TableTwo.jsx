import React from 'react'
import { FaCheck } from "react-icons/fa6";

function TableTwo({cor, mensal}) {
    
  return (
    
    <div>
           
           <div className='w-[355px] mt-4 h-[922px]  border-2 border-[#A3A9BC] p-4 rounded-[6px]'>
               
                <div className='flex flex-col mt-2 items-center gap-3'>
                    <h2 className='text-[#2D2D2D] text-[25px] font-[600]'>Clínica Starter</h2>
                   
                    
                    {
                        mensal === true ? <div className='flex flex-col items-center gap-2'>
                        <h3 className='text-[#9C9C9C] text-[16px] font-[700]'><strike>R$ 499,90</strike></h3>
                         <h2 className={`text-[${cor}] text-[18px] font-[700] bg-[#9b51e0]`}>ECONOMIZE 22%</h2>
                    </div> : <h1 className='mb-[32px]'></h1>
                    }
                    <h1 className={` text-[48px] font-[700] flex items-center gap-2`}>
                    {
                            mensal === true ? <><span className={`text-[#5025D1] text-[18px]`}>R$</span><span className='text-[#5025D1]'>299,90</span> <span className='text-[18px] text-[#5025D1]'>/MÊS*</span></> : <><span className={`text-[#5025D1] text-[18px]`}>R$</span><span className='text-[#5025D1]'>499,90</span> <span className='text-[18px] text-[#5025D1]'>/MÊS*</span></> 
                        }
                    </h1>
                    <p className='text-center text-[16px] text-[#4a4a4a] font-[600]'> Para Clínicas que estão iniciando uma estratégia de crescimento</p>
                    <div className={`bg-[${cor}] px-10 py-3 cursor-pointer rounded-[6px] text-white text-[16px] font-[700] mb-7 `}>
                        Contratar
                    </div>
                </div>

                <div className='bg-[#D5DFFF] w-full h-[2px]'>

                </div>
                
                <div>
                    <h2 className='text-[18px] text-[#393939] font-[700] my-4'>Recursos do plano Personal:</h2>
                    <ul className='text-[17px] text-[#2A2A2A] font-[550] flex flex-col gap-5'>
                        <li>Tudo do plano Personal e mais: </li>
                        <li className='flex items-center gap-2'><FaCheck />Até 3 profissionais + 2 Atendentes</li>
                        <li className='flex items-center gap-2'><FaCheck /> Profissionais avulsos + R$ 59,90</li>
                        <li className='flex items-center gap-2'><FaCheck /> Totem de Autoatendimento</li>
                        <li className='flex items-center gap-2'><FaCheck /> Painel de chamadas</li>
                        <li className='flex items-center gap-2'><FaCheck /> Relatórios</li>
                    </ul>
                </div>

            </div>

    </div>
  )
}

export default TableTwo