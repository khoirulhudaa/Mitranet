import React, { useRef, useState } from 'react'
import { FaPlay, FaStop } from 'react-icons/fa'
import { CheckGreen, Dots, Filosofi, Finansial, HeroAbout, Particle1, Partner, Responsive, SquareYellow, Tumbuh } from '../Aseets'
import Footer from '../Components/Footer'
import MoreInfoPage from '../Components/MoreInfo'
import Navbar from '../Components/Navbar'

const About = () => {

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
    <div className='overflow-x-hidden h-max'>
    <Navbar />

    {/* Hero */}
    <section className='relative h-[55vh] text-white overflow-hidden font-bold w-full flex items-center justify-center'>
        <h2 className='relative z-[33] text-[18px] lg:text-[28px] w-[90vw] lg:w-[80vw] leading-loose mx-auto text-center'>“Semakin tinggi kesadaran umat Islam untuk menghindari <br /> riba didalam semua kegiatan muamalahnya”</h2>
        <img src={HeroAbout} className='absolute left-0 top-0 object-cover h-full w-full' alt='bg-about'/>
    </section>

    {/* Section 2 - About */}
    <section className='relative h-max text-white font-bold w-full flex items-center flex-col justify-center'>
        <div className='relative w-[90vw] lg:w-[60vw] rounded-[18px] mt-[-50px] h-[200px] lg:h-[400px] overflow-hidden'>
            <img src={Finansial} alt="finansial-bg" className='z-[333] object-cover w-full h-full' />
        </div>
        <h3 className='text-[26px] lg:text-[36px] text-black w-[90%] lg:w-max leading-loose text-center my-6'>Hijrah Finansial Berbasis Syariah</h3>
        <p className='text-center text-slate-500 font-normal text-[12px] lg:text-[14px] mx-auto w-[90%] lg:w-[60%] leading-loose'>Cara cepat & mudah dapatkan pendanaan tunai, menabung emas, pembiayaan umrah & pembiayaan haji halal sepanjang masa. Nikmati kemudahan akses pendanaan berbasis syariah dalam genggaman jari hanya disini!</p>
    </section>

    {/* Section 3 - About */}
    <section className='relative bg-mainColor px-10 py-16 overflow-hidden w-screen mx-auto mt-12 lg:mt-28 lg:flex items-center h-max lg:h-max justify-center'>
            <div className='w-full lg:w-1/2 h-max lg:p-8 relative'>
                <img src={Filosofi} alt="simpleFast" className='relative lg:w-[90%] ml-auto rounded-[22px] z-[33] overflow-hidden' />
                <img src={Dots} alt="particle" className='absolute left-[20px] top-[-20px] lg:inline hidden w-[40%]' />
                <img src={SquareYellow} alt="particle" className='absolute left-[70px] top-[10px] lg:inline hidden w-[25%]' />
            </div>
            <div className='w-full lg:w-1/2 h-max lg:p-8 lg:mt-0 mt-6'>
                <h3 className='text-white text-[26px] lg:text-[32px] border-b border-b-white pb-6 mb-4'>Filosofi</h3>
                <div className='lg:flex w-full h-max lg:h-[120px] text-white items-center mb-8 lg:mb-4'>
                    <div className='w-full lg:w-[15%] h-[120px] lg:mb-0 mb-4 lg:h-[86px] rounded-[10px] bg-white bg-opacity-[0.2] flex items-center p-5 justify-center'>
                        <img src={Tumbuh} alt="check-icon-white" />
                    </div>
                    <div className='w-full lg:w-[60%] lg:pl-4'>
                        <h2>Tumbuh</h2>
                        <span className='laeding-loose text-[12px]'>Mengangkat derajat ekonomi umat dengan prinsip kerja 100% syariah. Mengacu pada hukum islam berdasarkan Al - Qur’an, Hadist dan Fatwa Ulama.</span>
                    </div>
                </div>
                <div className='lg:flex w-full h-max lg:h-[120px] text-white items-center mb-8 lg:mb-4'>
                    <div className='w-full lg:w-[15%] h-[120px] lg:mb-0 mb-4 lg:h-[86px] rounded-[10px] bg-white bg-opacity-[0.2] flex items-center p-5 justify-center'>
                        <img src={Responsive} alt="check-icon-white" />
                    </div>
                    <div className='w-full lg:w-[60%] lg:pl-4'>
                        <h2>Responsive</h2>
                        <span className='laeding-loose text-[12px]'>Ikut andil dan memainkan peran penting secara langsung dalam mewujudkan ekosistem halal di Indonesia.</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4 - About */}
        <section className='relative bg-white flex-col text-center px-4 lg:px-10 py-4 lg:py-16 overflow-hidden w-screen mx-auto flex items-center h-max lg:h-max justify-center'>
            <h3 className='my-4 text-[26px] lg:text-[32px]'>Visi & Misi Kami</h3>
            <p className='w-[90%] lg:w-[50%] lg:text-[16px] text-[12px] mx-auto text-center'>Membangun ekonomi syariah yang inklusif dan berkelanjutan untuk masyarakat yang sejahtera.</p>
            <div className='lg:flex items-center mt-12'>
                <div className='w-full lg:w-1/2 lg:flex justify-center h-[300px] lg:h-[400px] lg:p-8 relative'>
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
                    <div className='relative z-[33] flex justify-center w-full h-full lg:inline hidden'>
                        <iframe ref={videoRef} className='rounded-[24px]' width="85%" height="100%" src="https://www.youtube.com/embed/wFVexb98I6I?si=oUSoTJHCp-DyvsN3&amp;controls=0&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='relative z-[33] flex justify-center w-full h-full lg:hidden inline'>
                        <iframe ref={videoRef} className='rounded-[24px]' width="100%" height="100%" src="https://www.youtube.com/embed/wFVexb98I6I?si=oUSoTJHCp-DyvsN3&amp;controls=0&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <img src={Dots} alt="particle" className='absolute left-[20px] top-[0px] w-[40%]' />
                </div>
                <div className='w-full lg:w-1/2 h-max lg:p-8 lg:mt-0 mt-6'>
                    <h3 className='text-black text-left text-[32px] border-b border-b-white mb-4'>Visi</h3>
                    <p className='leading-loose text-left text-[12px] lg:text-[14px]'>
                        Menjadi pionir dalam membangun ekosistem keuangan syariah yang inklusif dan berkelanjutan di Indonesia, dengan mengedepankan prinsip-prinsip Islam dalam setiap aspek operasionalnya untuk menciptakan masyarakat yang terhindar dari praktik riba dan menggalang kesadaran akan pentingnya keuangan syariah
                    </p>
                </div>
            </div>
            <div className='lg:flex items-center'>
                <div className='w-full lg:w-1/2 h-max text-left lg:p-8 lg:mt-0 mt-6'>
                    <h3 className='text-black text-left text-[32px] border-b border-b-white mb-4'>Misi</h3>
                   <div className='flex items-center w-full h-max mb-4'>
                    <img src={CheckGreen} className='w-[26px] mr-3' alt="check-icon" />
                    <p className='leading-loose text-[12px] lg:text-[14px]'>Mengembangkan platform pendanaan dan pembiayaan syariah yang inovatif dan mudah diakses bagi umat Islam di seluruh Indonesia.</p>
                   </div>
                   <div className='flex items-center w-full h-max mb-4'>
                    <img src={CheckGreen} className='w-[26px] mr-3' alt="check-icon" />
                    <p className='leading-loose text-[12px] lg:text-[14px]'>Menyediakan layanan yang transparan, adil, dan berkualitas tinggi sesuai dengan prinsip-prinsip syariah dalam pengelolaan dana dan pembiayaan.</p>
                   </div>
                   <div className='flex items-center w-full h-max mb-4'>
                    <img src={CheckGreen} className='w-[26px] mr-3' alt="check-icon" />
                    <p className='leading-loose text-[14px]'>Mengedukasi dan meningkatkan kesadaran masyarakat akan pentingnya menggunakan produk keuangan yang syariah melalui penyampaian informasi yang jelas dan edukatif.</p>
                   </div>
                </div>
                <div className='lg:-1/2 flex justify-center h-[300px] lg:h-[400px] lg:p-8 relative'>
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
                    <div className='relative z-[33] flex justify-center w-full h-full lg:inline hidden'>
                        <iframe ref={videoRef} className='rounded-[24px]' width="85%" height="100%" src="https://www.youtube.com/embed/wFVexb98I6I?si=oUSoTJHCp-DyvsN3&amp;controls=0&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='relative z-[33] flex justify-center w-full h-full lg:hidden inline'>
                        <iframe ref={videoRef} className='rounded-[24px]' width="100%" height="100%" src="https://www.youtube.com/embed/wFVexb98I6I?si=oUSoTJHCp-DyvsN3&amp;controls=0&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <img src={Particle1} alt="particle" className='absolute right-[20px] bottom-[0px] w-[40%]' />
                </div>
            </div>
        </section>

        {/* Section 5 - About */}
        <section className='relative bg-white mt-6 lg:mt-12 mb-14 flex-col text-center lg:px-10 overflow-hidden w-screen mx-auto flex items-center h-max lg:h-max justify-center'>
            <h3 className='text-[26px] lg:text-[32px]'>Partners</h3>
            <p className='leading-loose my-5 lg:text-[14px] text-[12px] w-[90%] lg:w-[60%] mx-auto text-center'>MitraNet dapat menjalin kemitraan dengan berbagai pihak yang memiliki visi dan nilai yang sejalan dalam memperkuat ekosistem keuangan syariah di Indonesia</p>
            
            <div className='w-[90vw] lg:w-[60vw] flex flex-wrap justify-center items-center'>
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
                <img src={Partner} alt="partner-logo" className='w-[60px] lg:w-[80px] m-5 object-cover' />
            </div>
        </section>

        <MoreInfoPage />

    <Footer />
    </div>
  )
}

export default About
