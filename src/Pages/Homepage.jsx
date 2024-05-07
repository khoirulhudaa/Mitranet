import React, { useRef, useState } from 'react'
import { FaPlay, FaStop } from 'react-icons/fa'
import { AboutSignature, BgAbout, Car, CheckWhite, DanaTunai, Gold, HandphoneHero, Hero, Particle1, Particle2, Signature, SimpleFast, TourHalal } from '../Aseets'
import Footer from '../Components/Footer'
import MoreInfoPage from '../Components/MoreInfo'
import Navbar from '../Components/Navbar'
import '../index.css'

const Homepage = () => {

    const [play, setPlay] = useState(false)
    
    const videoRef = useRef()

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlay(true)
        }
    };

    // Fungsi untuk menghentikan pemutaran video
    const handleStop = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setPlay(false)
        }
    };

  return (
    <div className='w-screen overflow-x-hidden h-max'>
        <Navbar />

        {/* Hero- Beranda */}
        <section className='relative w-full flex items-center justify-center'>
            <div className='relative w-[90%] h-[500px] rounded-[20px] relative my-6'>
                <div className='relative z-[333] text-white justify-center items-center w-full lg:w-max mx-auto text-center mt-12'>
                    <h2 className='mb-6 text-[22px] lg:text-[30px] font-[600]'>Hijrah Finansial berbasis Syariah mulai dari sini</h2> 
                    <p className='text-[12px] lg:text-[14px]'>Hijrah finansial Syariah: Langkah kecil menuju paradigma keuangan Islam yang etis</p>
                    <div className='w-max h-max px-6 bg-[#568660] rounded-full mx-auto py-3 text-center flex items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] my-5 shadow-md'>
                        <p>Selengkapnya</p>
                    </div>
                    <img src={HandphoneHero} alt="handphone-hero" className='w-[80%] lg:w-[50%] m-auto mt-8' />
                </div>
                <img src={Hero} alt="hero-honepage" className='absolute left-0 top-0 w-full h-full object-cover' />
            </div>
        </section>

        {/* section 2 - Beranda */}
        <section className='relative w-[90%] mx-auto lg:mt-32 lg:flex items-center h-max lg:h-max justify-center'>
            <img src={BgAbout} alt="about-background" className='absolute left-0 top-0 w-full h-full' />
            <div className='relative z-[3333] p-8 border-r border-r-slate-300 w-full lg:w-1/2 h-full'> 
                <img src={AboutSignature} alt="about-image" />
            </div>
            <div className='relative z-[3333] p-8 w-full lg:w-1/2 h-full'>
                <h3 className='text-[23px] lg:text-[32px] mb-4'>Tentang Mitranet</h3>
                <p className='text-[12px] lg:text-[14px] leading-loose'>MitraNet merupakan platform pendanaan & pembiayaan syariah berbasis digital yang mempunyai tujuan mulia untuk meningkatkan kesadaran umat islam agar terhindar dari praktik riba. Dengan prinsip kerja 100% syariah, menjunjung tinggi hukum islam dalam kegiatan operasionalnya berdasarkan Al - Qur’an, Hadist & Fatwa Ulama. Sehingga diharapkan mampu mewujudkan ekosistem halal di Indonesia.</p>
                <p className='my-6'>JOSEFINE</p>
                <img src={Signature} alt="signature" className='w-[15%]' />
            </div>
        </section>

        {/* section 3 - Beranda */}
        <section className='relative bg-mainColor p-4 lg:p-10 overflow-hidden w-screen mx-auto mt-28 lg:flex items-center h-max lg:h-max justify-center'>
            <div className='w-full lg:w-1/2 h-max p-4 lg:p-8'>
                <img src={SimpleFast} alt="simpleFast" />
            </div>
            <div className='w-full lg:w-1/2 h-max p-4 lg:p-8'>
                <h3 className='text-white text-[26px] lg:text-[32px]'>Cara Mudah & Cepat</h3>
                <p className='text-white leading-loose text-[12px] lg:text-[14px] mt-4 mb-8'>Dapatkan Pendanaan Tunai, Menabung Emas, Pembiayaan Umroh & Pembiayaan Haji Halal Sepanjang Masa</p>
                
                <p className='flex text-white items-center mb-4'>
                    <img src={CheckWhite} alt="check-icon-white" />
                    <span className='ml-4 laeding-loose lg:text-[16px] text-[12px]'>Solusi finansial yang cepat dan efisien.</span>
                </p>
                <p className='flex text-white items-center mb-4'>
                    <img src={CheckWhite} alt="check-icon-white" />
                    <span className='ml-4 laeding-loose lg:text-[16px] text-[12px]'>Pembiayaan untuk umroh dan haji yang sesuai syariah dan berkelanjutan. </span>               
                </p>
            </div>
        </section>

        {/* section 4 - Beranda */}
        <section className='relative text-center p-4 lg:p-10 overflow-hidden w-screen mx-auto mt-10 flex items-center flex-col h-max lg:h-max justify-center'>
            <h3 className='text-[26px] lg:text-[32px] text-black'>Haji Umrah</h3>
            <p className='text-grayColor text-[12px] my-4'>Dapatkan Program Haji Reguler & Plus Terbaik</p>
            <p className='w-[90%] lg:w-[70%] mx-auto leading-loose my-1 text-[12px] lg:text-[14px] text-slate-600'>Terdaftar resmi di Kemenag & pemerintah kerajaan Arab Saudi, hati lebih tenang saat beribadah. MitraNet bekerjasama dengan berbagai perusahaan jasa layanan haji & umroh terpercaya.</p>
            
            <div className='relative w-full lg:w-[80%] mx-auto my-12 mt-24 lg:flex flex-col justify-center items-center h-max'>
                <div className='relative z-[3333] w-[100%] h-[300px] lg:h-[460px] shadow-lg overflow-hidden rounded-[16px] mx-auto'>
                    {
                        play ? (
                            <div className='absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%] top-1/2 w-[120px] h-[120px] rounded-full flex items-center justify-center curosr-pointer active:scale-[0.98] duration-100 z-[444] hover:brightness-[90%]'>
                                <div className='absolute w-full h-full bg-white bg-opacity-[0.2] rounded-full'>

                                </div>
                                <div className='absolute w-[70%] h-[70%] bg-white bg-opacity-[0.6] rounded-full'>

                                </div>
                                <div className='absolute w-[50%] h-[50%] bg-white bg-opacity-[1] rounded-full'>

                                </div>
                                <FaStop onClick={() => handleStop()} className='absolute text-[16px] text-[#3B3A5D]' />
                            </div>
                        ):
                            <div className='absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%] top-1/2 w-[120px] h-[120px] rounded-full flex items-center justify-center curosr-pointer active:scale-[0.98] duration-100 z-[444] hover:brightness-[90%]'>
                                <div className='absolute w-full h-full bg-white bg-opacity-[0.2] rounded-full'>

                                </div>
                                <div className='absolute w-[70%] h-[70%] bg-white bg-opacity-[0.6] rounded-full'>

                                </div>
                                <div className='absolute w-[50%] h-[50%] bg-white bg-opacity-[1] rounded-full'>

                                </div>
                                <FaPlay onClick={() => handlePlay()} className='absolute text-[16px] text-[#3B3A5D]' />
                            </div>
                    }
                    <iframe ref={videoRef} width="100%" height="100%" src="https://www.youtube.com/embed/wFVexb98I6I?si=oUSoTJHCp-DyvsN3&amp;controls=0&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <img src={Particle1} alt="particle" className='absolute lg:inline hidden left-[-50px] bottom-[-50px]' />
                <img src={Particle2} alt="particle" className='absolute right-[-50px] top-[-50px]' />
            </div>
        </section>

         {/* section 5 - Beranda */}
         <section className='relative bg-mainColor p-4 lg:p-10 overflow-hidden w-screen mx-auto mt-6 lg:mt-12 lg:flex items-center h-max lg:h-max justify-center'>
            <div className='w-full lg:w-1/2 h-max py-8 pl-4 lg:pl-[140px]'>
                <h3 className='text-white text-[32px]'>Emas</h3>
                <p className='text-white leading-loose text-[12px] lg:text-[14px] mt-4 mb-8'>Dapatkan Logam Mulia Emas Murni Terbaik</p>
                <p className='text-white w-[90%] lg:w-[70%] leading-loose text-[12px] lg:text-[14px] mt-4 mb-8'>Distributor Resmi PT Antam. Jaminan keaslian & kemurnian produk 99,99 % dengan akreditasi LBMA sehingga aman untuk investasi.</p>
                
                <div className='w-max h-max bg-white bg-opacity-[0.2] rounded-full px-6 py-3 text-white flex items-center justify-center mt-6 cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-100'>
                    <p className='font-[600]'>
                        Selengkapnya
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 h-max p-8'>
                <img src={Gold} alt="simpleFast" className='w-full lg:w-[80%] lg:rounded-tr-[260px] rounded-bl-[120px] shadow-lg' />
            </div>
        </section>

        {/* section 6 - Beranda */}
        <section className='relative p-6 lg:p-10 overflow-hidden w-screen mx-auto flex bg-white items-center h-max lg:h-[550px] justify-end'>
            <div className='relative z-[444] w-full lg:w-[90%] rounded-[12px] py-12 lg:w-[40%] lg:mr-[10%] h-max bg-white shadow-lg p-6'>
                <h2 className='text-[30px] font-[500]'>Dana Tunai</h2>
                <p className='my-6 text-slate-500 text-[12px]'>Dapatkan Dana Tunai Cepat Cair & Plafon Tinggi</p>
                <p className='leading-loose text-[14px]'>Margin pembiayaan kompetitif, tenor beragam, mudah & aman, sebagai solusi kebutuhan Anda. MitraNet bekerjasama dengan berbagai bank dan perusahaan finance terpercaya.</p>
            </div>
            <img src={DanaTunai} alt='data-tunai-background' className='absolute left-0 top-0 w-full h-full object-cover' />
        </section>

         {/* section 7 - Beranda */}
         <section className='relative overflow-hidden w-screen mx-auto mt-12 lg:mt-20 lg:flex bg-gradient-to-b from-white px-4 lg:px-12 to-slate-100 via-white items-center h-max lg:h-max justify-center'>
            <div className='relative z-[3333] lg:p-8 w-full lg:w-1/2 h-full'>
                <h3 className='text-[26px] lg:text-[32px] mb-4 font-[500]'>Wisata Halal</h3>
                <p className='my-4 text-slate-400 text-[12px]'>Dapatkan Destinasi Wisata Ramah Muslim Terbaik</p>
                <p className='text-[12px] lg:text-[14px] leading-loose'>Banyak paket tour menarik dengan itinerary jelas & lengkap sesuai kebutuhan Anda. MitraNet bekerjasama dengan berbagai perusahan tour & travel terpercaya.</p>
                <div className='w-max h-max bg-mainColor rounded-full px-6 py-3 text-white flex items-center justify-center mt-6 cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-100'>
                    <p className='font-[600]'>
                        Selengkapnya
                    </p>
                </div>
            </div>
            <div className='relative z-[3333] lg:mt-0 mt-6 lg:p-8 border-r border-r-slate-300 w-full lg:w-1/2 h-full'> 
                <img src={TourHalal} alt="about-image" />
            </div>
        </section>

        <section className='relative overflow-hidden w-screen mx-auto mt-12 lg:mt-16 px-4 lg:px-12 lg:flex bgwhite items-center h-max lg:h-max justify-center'>
            <div className='relative z-[3333] lg:p-8 w-full lg:w-1/2 h-full'> 
                <img src={Car} alt="about-image" />
            </div>
            <div className='relative z-[3333] p-4 lg:p-8 w-full lg:w-1/2 h-full'>
                <h3 className='text-[26px] lg:text-[32px] mb-4 font-[500]'>Mobil</h3>
                <p className='my-4 text-slate-400 text-[12px]'>Dapatkan Mobil Baru & Bekas Terbaik Hanya Disini!</p>
                <p className='text-[12px] lg:text-[14px] leading-loose'>MitraNet memfasilitasi kredit mobil baru & bekas semua merek berbasis syariah dengan harga yang kompetitif. Bekerjasama dengan berbagai bank dan perusahaan finance terpercaya.</p>
                <div className='w-max h-max bg-mainColor rounded-full px-6 py-3 text-white flex items-center justify-center mt-6 cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-100'>
                    <p className='font-[600]'>
                        Selengkapnya
                    </p>
                </div>
            </div>
        </section>

        {/* section 8 - Beranda */}
        <MoreInfoPage />

        <Footer />
    </div>
  )
}

export default Homepage
