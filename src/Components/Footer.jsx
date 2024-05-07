import React from 'react'
import { FooterM, Logo } from '../Aseets'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='relative overflow-hidden lg:flex flex-col w-screen h-max pt-14'>
        <img src={FooterM} alt="footer-background" className='w-full h-full absolute left-0 top-0' />
        <div className='relative z-[555] w-screen h-max lg:flex items-center px-4 lg:px-20'>
            <div className='w-full lg:w-[40%] lg:mb-0 mb-12'>
                <img src={Logo} alt="logo-mitranet" className='mb-6' />
                <p className='text-[14px] leading-loose'>
                    Alamat: <br />
                    PT Bahtera Mitra Net <br />
                    Plaza Aminta 2nd Floor, suite 201 Jl. TB Simatupang Kav.10 Jakarta  <br />
                    Selatan 12310 
                </p>
            </div>
            <div className='w-full lg:w-[60%] lg:flex lg:justify-end relative top-0'>
                <div className='w-full lg:w-[30%] lg:mb-0 mb-12'>
                    <h2 className='text-[20px] lg:text-[22px] mb-6'>Beranda</h2>
                    <ul className='list-none'>
                        <li className='my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100'>
                            Produk
                        </li>
                        <li className='my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100'>
                            Hubungi Kami
                        </li>
                    </ul>
                </div>
                <div className='w-full lg:w-[30%] lg:mb-0 mb-12'>
                    <h2 className='text-[20px] lg:text-[22px] mb-6'>Tentang Kami</h2>
                    <ul className='list-none'>
                        <li className='my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100'>
                            Filosofi
                        </li>
                        <li className='my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100'>
                            Visi Misi
                        </li>
                        <li className='my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100'>
                            Partners
                        </li>
                    </ul>
                </div>
                <div className='w-full lg:w-[30%]'>
                    <h2 className='text-[20px] lg:text-[22px] mb-6'>Contact Us :</h2>
                    <div className='flex items-center w-max'>
                        <FaInstagram className='text-green-600 text-[18px] mx-3' />
                        <FaFacebookF className='text-green-600 text-[18px] mx-3' />
                        <FaEnvelope className='text-green-600 text-[18px] mx-3' />
                        <FaWhatsapp className='text-green-600 text-[18px] mx-3' />
                    </div>
                </div>
            </div>
        </div>
        <div className='relative w-full mt-8 border-t border-t-slate-300 text-black h-max py-8 text-center flex justify-center items-center'>
            <small>© MitraNet. All rights reserved.</small>
        </div>
    </div>
  )
}

export default Footer
