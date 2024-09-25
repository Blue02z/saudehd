import React from 'react'
import Infos from './Infos'
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaWhatsapp  } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#112437]  items-center mt-8  flex-col flex'>

            <div className='flex items-center w-full mt-12'>
                <div className='flex flex-col items-center'>
                    <img className='max-w-[250px]' src="https://saudehd.com.br/wp-content/uploads/2023/11/Prancheta-1.png" alt="" />
                    <div className='flex  gap-6'>
                        <div><RiInstagramFill color='white' size={25}/></div>
                        <div><FaLinkedin color='white' size={25}/></div>
                        <div><FaWhatsapp color='white' size={25}/></div>
                    </div>
                
                </div>
                <div className='flex gap-24 w-full justify-center'>
                    <Infos titulo={"Contatos"} info1={"contato@healthdev.io"} info2={`Telefone/WhatsApp:`}  info3={"+55 85 9 9954-7116"}/>
                
                    <Infos titulo={"Endereços"} info1={"Avenida Dom Luís, 176, Mezanino - Aldeota"} info2={"Av. Dom Manuel, 1020, Sala 39 - Centro, Fortaleza - CE"}/>
                    <Infos titulo={"Institucionais"} info1={"Política de privacidade"} info2={"Termos de uso"} link={true}/>
                </div>
            </div>

            <p className=' mt-16 text-center text-[white] text-[16px] font-[600]'>© 2024. HealthDev Tecnologias para a Saúde LTDA. Todos os <br /> direitos reservados.
            </p>

    </div>
  )
}

export default Footer