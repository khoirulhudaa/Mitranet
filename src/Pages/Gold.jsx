import React from 'react'
import { FaChevronDown, FaSearch, FaWhatsappSquare } from 'react-icons/fa'
import { Filter, HeroHaji, productGold, productPerak } from '../Aseets'
import Footer from '../Components/Footer'
import MoreInfoPage from '../Components/MoreInfo'
import Navbar from '../Components/Navbar'

const Gold = () => {
  return (
    <div className='overflow-x-hidden h-max'>
        <Navbar />

        <section className='relative w-screen h-[75vh]'>
            <div className='relative bg-black bg-opacity-[0.4] w-screen h-full flex'>
                <div className='relative z-[777] text-center mx-auto flex flex-col items-center mt-[100px]'>
                    <p className='mb-4 z-[99] relative text-white text-[16px] lg:text-[24px]'>Emas</p>
                    <h2 className='text-white font-[500] text-[18px] lg:text-[30px] w-[90%] lg:w-[70%] leading-normal'>Jaminan keaslian & kemurnian produk 99,99 % dengan akreditasi LBMA sehingga aman untuk investasi.</h2>
                </div>
            </div>
            <img src={HeroHaji} className='absolute left-0 top-0 h-full w-full object-cover' alt="bg-Haji" />
        </section>

        <section className='relative lg:flex justify-center mt-12 lg:mt-[-170px] w-full h-max'>
            <div className='relative w-[90%] lg:w-[30%] h-[400px] lg:mx-7 lg:mb-0 mb-12 mx-auto overflow-hidden'>
                <img src={productGold} alt="gold" className='relative w-full h-full object-cover' />
                <div className='absolute z-[3333] bottom-0 right-0 bg-black p-4 text-white w-[75%] lg:w-[50%] h-[50%]'>
                    <p className='font-[500]'>Emas</p>
                    <p className='text-[11px] text-slate-200 my-4'>Harga/gram</p>
                    <p>Rp. 980.000</p>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-[11px] text-slate-200'>Terakhir Rp.978.000</p>
                        <p className='text-[11px] text-slate-200'>+Rp. 0.00</p>
                    </div>
                    <p className='mt-4'>60 <span className='text-[12px]'>Emas tersedia</span></p>
                </div>
            </div>
            <div className='relative w-[90%] lg:w-[30%] h-[400px] lg:mx-7 mx-auto overflow-hidden'>
                <img src={productPerak} alt="gold" className='relative w-full h-full object-cover' />
                <div className='absolute z-[3333] bottom-0 right-0 bg-black p-4 text-white w-[75%] lg:w-[50%] h-[50%]'>
                    <p className='font-[500]'>Perak</p>
                    <p className='text-[11px] text-slate-200 my-4'>Harga/gram</p>
                    <p>Rp. 980.000</p>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-[11px] text-slate-200'>Terakhir Rp.978.000</p>
                        <p className='text-[11px] text-slate-200'>+Rp. 0.00</p>
                    </div>
                    <p className='mt-4'>60 <span className='text-[12px]'>Emas tersedia</span></p>
                </div>
            </div>
        </section>

        <section className='w-screen h-max lg:flex mt-6 p-4 lg:p-12'>
            <div className='w-full lg:w-[20%] h-full border lg:inline hidden border-slate-200 rounded-[20px] p-6'>
                <div className='flex w-full tems-center'>
                    <img src={Filter} alt="filter-icon" className='h-[30px]' />
                    <p className='ml-3 text-[20px]'>Filter</p>
                </div>

                <p className='mt-5 mv-4'>Jenis Logam Mulia</p>
                <div className='w-full flex items-center my-3'>
                    <input type="checkbox" name='emas' /> <p className='ml-3'>Emas</p>
                </div>
                <div className='w-full flex items-center mt-3 mb-5'>
                    <input type="checkbox" name='perak' /> <p className='ml-3'>Perak</p>
                </div>
                <div className='w-full h-[2px] bg-slate-300'></div>

                <p className='mt-5 mv-4'>Merk</p>
                <select name="page" className='w-full outline-0 border-0 mt-3 mb-5 px-4 rounded-[10px] py-2 bg-slate-100' id="pages">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <div className='w-full h-[2px] bg-slate-300'></div>

                <p className='mt-5 mv-4'>Harga</p>
                <input type="text" name='minimum' className='w-full rounded-lg bg-slate-100 text-slate-600 text-[14px] px-3 py-3 border-0 outline-0 my-3' placeholder='Harga Minimum' />
                <input type="text" name='maximum' className='w-full rounded-lg bg-slate-100 text-slate-600 text-[14px] px-3 py-3 border-0 outline-0 my-3' placeholder='Harga Maksimal' />
               
                <p className='mt-5 mv-4'>Harga</p>
                <div className='flex items-center justify-between bg-slate-100 pr-3 my-3 rounded-[12px] h-max'>
                    <input type="text" name='minimum' className='w-[70%] rounded-lg bg-slate-100 text-slate-600 text-[14px] px-3 py-3 border-0 outline-0' placeholder='Berat Minimum' />
                    <p className='font-[500] text-[14px]'>gram</p>
                </div>
                <div className='flex items-center justify-between bg-slate-100 pr-3 my-3 rounded-[12px] h-max'>
                    <input type="text" name='maksimal' className='w-[70%] rounded-lg bg-slate-100 text-slate-600 text-[14px] px-3 py-3 border-0 outline-0' placeholder='Berat Maksimal' />
                    <p className='font-[500] text-[14px]'>gram</p>
                </div>

                <div className='w-full h-[2px] bg-slate-300'></div>

                <p className='mt-5 mv-4'>Tahun Keluaran</p>
                <select name="page" className='w-full outline-0 border-0 mt-3 mb-3 px-4 rounded-[10px] py-3 bg-slate-100' id="pages">
                    <option value="" disabled >Dari tahun</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <select name="page" className='w-full outline-0 border-0 mb-3 px-4 rounded-[10px] py-3 bg-slate-100' id="pages">
                    <option value="" disabled >Hingga tahun</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <div className='w-full h-[2px] bg-slate-300'></div>
            </div>
            <div className='w-full lg:w-[80%] lg:px-6 h-max'>
                <div className='full flex items-center justify-between'>
                    <div className='w-[50%] lg:w-[40%] h-[45px] bg-slate-100 flex items-center rounded-[8px] shadow-sm p-3'>
                        <FaSearch className='mr-2 text-slate-400 font-normal text-[15px]' />
                        <input type="text" placeholder='Search by name' value={''} name='search' className='border-0 text-[13px] rounded-[12px] font-normal outline-0 w-[80%] h-full bg-transparent text-slate-400 px-2' />
                    </div>
                    <div className='border border-slate-300 rounded-[4px] py-2 px-3 flex items-center cursor-pointer'>
                        <p className='text-slate-600 text-[14px] mr-3'>Terbaru</p>
                        <FaChevronDown className='text-slate-600 text-[12px]' />
                    </div>
                </div>

                <div className='lg:flex w-full flex-wrap justify-between h-max py-6'>
                    <div className='w-full lg:w-[32%] h-[360px] lg:h-[320px] mb-4 rounded-[12px] p-4 bg-white shadow-lg border border-slate-200'>
                        <div className='w-full h-1/2 overflow-hidden'>
                            <img src={productGold} alt="product" className='w-full h-max object-cover' />
                        </div>
                        <div className='w-ful h-1/2 flex flex-col lg:pt-0 pt-4'>
                            <div className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                <p className='font-[500] text-black text-[16px]'>LM ANTAM PRESS 10 gram terbaru</p>
                            </div>
                            <div className='w-full flex ite my-2 justify-between'>
                                <div className='w-max pr-3'>
                                    <p className='text-[10px] text-slate-300'>2024</p>
                                </div>
                                <div className='w-max px-4 flex items-center h-full border-x-slate-300 border-x text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Jakarta</p>
                                </div>
                                <div className='w-max px-3 flex items-center text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Tazkia Tours & Travel</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[12px]'>Rp. 160.000.000</p>
                                <div className='relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-4 flex justify-center items-center'>
                                    <p className='text-[10px]'>Paket Haji</p>
                                    <div className='absolute left-0 top-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                    <div className='absolute left-0 bottom-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full h-max p-2 rounded-[6px] mt-3 bg-[#568660] text-white flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200 border-0 outline-0'>
                                Hubungi Kami <FaWhatsappSquare className='text-[12px] ml-3 rounded-full' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[32%] h-[360px] lg:h-[320px] mb-4 rounded-[12px] p-4 bg-white shadow-lg border border-slate-200'>
                        <div className='w-full h-1/2 overflow-hidden'>
                            <img src={productGold} alt="product" className='w-full h-max object-cover' />
                        </div>
                        <div className='w-ful h-1/2 flex flex-col lg:pt-0 pt-4'>
                            <div className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                <p className='font-[500] text-black text-[16px]'>LM ANTAM PRESS 10 gram terbaru</p>
                            </div>
                            <div className='w-full flex ite my-2 justify-between'>
                                <div className='w-max pr-3'>
                                    <p className='text-[10px] text-slate-300'>2024</p>
                                </div>
                                <div className='w-max px-4 flex items-center h-full border-x-slate-300 border-x text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Jakarta</p>
                                </div>
                                <div className='w-max px-3 flex items-center text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Tazkia Tours & Travel</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[12px]'>Rp. 160.000.000</p>
                                <div className='relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-4 flex justify-center items-center'>
                                    <p className='text-[10px]'>Paket Haji</p>
                                    <div className='absolute left-0 top-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                    <div className='absolute left-0 bottom-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full h-max p-2 rounded-[6px] mt-3 bg-[#568660] text-white flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200 border-0 outline-0'>
                                Hubungi Kami <FaWhatsappSquare className='text-[12px] ml-3 rounded-full' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[32%] h-[360px] lg:h-[320px] mb-4 rounded-[12px] p-4 bg-white shadow-lg border border-slate-200'>
                        <div className='w-full h-1/2 overflow-hidden'>
                            <img src={productGold} alt="product" className='w-full h-max object-cover' />
                        </div>
                        <div className='w-ful h-1/2 flex flex-col lg:pt-0 pt-4'>
                            <div className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                <p className='font-[500] text-black text-[16px]'>LM ANTAM PRESS 10 gram terbaru</p>
                            </div>
                            <div className='w-full flex ite my-2 justify-between'>
                                <div className='w-max pr-3'>
                                    <p className='text-[10px] text-slate-300'>2024</p>
                                </div>
                                <div className='w-max px-4 flex items-center h-full border-x-slate-300 border-x text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Jakarta</p>
                                </div>
                                <div className='w-max px-3 flex items-center text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Tazkia Tours & Travel</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[12px]'>Rp. 160.000.000</p>
                                <div className='relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-4 flex justify-center items-center'>
                                    <p className='text-[10px]'>Paket Haji</p>
                                    <div className='absolute left-0 top-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                    <div className='absolute left-0 bottom-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full h-max p-2 rounded-[6px] mt-3 bg-[#568660] text-white flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200 border-0 outline-0'>
                                Hubungi Kami <FaWhatsappSquare className='text-[12px] ml-3 rounded-full' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[32%] h-[360px] lg:h-[320px] mb-4 rounded-[12px] p-4 bg-white shadow-lg border border-slate-200'>
                        <div className='w-full h-1/2 overflow-hidden'>
                            <img src={productGold} alt="product" className='w-full h-max object-cover' />
                        </div>
                        <div className='w-ful h-1/2 flex flex-col lg:pt-0 pt-4'>
                            <div className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                <p className='font-[500] text-black text-[16px]'>LM ANTAM PRESS 10 gram terbaru</p>
                            </div>
                            <div className='w-full flex ite my-2 justify-between'>
                                <div className='w-max pr-3'>
                                    <p className='text-[10px] text-slate-300'>2024</p>
                                </div>
                                <div className='w-max px-4 flex items-center h-full border-x-slate-300 border-x text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Jakarta</p>
                                </div>
                                <div className='w-max px-3 flex items-center text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Tazkia Tours & Travel</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[12px]'>Rp. 160.000.000</p>
                                <div className='relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-4 flex justify-center items-center'>
                                    <p className='text-[10px]'>Paket Haji</p>
                                    <div className='absolute left-0 top-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                    <div className='absolute left-0 bottom-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full h-max p-2 rounded-[6px] mt-3 bg-[#568660] text-white flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200 border-0 outline-0'>
                                Hubungi Kami <FaWhatsappSquare className='text-[12px] ml-3 rounded-full' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[32%] h-[360px] lg:h-[320px] mb-4 rounded-[12px] p-4 bg-white shadow-lg border border-slate-200'>
                        <div className='w-full h-1/2 overflow-hidden'>
                            <img src={productGold} alt="product" className='w-full h-max object-cover' />
                        </div>
                        <div className='w-ful h-1/2 flex flex-col lg:pt-0 pt-4'>
                            <div className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                <p className='font-[500] text-black text-[16px]'>LM ANTAM PRESS 10 gram terbaru</p>
                            </div>
                            <div className='w-full flex ite my-2 justify-between'>
                                <div className='w-max pr-3'>
                                    <p className='text-[10px] text-slate-300'>2024</p>
                                </div>
                                <div className='w-max px-4 flex items-center h-full border-x-slate-300 border-x text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Jakarta</p>
                                </div>
                                <div className='w-max px-3 flex items-center text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Tazkia Tours & Travel</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[12px]'>Rp. 160.000.000</p>
                                <div className='relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-4 flex justify-center items-center'>
                                    <p className='text-[10px]'>Paket Haji</p>
                                    <div className='absolute left-0 top-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                    <div className='absolute left-0 bottom-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full h-max p-2 rounded-[6px] mt-3 bg-[#568660] text-white flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200 border-0 outline-0'>
                                Hubungi Kami <FaWhatsappSquare className='text-[12px] ml-3 rounded-full' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[32%] h-[360px] lg:h-[320px] mb-4 rounded-[12px] p-4 bg-white shadow-lg border border-slate-200'>
                        <div className='w-full h-1/2 overflow-hidden'>
                            <img src={productGold} alt="product" className='w-full h-max object-cover' />
                        </div>
                        <div className='w-ful h-1/2 flex flex-col lg:pt-0 pt-4'>
                            <div className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                                <p className='font-[500] text-black text-[16px]'>LM ANTAM PRESS 10 gram terbaru</p>
                            </div>
                            <div className='w-full flex ite my-2 justify-between'>
                                <div className='w-max pr-3'>
                                    <p className='text-[10px] text-slate-300'>2024</p>
                                </div>
                                <div className='w-max px-4 flex items-center h-full border-x-slate-300 border-x text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Jakarta</p>
                                </div>
                                <div className='w-max px-3 flex items-center text-center justify-center'>
                                    <p className='text-[10px] text-slate-300'>Tazkia Tours & Travel</p>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-[12px]'>Rp. 160.000.000</p>
                                <div className='relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-4 flex justify-center items-center'>
                                    <p className='text-[10px]'>Paket Haji</p>
                                    <div className='absolute left-0 top-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                    <div className='absolute left-0 bottom-[-2px] w-full flex items-center justify-around'>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                        <div className='w-[6px] h-[6px] rounded-full bg-white'></div>
                                    </div>
                                </div>
                            </div>
                            <button className='w-full h-max p-2 rounded-[6px] mt-3 bg-[#568660] text-white flex items-center justify-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200 border-0 outline-0'>
                                Hubungi Kami <FaWhatsappSquare className='text-[12px] ml-3 rounded-full' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <MoreInfoPage />

        <Footer />
    </div>
  )
}

export default Gold
