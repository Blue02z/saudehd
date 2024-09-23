import React from 'react'

function Cards({nome, texto, img}) {
  return (
    <div className='flex flex-wrap justify-evenly w-full mb-10'>


            <div className='w-[530px] border rounded-[4px] border-[#f5f5f5] pt-8 pb-18 pl-10'>
                    <h2 className='text-[#38383D] text-[24px] font-poppins-bold font-[700] mb-5'>{nome}</h2>
                    <p className='text-[#A6A6B0]   font-poppins-regular font-[500]'>{texto}</p>
            </div>

            <div>
                <img src={img} alt="" />
            </div>


    </div>
  )
}

export default Cards