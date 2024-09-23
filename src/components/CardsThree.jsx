import React from 'react'

function CardsThree({nome, texto, img}) {
  return (
    <div className='flex flex-wrap justify-evenly  w-full'>


            <div className='w-[530px] h-[251px] ml-24  border rounded-[4px] border-[#f5f5f5] pt-8 pb-14 pl-10  relative box-border'>
                    <h2 className='text-[#38383D] text-[24px] font-poppins-bold font-[700] mb-5'>{nome}</h2>
                    <p className='text-[#A6A6B0]   font-poppins-regular font-[500]'>{texto}</p>
            </div>

            <div className='inline-block box-border'>
                <img src={img} className='h-[461px] w-[500px] relative' alt="" />
            </div>

            


    </div>
  )
}

export default CardsThree