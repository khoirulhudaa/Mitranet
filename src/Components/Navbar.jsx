import React, { useState } from "react";
import { Logo } from "../Aseets";
import { Link } from "react-router-dom";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [activeHajiTour, setActiveHajiTour] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false);
    const [open, setOpen] = useState(false);


    return (
        <div className="relative w-screen h-max bg-white flex px-4 lg:px-12 py-6 items-center justify-between pz-12 shadow-md z-[9999999999]">
            <img src={Logo} alt="logo-mitranet" className="lg:w-max w-[40%]" />
            <div className={`absolute bg-white shadow-md z-[444444] ${open ? 'left-0' : 'left-[-100%]'} lg:hidden inline duration-200 top-0 h-screen w-[80%] overflow-x-hidden`}>
                <ul className="list-none">
                    <Link to={'/'}>
                        <li className="my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                            Beranda
                        </li>
                    </Link>
                    <Link to={"/tentang-mitranet"}>
                        <li className="my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                            Tentang Mitra
                        </li>
                    </Link>
                    <li className="my-12 z-[33] relative ml-8 text-grayColor cursor-pointer duration-100">
                        <p
                            className="hover:text-black flex items-center"
                            onClick={() => {
                                setActiveHajiTour(!activeHajiTour),
                                    setActiveProduct(false);
                            }}
                        >
                            Haji & Wisata{" "}
                            <FaChevronDown className="ml-2 text-[12px]" />
                        </p>
                        <div
                            className={`w-max h-max px-2 py-3 bg-white rounded-[12px] shadow-lg absolute ${
                                activeHajiTour
                                    ? "bottom-[-120px] left-[-20px] [999] opacity-[1]"
                                    : "z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"
                            } border border-slate-200 flex flex-col items-center justify-center`}
                        >
                            <Link to={"/haji"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Haji & Umrah
                                </div>
                            </Link>
                            <Link to={"/wisata"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Wisata
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="my-12 relative ml-8 text-grayColor cursor-pointer duration-100">
                        <p
                            className="hover:text-black flex items-center"
                            onClick={() => {
                                setActiveProduct(!activeProduct),
                                    setActiveHajiTour(false);
                            }}
                        >
                            Produk{" "}
                            <FaChevronDown className="ml-2 text-[12px]" />
                        </p>
                        <div
                            className={`w-max h-max pt-3 pb-2 bg-white rounded-[12px] shadow-lg absolute ${
                                activeProduct
                                    ? "bottom-[-120px] left-[-20px] [999] opacity-[1]"
                                    : "z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"
                            } border border-slate-200 flex flex-col items-center justify-center`}
                        >
                            <Link to={"/emas"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Emas
                                </div>
                            </Link>
                            <Link to={"/dana-tunai"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Dana Tunai
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                        Hubungi Kami
                    </li>
                    <li className="my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                        FAQ
                    </li>
                </ul>
            </div>
            <div className="w-full flex items-center justify-center">
                <ul className="list-none hidden lg:flex items-center ">
                    <Link to={'/'}>
                        <li className="ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                            Beranda
                        </li>
                    </Link>
                    <Link to={"/tentang-mitranet"}>
                        <li className="ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                            Tentang Mitra
                        </li>
                    </Link>
                    <li className="relative ml-8 text-grayColor cursor-pointer duration-100">
                        <p
                            className="hover:text-black flex items-center"
                            onClick={() => {
                                setActiveHajiTour(!activeHajiTour),
                                    setActiveProduct(false);
                            }}
                        >
                            Haji & Wisata{" "}
                            <FaChevronDown className="ml-2 text-[12px]" />
                        </p>
                        <div
                            className={`w-max h-max px-2 py-3 bg-white rounded-[12px] shadow-lg absolute ${
                                activeHajiTour
                                    ? "bottom-[-120px] left-[-20px] [999] opacity-[1]"
                                    : "z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"
                            } border border-slate-200 flex flex-col items-center justify-center`}
                        >
                            <Link to={"/haji"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Haji & Umrah
                                </div>
                            </Link>
                            <Link to={"/wisata"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Wisata
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="relative ml-8 text-grayColor cursor-pointer duration-100">
                        <p
                            className="hover:text-black flex items-center"
                            onClick={() => {
                                setActiveProduct(!activeProduct),
                                    setActiveHajiTour(false);
                            }}
                        >
                            Produk{" "}
                            <FaChevronDown className="ml-2 text-[12px]" />
                        </p>
                        <div
                            className={`w-max h-max pt-3 pb-2 bg-white rounded-[12px] shadow-lg absolute ${
                                activeProduct
                                    ? "bottom-[-120px] left-[-20px] [999] opacity-[1]"
                                    : "z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"
                            } border border-slate-200 flex flex-col items-center justify-center`}
                        >
                            <Link to={"/emas"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Emas
                                </div>
                            </Link>
                            <Link to={"/dana-tunai"}>
                                <div
                                    className={`px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200`}
                                >
                                    Dana Tunai
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                        Hubungi Kami
                    </li>
                    <li className="ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100">
                        FAQ
                    </li>
                </ul>
            </div>
            <div className="w-max px-8 h-max py-3 bg-mainColor text-white hidden lg:flex items-center justify-center ml-[100px] rounded-[8px] text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98]">
                <p>Daftar</p>
            </div>
            {
                open ? (
                    <div onClick={() => setOpen(false)} className="w-[90px] h-[40px] lg:hidden inline bg-red-500 text-white cursor-pointer active:scale-[0.98] flex items-center rounded-[4px] justify-center">
                        <FaTimes />
                    </div>
                ):
                    <div onClick={() => setOpen(!open)} className="ml-auto  lg:hidden inline cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-100 lg:hidden flex flex-col items-center justify-between h-[40px] w-[70px] border border-slate-200 rounded-[4px] p-2">
                        <div className="w-[90%] h-[2px] bg-slate-600"></div>
                        <div className="w-[90%] h-[2px] bg-slate-600"></div>
                        <div className="w-[90%] h-[2px] bg-slate-600"></div>
                    </div>
            }
        </div>
    );
};

export default Navbar;
