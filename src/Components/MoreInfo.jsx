import React from 'react'
import { Lines, MoreInfo } from '../Aseets'
import { useLocation } from 'react-router-dom'

const MoreInfoPage = () => {

  const location = useLocation()
  const path = location.pathname.includes('/data-tunai')

  return (
    <section className={`relative overflow-hidden w-screen mx-auto ${path ? 'mt-0' : 'mt-16'} px-16 flex bgwhite items-center h-[70vh] lg:h-max lg:h-[360px] justify-center`}>
        <div className='absolute z-[99999999999] w-[90%] lg:w-[60%] top-[50%] transform translate-y-[-50%] text-white left-[5.5%] top-0'>
            <h2 className='w-full text-[26px] lg:text-[32px]'>Ingin tau lebih lanjut tentang produk syariah MitraNet?</h2>
            <p className='w-full mt-5 text-[14px] tlg:ext-[16px]'>Dengan senang hati, kami akan membantu Anda. Silahkan hubungi kami!</p>
            <div className='w-max h-max px-6 bg-[#568660] rounded-full py-3 text-center flex items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] my-5 shadow-md'>
                <p>Selengkapnya</p>
            </div>
        </div>
        <img src={Lines} alt="line" className='relative z-[222222222222222] w-full left-0 top-0' />
        <div className='absolute w-full h-full bg-green-800 bg-opacity-[0.5] z-[22222]'>
        </div>
        <img src={MoreInfo} alt="moreInfo" className='absolute left-0w-full h-full top-0' />
    </section>
  )
}

export default MoreInfoPage
