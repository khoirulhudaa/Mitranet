import React from "react";
import {
    FaCalendarAlt,
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight,
    FaSearch,
    FaWhatsappSquare,
} from "react-icons/fa";
import { CardHaji, HeroHaji, Money, Plane, Sheet } from "../Aseets";
import Footer from "../Components/Footer";
import MoreInfoPage from "../Components/MoreInfo";
import Navbar from "../Components/Navbar";

const Haji = () => {
    return (
        <div className="w-screen overflow-x-hidden h-max">
            <Navbar />

            <section className="relative w-screen h-max lg:py-0 py-12 lg:h-[85vh]">
                <div className="relative bg-black bg-opacity-[0.4] w-screen h-full lg:flex items-center">
                    <div className="relative text-white pl-4 lg:pl-20 flex flex-col w-full lg:w-1/2 h-full z-[99] text-left justify-center text-left">
                        <h2 className="text-[16px] mb-3">Haji & Umrah</h2>
                        <h2 className="font-bold w-[90%] lg:w-[80%] text-[20px] lg:mb-0 mb-6 lg:text-[26px] leading-loose">
                            Terdaftar resmi di Kemenag & pemerintah kerajaan
                            Arab Saudi, hati lebih tenang saat beribadah.
                        </h2>
                    </div>
                    <div className="relative z-[99] w-full lg:w-1/2 h-full flex items-center justify-center text-left">
                        <div className="relative w-[95%] lg:w-[85%] h-[90%] bg-[#0F172A] rounded-[12px] shadow-lg px-6 p-10">
                            <p className="text-white mb-3 text-[16px] border-b border-b-white pb-4">
                                Filter
                            </p>
                            <form className="w-full h-max">
                                <div className="w-full lg:flex items-center h-max lg:h-[30%] mb-4 lg:mb-12">
                                    <div className="w-full lg:w-1/2 h-max lg:h-[50px] px-2 lg:px-4">
                                        <label
                                            className="text-white text-[10px]"
                                            htmlFor="Tanggal Keberangkaran"
                                        >
                                            Tanggal Keberangkatan
                                        </label>
                                        <div className="w-full rounded-[8px] mt-4 overflow-hidden flex items-center justify-between">
                                            <input
                                                type="text"
                                                className="p-3 h-[40px] text-[12px] rounded-[8px] border-0 outline-0 bg-[#F8F9FB] bg-opacity-[0.3]"
                                                name="start_date"
                                                value={""}
                                                placeholder="Tanggal Keberangkatan"
                                            />
                                            <FaCalendarAlt className="ml-2" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 h-max lg:h-[50px] lg:mt-0 mt-4 px-2 lg:px-4">
                                        <label
                                            className="text-white text-[10px]"
                                            htmlFor="Tanggal Keberangkaran"
                                        >
                                            Tanggal Keberangkatan
                                        </label>
                                        <select
                                            name="location"
                                            className="w-full h-[40px] mt-4 p-3 border-0 outline-0 bg-[#F8F9FB] bg-opacity-[0.3] rounded-[8px]"
                                        >
                                            <option value="Pilih Lokasi">
                                                Pilih lokaso
                                            </option>
                                            <option value="">lokasi 1</option>
                                            <option value="">lokasi 1</option>
                                            <option value="">lokasi 1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full lg:flex items-center h-max lg:h-[30%] mb-4 lg:mb-12">
                                    <div className="w-full lg:w-1/2 h-max lg:h-[50px] px-2 lg:px-4">
                                        <label
                                            className="text-white text-[10px]"
                                            htmlFor="Tanggal Keberangkaran"
                                        >
                                            Tanggal Keberangkatan
                                        </label>
                                        <div className="w-full rounded-[8px] mt-4 overflow-hidden flex items-center justify-between">
                                            <input
                                                type="text"
                                                className="p-3 h-[40px] text-[12px] rounded-[8px] border-0 outline-0 bg-[#F8F9FB] bg-opacity-[0.3]"
                                                name="start_date"
                                                value={""}
                                                placeholder="Tanggal Keberangkatan"
                                            />
                                            <FaCalendarAlt className="ml-2" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 h-max lg:mt-0 mt-4 lg:h-[50px] px-4">
                                        <label
                                            className="text-white text-[10px]"
                                            htmlFor="Tanggal Keberangkaran"
                                        >
                                            Tanggal Keberangkatan
                                        </label>
                                        <select
                                            name="location"
                                            className="w-full h-[40px] mt-4 p-3 border-0 outline-0 bg-[#F8F9FB] bg-opacity-[0.3] rounded-[8px]"
                                        >
                                            <option value="Pilih Lokasi">
                                                Pilih lokaso
                                            </option>
                                            <option value="">lokasi 1</option>
                                            <option value="">lokasi 1</option>
                                            <option value="">lokasi 1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full lg:flex items-center h-max lg:h-[30%] mb-6 lg:mb-12">
                                    <div className="w-full lg:w-1/2 h-max lg:h-[50px] px-4">
                                        <label
                                            className="text-white text-[10px]"
                                            htmlFor="Tanggal Keberangkaran"
                                        >
                                            Tanggal Keberangkatan
                                        </label>
                                        <div className="w-full rounded-[8px] mt-4 overflow-hidden flex items-center justify-between">
                                            <input
                                                type="text"
                                                className="p-3 h-[40px] text-[12px] rounded-[8px] border-0 outline-0 bg-[#F8F9FB] bg-opacity-[0.3]"
                                                name="start_date"
                                                value={""}
                                                placeholder="Tanggal Keberangkatan"
                                            />
                                            <FaCalendarAlt className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="border-0 rounded-[6px] outline-0 bg-[#568660] w-[93%] relative top-2 mx-auto my-4 flex items-center justify-center text-center text-white cursor-pointer h-[45px] text-[12px] active:scale-[0.98] duration-200"
                                    type="submit"
                                >
                                    Cari Paket
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <img
                    src={HeroHaji}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    alt="bg-Haji"
                />
            </section>

            <section className="w-screen h-max p-4 lg:p-12">
                <div className="full lg:flex items-center justify-between">
                    <div className="w-full lg:mb-0 mb-12 lg:w-[30%] h-[45px] bg-slate-200 flex items-center shadow-md p-3">
                        <FaSearch className="mr-2 text-slate-400 font-normal text-[15px]" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={""}
                            name="search"
                            className="border-0 text-[13px] font-normal outline-0 w-[80%] h-full bg-transparent text-slate-400 px-2"
                        />
                    </div>
                    <div className="border border-slate-300 rounded-[4px] py-2 px-3 flex items-center cursor-pointer">
                        <p className="text-slate-600 text-[14px] mr-3">
                            Terbaru
                        </p>
                        <FaChevronDown className="text-slate-600 text-[12px]" />
                    </div>
                </div>
                <div className="w-full lg:flex items-center my-8 h-max lg:h-[250px]">
                    <div className="w-full lg:w-[15%] h-full flex items-center">
                        <div className="w-full lg:w-[180px] h-[180px] overflow-hidden">
                            <img
                                src={CardHaji}
                                alt="card"
                                className="w-full rounded-[20px] h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-[85%] h-full lg:flex lg:px-6 justify-center flex-col">
                        <div className="w-full lg:my-0 my-4 lg:flex items-center justify-between">
                            <div className="w-full lg:w-max flex items-center">
                                <h2 className="text-[16px] lg:text-[22px] font-[500]">
                                    Haji Furoda 1444H-TZA-2024
                                </h2>
                                <div className="relative bg-slate-300 w-max h-max px-6 py-2 text-center text-green-700 ml-auto lg:ml-4 flex justify-center items-center">
                                    <p>Paket Haji</p>
                                    <div className="absolute left-0 top-[-5px] w-full flex items-center justify-around">
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                    </div>
                                    <div className="absolute left-0 bottom-[-5px] w-full flex items-center justify-around">
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-max px-4 py-3 text-white lg:my-0 my-4 flex items-center bg-[#568660] rounded-[18px] justify-center active:scale-[0.98] cursor-pointer">
                                <p className='lg:text-[16px] text-[12px]'>Hubungi Kami</p>
                                <FaWhatsappSquare className="ml-3 rounded-full w-[20px]" />
                            </div>
                        </div>
                        <div className="w-full lg:flex mt-4 items-center">
                            <div className="w-full lg:w-[33%] border-l borer-l-slate-300 p-6">
                                <p className="font-[500] flex items-center text-[14px] mb-3">
                                    <img
                                        src={Plane}
                                        alt="plane"
                                        className="mr-3 w-[20px]"
                                    />{" "}
                                    Keberangkatan & Penyelenggara
                                </p>
                                <p className="text-slate-400 my-2 text-[12px]">
                                    2024
                                </p>
                                <p className="text-slate-400 my-2 text-[12px]">
                                    Jakarta
                                </p>
                                <p className="text-slate-400 my-2 text-[12px]">
                                    Tazkia Tours&Travel
                                </p>
                            </div>
                            <div className="w-full lg:w-[33%] border-l borer-l-slate-300 p-6">
                                <p className="font-[500] flex items-center text-[14px] mb-3">
                                    <img
                                        src={Sheet}
                                        alt="chair"
                                        className="mr-3 w-[20px]"
                                    />{" "}
                                    Kuota
                                </p>
                                <div className="w-full flex mb-2 h-max items-center justify-between">
                                    <p className="text-slate-400 text-[12px]">
                                        2024
                                    </p>
                                    <p className="font-bold text-[12px]">90</p>
                                </div>
                                <div className="w-full flex mb-2 h-max items-center justify-between">
                                    <p className="text-slate-400 text-[12px]">
                                        2024
                                    </p>
                                    <p className="font-bold text-[12px]">90</p>
                                </div>
                                <div className="w-full flex mb-2 h-max items-center justify-between">
                                    <p className="text-slate-400 text-[12px]">
                                        2024
                                    </p>
                                    <p className="font-bold text-[12px]">90</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-[33%] border-l borer-l-slate-300 p-6">
                                <p className="font-[500] flex items-center text-[14px] mb-3">
                                    <img
                                        src={Money}
                                        alt="money"
                                        className="mr-3 w-[20px]"
                                    />{" "}
                                    Biaya
                                </p>
                                <div className="w-full flex mb-2 h-max items-center justify-between">
                                    <p className="text-slate-400 text-[12px]">
                                        Double/pax
                                    </p>
                                    <p className="font-bold text-[12px]">
                                        Rp 160.000.000
                                    </p>
                                </div>
                                <div className="w-full flex mb-2 h-max items-center justify-between">
                                    <p className="text-slate-400 text-[12px]">
                                        Tiple/pax
                                    </p>
                                    <p className="font-bold text-[12px]">
                                        Rp 160.000.000
                                    </p>
                                </div>
                                <div className="w-full flex mb-2 h-max items-center justify-between">
                                    <p className="text-slate-400 text-[12px]">
                                        Quad/pax
                                    </p>
                                    <p className="font-bold text-[12px]">
                                        Rp 160.000.000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MoreInfoPage />

            <Footer />
        </div>
    );
};

export default Haji;
    