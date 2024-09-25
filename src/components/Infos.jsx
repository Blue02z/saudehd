import React from 'react'

function Infos({titulo, info1, info2, info3, link}) {
  return (
    <div>

        <div className='flex flex-col items-start gap-4'>
            <h2 className='text-[17px] text-[white] font-[600]'>{titulo}</h2>
            
            {
                link === true ? <div className='flex flex-col  gap-4'>
                    <a href="">
                        <p className='text-[15px] text-[white] font-[550]'>{info1}</p>
                    </a>
                <a href="">
                    <p className='text-[15px] text-[white] font-[550]' >{info2}</p>
                </a>
            </div> :  <div className='flex flex-col  gap-4'>
        
                        <p className='text-[15px] text-[white] font-[550]'>{info1}</p>
                    <p className='text-[15px] text-[white] font-[550]' >{info2}</p>
               
            </div>

            }
           
        </div>


    </div>
  )
}

export default Infos