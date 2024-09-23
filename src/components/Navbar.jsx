import React from 'react'
import logonav from '../imgs/logo_saudehd.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <div>

            <div className='flex justify-around ml-5 items-center mt-1 border-b-[2px] pb-3'>

                <div>
                    <img src={logonav} className='md:max-w-[152px] md sm:max-w-[100px] max-w-[152px]'  alt="" />
                </div>

                <div>
                    <ul className='flex gap-[40px] text-[#64646D] font-semibold flex-wrap '>
                        <li><a href="" className='hover:border-b-[3px] px-5 pb-2 border-[#0E62FD]'>Funcionalidades</a></li>
                        <li><a href="" className='hover:border-b-[3px] px-5 pb-2 border-[#0E62FD]'>Planos e preços</a></li>
                        <li><a href="" className='hover:border-b-[3px] px-5 pb-2 border-[#0E62FD]'>Contatos</a></li>
                    </ul>
                </div>

                {}

                <div className='flex items-center gap-5 cursor-pointer'>
                    <div className='border border-[#0E62FD] rounded-[px] flex justify-center  py-[6px] px-[32px]'>
                        <h2 className='text-[#0E62FD] font-semibold text-center'>Teste <br /> Gratis</h2>
                        <FaExternalLinkAlt color='#0E62FD' className='ml-4 w-[14px] h-[15px]'/>

                    </div>


                    <div className=''>
                        <button className='bg-[#0E62FD] max-w-[146px] py-[8px] px-[24px] rounded-[22px] flex items-center justify-center'>
                            <h2 className='text-white font-poppins-bold font-[600]'>Sou cliente</h2>
                        </button>
                    </div>

                </div>

            </div>

    </div>
  )
}
