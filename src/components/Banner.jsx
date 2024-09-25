import React from 'react'
import { FaRegClock, FaRegFileExcel  } from "react-icons/fa";

function Banner() {
  return (
    <div>


        <div className='lg:bg-[#F5F5FA] max-md:min-w-[500px] max-md:items-center flex max-md:flex-col lg:p-16 '>
            <h2 className=' font-[700] text-[13px] text-[#333]'>EXPLORE NOSSA APLICAÇÃO</h2>
            <div className='flex justify-evelyn max-md:flex-col gap-10'>
                <div className='max-w-[315px]'>
                    <h1 className='text-[#38383D] text-[32px] max-md:text-[28px] font-poppins font-[600]'>Projetado para facilitar a gestão da sua clínica.</h1>
                </div>
                <div className='flex max-md:flex-col gap-10'>
                    <div className='flex max-md:justify-start justify-center gap-2'>
                        
                            <FaRegClock className='bg-[#FF424E] w-[25px] h-[25px] rounded-full p-[2px]' color='white'/>
                       
                        <div className='w-[280px] max-md:min-w-[355px]'>
                            <h2 className='text-[#38383D] text-[19px] font-poppins font-bold'>Economia de tempo</h2>
                            <p className='text-[#A6A6B0] font-medium text-[15px] max-md:text[10px]'>Com um sistema Multiempresa intuitivo e prático e automações, os processos são mais rápidos e os atendimentos mais eficientes.</p>
                        </div>
                    </div>
                    <div className='flex justify-center max-md:justify-start gap-2'>
                        <FaRegFileExcel className='bg-[#B207EC] w-[25px] h-[25px] rounded-full p-[2px]' color='white'/>
                        <div className='w-[280px] max-md:min-w-[355px]'>
                            <h2 className='text-[19px] text-[#38383D] font-poppins font-bold'>Redução de erros</h2>
                            <p className='text-[#A6A6B0] font-medium  max-md:text[10px] text-[15px]'>Reduzir custos com as operações é sempre um desafio, com nossas automações, BOTs, e IA, podemos deixar o Software trabalhar para triplicar resultados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner