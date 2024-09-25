import React from 'react'
import Cards from './Cards'
import CardsTwo from './CardsTwo'
import CardsThree from './CardsThree'
import { useState } from 'react'
import Table from './Table'
import TableTwo from './TableTwo'
import TableThree from './TableThree'
import { FaWhatsapp } from "react-icons/fa";

function SectionThree() {
    const [btnSet, setBtnSet] = useState("anual")

    function acionarBotao(){
       setBtnSet("anual")
    }

    function acionarBotao2(){
        setBtnSet("mensal")
     }

  return (
    <div>

<div className='flex flex-col mt-10 items-center w-full'>

<div className='max-sm:items-center flex-col mt-10 md:flex-row flex justify-center w-full mb-20' >
    <div className='flex flex-col items-center'>
            <h4 className='text-[rgba(0,0,0,.5)] font-poppins-bold text-[16px] font-[700]'>Nossos planos</h4>
            <div className=' md:min-w-[382px] lg:min-w-[550px] mb-[20px] mt-4'>
                <h1 className='max-sm:text-[35px] text-center text-[#38383D] font-poppins-bold font-[600] text-[40px]'>Selecione o melhor <span className='text-[#0E62FD]'>plano</span> <br />
                para sua clínica.</h1>
            </div>

    <div className='flex gap-8 mt-7'>
        <div className={btnSet === "anual" ? "bg-[#1577E0] cursor-pointer text-white px-5 font-[600] rounded-[6px] py-2" : "px-5 rounded-[6px] py-2 bg-white cursor-pointer text-[#555555] font-[500]"}  onClick={acionarBotao} ><p >Anual</p></div>
        <div className={btnSet === "mensal" ? "bg-[#1577E0] cursor-pointer text-white px-5 font-[600] rounded-[6px] py-2" : "px-5 rounded-[6px] py-2 bg-white cursor-pointer text-[#555555] font-[500]"}  onClick={acionarBotao2} ><p >Mensal</p></div>
    </div>  
           
    </div>


    
    
</div>

           

                {btnSet === "anual" ? 
                <div className='gap-5 max-md:flex-col flex justify-center'>
                     <div className='w-[276px] h-[36px] flex justify-center items-center rounded-[14px] absolute bg-[#5025D1] mb-2'>
                        <p className='text-white text-[16px] font-[600]'>Mais populares</p>
                     </div>
                    <Table cor={"#1577E0"} mensal={true}/>  <TableTwo cor={"#5025D1"} mensal={true} />  <TableThree cor={"#D33061"} mensal={true}/>
                     </div>
                : <div className='gap-5 flex max-md:flex-col justify-center'>
                    <div className='w-[276px] h-[36px] flex justify-center items-center rounded-[14px] absolute bg-[#5025D1] mb-2'>
                        <p className='text-white text-[16px] font-[600]'>Mais populares</p>
                     </div>
                    <Table cor={"#1577E0"}/>  <TableTwo cor={"#5025D1"}/>  <TableThree cor={"#D33061"}/>
                 </div>
            }

                <div className='gap-5 flex justify-center mt-16'>
                    <div className='w-[376px] h-[36px] flex justify-center items-center rounded-[14px] absolute bg-[#0E62FD] mb-2'>
                        <p className='text-white text-[16px] font-[600]'>Ideal para empresas</p>
                     </div>
                    <div className='w-[500px] mt-4 flex justify-center flex-col items-center border-2 border-[#A3A9BC] p-4 rounded-[6px] gap-10 py-12'>
                            <h1 className='text-[#38383D] text-[40px] font-[600]'>Plano <span className='text-[#0E62FD] font-[700]'>Business</span></h1>
                            <div className='bg-[#D5DFFF] w-[200px] h-[2px]'></div>
                            <p className='text-[#515151] text-[18px] text-center font-[500] '>Temos o plano perfeito para sua empresa!
                                <br />
                                
                            Personalizável para o seu negócio</p>
                            <div className='bg-[#0E62FD] flex items-center gap-2 py-3 px-4 rounded-[3px] cursor-pointer hover:scale-[1.1] hover:ease-in duration-[250ms]'>
                                <h3 className='text-white text-[15px] font-[500]'>Fale conosco</h3>
                                <FaWhatsapp color='white'/>
                            </div>
                    </div>
                </div>
          

</div>


    </div>
  )
}

export default SectionThree