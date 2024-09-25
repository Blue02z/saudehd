import React from 'react'
import medico from '../imgs/img1.png'
import Banner from './Banner'
function SectionOne() {

  return (
    <div className='flex flex-col items-center w-full'>

            <div className='max-sm:flex-col max-sm:items-center mt-10 md:flex-row flex justify-center w-full mb-20' >
                <div className='max-w-[610px] ml-24 flex flex-col max-sm:items-center'>
                        <h4 className='text-[#63636F] text-[16px] font-bold'>SOFTWARE PARA CLÍNICAS E CONSULTÓRIOS</h4>
                        <div className=' md:min-w-[382px] lg:min-w-[550px] mb-[20px] mt-4'>
                            <h1 className='max-sm:text-[35px] text-[#424c52] text-[50px] font-[500] font-poppins'><span className=' text-[#0E62FD] font-poppins font-extrabold'>Inovação</span> para <br /> acelerar o crescimento
                            da sua clínica.</h1>
                        </div>
                        <p className='max-sm:text-[16px] max-sm:text-center max-sm:max-w-[329px] mb-4 min-w-[412px] font-poppins text-[#424c52] text-[22px] '>Somos a solução intuitiva, completa e de baixo custo que cuida da sua clínica enquanto você prioriza a experiência de quem confia em você.</p>
                        <div className='bg-[#0E62FD] cursor-pointer hover:scale-[1.1] hover:ease-in duration-[250ms] max-w-[256px] flex justify-center items-center rounded-[4px]'>
                            <h2 className='font-poppins font-regular text-white p-2 '>AGENDAR DEMONSTRAÇÃO</h2>
                        </div>
                </div>
                <div className='flex justify-center'>
                    <img src={medico} className='w-[519px] relative'  alt="" />
                </div>
            </div>

            <Banner/>


    </div>
  )
}

export default SectionOne