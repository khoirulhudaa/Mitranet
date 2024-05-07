import React, { useRef, useState } from 'react'
import { FaMinus, FaPlay, FaPlus, FaStop } from 'react-icons/fa'
import { CheckGreen, HandphoneM, HeroHaji, Particle1, Particle2, Tumbuh, WhyDana } from '../Aseets'
import Footer from '../Components/Footer'
import MoreInfoPage from '../Components/MoreInfo'
import Navbar from '../Components/Navbar'

const Cash = () => {

    const [play, setPlay] = useState(false)
    const [activeNumber, setActiveNumber] = useState(0)
    
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

    const data = [
        {
            "title": "Apa itu Mitranet?",
            "teks": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti et sunt recusandae dicta unde labore molestias libero fugiat accusantium."
        },
        {
            "title": "Apa itu Mitranet?",
            "teks": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti et sunt recusandae dicta unde labore molestias libero fugiat accusantium."
        },
        {
            "title": "Apa itu Mitranet?",
            "teks": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti et sunt recusandae dicta unde labore molestias libero fugiat accusantium."
        },
        {
            "title": "Apa itu Mitranet?",
            "teks": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti et sunt recusandae dicta unde labore molestias libero fugiat accusantium."
        },
    ]

  return (
    <div className='w-screen overflow-x-hidden h-max'>
        <Navbar />

        <section className='relative w-screen h-[75vh]'>
            <div className='relative bg-black bg-opacity-[0.4] w-screen h-full flex'>
                <div className='relative z-[777] text-center mx-auto flex flex-col items-center my-auto'>
                    <p className='mb-4 z-[99] relative text-white text-[16px] lg:text-[24px]'>Dapatkan Dana Tunai Cepat Cair & Plafon Tinggi</p>
                    <h2 className='text-white font-[500] text-[18px] lg:text-[30px] w-[90%] lg:w-[70%] leading-normal'>Suku bunga kompetitif, tenor suka-suka, mudah, aman & terpercaya, sebagai solusi kebutuhan Anda.</h2>
                    <div className='w-max h-max px-10 py-4 text-white flex items-center justify-center mt-8 bg-[#568660] rounded-full'>
                        Selengkapnya
                    </div>
                </div>
            </div>
            <img src={HeroHaji} className='absolute left-0 top-0 h-full w-full object-cover' alt="bg-Haji" />
        </section>

        <section className='w-full text-center flex flex-col items-center'>
            <h3 className='mt-12 lg:mt-16 text-[26px] lg:text-[36px] font-[500]'>Dana Tunai</h3>
            <p className='text-[12px] lg:text-[14px] lg:w-max w-[90%] leading-loose text-slate-500'>MitraNet selalu siap membantumu terhubung dengan mitra peminjam kami!</p>
            <div className='w-max h-max px-10 py-4 text-white flex items-center justify-center mt-4 bg-[#568660] rounded-full'>
                Selengkapnya
            </div>
        </section>

        <section className='relative w-[90%] lg:w-[80%] mx-auto my-12 flex flex-col justify-center items-center h-max'>
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
            <img src={Particle2} alt="particle" className='absolute lg:inline hidden right-[-50px] top-[-50px]' />
        </section>

        <section className='relative bg-mainColor px-4 pt-12 pb-0 lg:px-10 lg:py-16 overflow-hidden w-screen mx-auto mt-12 lg:mt-28 lg:flex items-center h-max lg:h-max justify-center'>
            <div className='w-full lg:w-[35%] overflow-hidden h-[200px] lg:h-max rounded-[14px] lg:rounded-0 lg:p-8 relative'>
                <img src={WhyDana} alt="simpleFast" className='relative w-full lg:w-[90%] mx-auto rounded-[22px] z-[33] overflow-hidden' />
            </div>
            <div className='w-full lg:w-[65%] h-max py-8'>
                <h3 className='text-white text-[26px] lg:mb-0 mb-4 lg:text-[32px]'>Kenapa Harus Dana Tunai MitraNet?</h3>
                <p className='text-[14px] mb-12 lg:mb-4 text-slate-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='w-full h-max lg:flex items-center'>
                    <div className='lg:flex w-full lg:w-1/2 h-max lg:h-[120px] my-4 text-white lg:mb-0 mb-6 items-center'>
                        <div className='w-full lg:w-[20%] h-[120px] lg:h-[86px] rounded-[10px] bg-white bg-opacity-[0.2] flex items-center p-5 justify-center'>
                            <img src={Tumbuh} alt="check-icon-white" />
                        </div>
                        <div className='w-full lg:w-[70%] lg:flex flex-col justify-start lg:pl-4 lg:mt-0 mt-5'>
                            <h2 className='text-[18px] lg:text-[22px] font-[500]'>Tumbuh</h2>
                            <span className='laeding-loose text-[12px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus ut deleniti distinctio corrupti magnam aliquam?</span>
                        </div>
                    </div>
                    <div className='lg:flex w-full lg:w-1/2 h-max lg:h-[120px] my-4 text-white lg:mb-0 mb-6 items-center'>
                        <div className='w-full lg:w-[20%] h-[120px] lg:h-[86px] rounded-[10px] bg-white bg-opacity-[0.2] flex items-center p-5 justify-center'>
                            <img src={Tumbuh} alt="check-icon-white" />
                        </div>
                        <div className='w-full lg:w-[70%] lg:flex flex-col justify-start lg:pl-4 lg:mt-0 mt-5'>
                            <h2 className='text-[18px] lg:text-[22px] font-[500]'>Tumbuh</h2>
                            <span className='laeding-loose text-[12px]'>Ikut andil dan memainkan peran penting secara langsung dalam mewujudkan ekosistem halal di Indonesia.</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-max lg:flex items-center'>
                    <div className='lg:flex w-full lg:w-1/2 h-max lg:h-[120px] my-4 text-white lg:mb-0 mb-6 items-center'>
                        <div className='w-full lg:w-[20%] h-[120px] lg:h-[86px] rounded-[10px] bg-white bg-opacity-[0.2] flex items-center p-5 justify-center'>
                            <img src={Tumbuh} alt="check-icon-white" />
                        </div>
                        <div className='w-full lg:w-[70%] lg:flex flex-col justify-start lg:pl-4 lg:mt-0 mt-5'>
                            <h2 className='text-[18px] lg:text-[22px] font-[500]'>Tumbuh</h2>
                            <span className='laeding-loose text-[12px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus ut deleniti distinctio corrupti magnam aliquam?</span>
                        </div>
                    </div>
                    <div className='lg:flex w-full lg:w-1/2 h-max lg:h-[120px] my-4 text-white lg:mb-0 mb-6 items-center'>
                        <div className='w-full lg:w-[20%] h-[120px] lg:h-[86px] rounded-[10px] bg-white bg-opacity-[0.2] flex items-center p-5 justify-center'>
                            <img src={Tumbuh} alt="check-icon-white" />
                        </div>
                        <div className='w-full lg:w-[70%] lg:flex flex-col justify-start lg:pl-4 lg:mt-0 mt-5'>
                            <h2 className='text-[18px] lg:text-[22px] font-[500]'>Tumbuh</h2>
                            <span className='laeding-loose text-[12px]'>Ikut andil dan memainkan peran penting secara langsung dalam mewujudkan ekosistem halal di Indonesia.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-full h-max lg:flex items-center px-5 pt-16 justify-center'>
            <div className='w-full lg:w-1/2'>
                <h3 className='text-[26px] lg:text-[36px] mb-2'>Cara Mengajukan Dana Tunai</h3>
                <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur.</p>
                <br />
                <div className='my-4 flex items-center'>
                    <img src={CheckGreen} alt="icon-check" className='w-[24px] mr-3' />
                    <div>
                        <p className='font-[500] mb-1'>Mengisi form pengajuan dana tunai</p>
                        <p className='leading-loose text-slate-600 w-full lg:w-[80%] text-[12px] lg:text-[14px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                    </div>
                </div>
                <div className='my-4 flex items-center'>
                    <img src={CheckGreen} alt="icon-check" className='w-[24px] mr-3' />
                    <div>
                        <p className='font-[500] mb-1'>Mengisi form pengajuan dana tunai</p>
                        <p className='leading-loose text-slate-600 w-full lg:w-[80%] text-[12px] lg:text-[14px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                    </div>
                </div>
                <div className='my-4 flex items-center'>
                    <img src={CheckGreen} alt="icon-check" className='w-[24px] mr-3' />
                    <div>
                        <p className='font-[500] mb-1'>Mengisi form pengajuan dana tunai</p>
                        <p className='leading-loose text-slate-600 w-full lg:w-[80%] text-[12px] lg:text-[14px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                    </div>
                </div>

            </div>
            <img src={HandphoneM} alt="handphone" className='w-[50%] lg:inline hidden lg:w-[15%]' />
        </section>

        <section className='relative min-h-[400px] py-8 lg:py-[80px] mt-16 bg-[#F3F7F4] flex flex-col justify-center items-center w-full h-max'>
            <h3 className='text-[26px] lg:text-[36px] mb-2'>Pertanyaan Umum MitraNet</h3>
            <p className='text-slate-400 mb-6 lg:mb-14 leading-loose text-[12px] lg:w-max w-[90%] lg:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            {
                data?.length > 0 && data?.map((data, index) => (
                    <div className='cursor-pointer active:scale-[0.99] hover:brightness-[90%] w-[90%] lg:w-[80%] my-2 mx-auto border-b-[2px] border-dashed border-b-slate-300'>
                        <div onClick={() => setActiveNumber(index)} className='w-full flex h-[50px] items-center justify-between'>
                            <p className='font-[500]'>{data?.title}</p>
                            {
                                activeNumber === index ? (
                                    <FaMinus className='text-slate-600 font-normal' />
                                ):
                                    <FaPlus className='text-slate-400 font-normal' />
                            }
                        </div>
                        <div className={`relative w-full ${index === activeNumber ? 'mt-2 mb-6 h-max overflow-hidden' : 'mt-0 h-[0px] overflow-hidden'} duration-200`}>
                            <p className='text-black text-[14px] w-[90%] leading-loose'>
                                {data?.teks}
                            </p>
                        </div>
                    </div>
                ))
            }
        </section>

        <MoreInfoPage />

        <Footer />
    </div>
  )
}

export default Cash
