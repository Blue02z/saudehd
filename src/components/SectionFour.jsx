import React, { useState } from 'react'

import Accordion from './Accordion'
function SectionFour() {
    const [value, setValue] = useState([])

  return (
    <div className='flex max-md:flex-col mt-28 justify-center gap-10 h-[850px] '>


            <div className='mt-20 w-[520px]'>
                <div className='mb-10'>
                    <h2 className='text-[rgba(0,0,0,.5)] text-[16px] font-[650]'>Dúvidas frequentes</h2>
                    <h1 className='text-[40px] text-[#38383D] font-[550]'>Tem alguma <span className='text-[#0E62FD] font-[700]'>dúvida</span><br />Entre em contato conosco</h1>
                </div>
                <div className=''>
                    <Accordion titulo="Tenho que pagar por cada usuário cadastrado no sistema?" texto="Não! Você só paga por usuário simultâneo e pode cadastrar quantos usuários quiser."/>
                    <Accordion titulo="Quem usa o saúdeHD, o médico ou o paciente?" texto="O sistema não é para uso do paciente. O saúdeHD é uma solução desenvolvida para médicos que querem melhorar a gestão e digitalizar o consultório."/>
                    <Accordion titulo="Tenho suporte 24hrs?" texto="Claro, você pode contar com nosso suporte incrível 24 horas por dia, 7 dias por semana! Nossa equipe dedicada está sempre pronta para ajudar a resolver qualquer dúvida ou problema que você possa ter, a qualquer momento do dia ou da noite."/>
                    <Accordion titulo="Como funciona o cancelamento?" texto="Compreendemos que circunstâncias podem mudar, e o processo de cancelamento conosco é simples e sem complicações. Se você decidir cancelar nossos serviços, o procedimento é transparente e eficiente"/>
                </div>
            </div>

            <div className='border-2 border-[#abb8c3] rounded-[11px] py-[30px] px-[40px]'>

                    <h2 className='text-[#38383D] text-[36px] mb-8 font-[600]'>Fale conosco</h2>

                    <form action="" className='flex flex-col ml-4 gap-4'>
                        <div>
                            <h4 className='text-[#38383D] text-[16px] font-[700] gap-2'>Nome completo<span className='text-[#ff0000] font-[400]'>*</span></h4>
                            <div className='w-[461px] bg-[#F9F9FC] h-[49px] flex justify-center items-center '>
                            <input className='w-[451px] bg-[#F9F9FC] text-[18px] font-[450]  h-[30px] outline-none rounded-[6px]' type="text" />
                            </div>
                        </div>

                        <div>
                            <h4 className='text-[#38383D] text-[16px] font-[700] gap-2'>E-mailo<span className='text-[#ff0000] font-[400]'>*</span></h4>
                            <div className='w-[461px] bg-[#F9F9FC] h-[49px] flex justify-center items-center '>
                            <input className='w-[451px] bg-[#F9F9FC] text-[18px] font-[450]  h-[30px] outline-none rounded-[6px]' type="text"/>
                            </div>
                           
                        </div>

                        <div>
                            <h4 className='text-[#38383D] text-[16px] font-[700] gap-2'>Empresa<span className='text-[#ff0000] font-[400]'>*</span></h4>
                            <div className='w-[461px] bg-[#F9F9FC] h-[49px] flex justify-center items-center '>
                            <input className='w-[451px] bg-[#F9F9FC] text-[18px] font-[450]  h-[30px] outline-none rounded-[6px]' type="text" />
                            </div>
                        </div>

                        <div>
                            <h4 className='text-[#38383D] text-[16px] font-[700] gap-2'>WhatsApp<span className='text-[#ff0000] font-[400]'>*</span></h4>
                            <div className='w-[461px] bg-[#F9F9FC] h-[49px] flex justify-center items-center '>
                            <input className='w-[451px] bg-[#F9F9FC] text-[18px] font-[450]  h-[30px] outline-none rounded-[6px]' type="text" maxLength={11} onChange={e => setValue(e.target.value)}/>
                            </div>
                            {
                                value.length < 11 ?  <p className='text-[4a4a4a] text-[14px]'>{value.length} de 11 caracteres</p> :  <p className='text-[4a4a4a] text-[14px]'>{value.length} de 11 caracteres no máximo</p>
                               
                            }
                        </div>
                        
                        <div>
                            <h4 className='text-[#38383D] text-[16px] font-[700] gap-2'>Para quem você busca uma solução digital?<span className='text-[#ff0000] font-[400]'>*</span></h4>
                            <div className='w-[461px] bg-[#F9F9FC] rounded-[6px] h-[49px] flex justify-center  items-center   '>
                            <select name="" id="" className='h-[30px] cursor-pointer bg-[#F9F9FC] outline-none w-[451px] '>
                                <option value="">Selecione o tipo de solução digital</option>
                                <option value="">Um consultório</option>
                                <option value="">Uma clínica</option>
                                <option value="">Um centro de diagnóstico ou laboratório</option>
                                <option value="">Outros</option>
                            </select>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-[#38383D] text-[16px] font-[700] gap-2'>Você atua em qual função?<span className='text-[#ff0000] font-[400]'>*</span></h4>
                            <div className='w-[461px] bg-[#F9F9FC] rounded-[6px] h-[49px] flex justify-center  items-center   '>
                            <select name="" id="" className='h-[30px] cursor-pointer bg-[#F9F9FC] outline-none w-[451px] '>
                                <option value="">Selecione a função mais adequada</option>
                                <option value="">Médico(a)</option>
                                <option value="">Profissional da saúde (ex:psicólogo(a), nutricionista, fisioterapeuta)</option>
                                <option value="">Propriotário ou CEO</option>
                                <option value="">Recepcionista, secretária ou administrativa</option>
                                <option value="">Gerente ou admninistrador</option>
                            </select>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <div className='w-[155px] cursor-pointer h-[48px] flex justify-center items-center rounded-[4px] bg-[#13aff0] hover:bg-[#007aff] ease-in duration-100'>
                                <h2 className='text-[18px] font-[600] text-[white]'>ENVIAR</h2>
                            </div>
                        </div>

                    </form>



            </div>

    </div>
  )
}

export default SectionFour