import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropup, IoMdArrowDropdown  } from "react-icons/io";

function Accordion({titulo, texto}) {

    let [ativo, setAtivo] = useState(false)

    function ativar(){
        if(ativo === true){
            setAtivo(false)
        }else{
            setAtivo(true)
        }
        
    }
  return (
    <div>

<div className='max-w-[552px]'>
    
            <div onClick={ativar} className={`cursor-pointer  flex justify-between   ${ativo === false ? "border-b-[1px] border-[#d5d8dc] py-4" : "border-none "}  `}>
                <h1 className='text-[#38383D] ml-2 py-2 text-[22px] max-w-[409px] font-[700]'>{titulo}</h1>
                {
                    ativo === false ? <IoMdArrowDropdown className='mt-[20px]' size={22}/>: <IoMdArrowDropup className='mt-[20px]' size={22} /> 
                }
                
            </div>
    
            {
                ativo === true ? <div className='border-b-[1px] border-[#d5d8dc]'>
    
                <p className='text-[#333] ml-2 max-w-[522px] leading-6 pb-4 text-[14px] font-[600]'>{texto}</p>
    
                </div> : <div></div>
            }
</div>
    
        

    </div>
  )
}

export default Accordion