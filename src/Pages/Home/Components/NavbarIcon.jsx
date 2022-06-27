import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
        <div className="mt-20 absolute z-10">
        <div className="fixed top-0 left-0 h-16 -mb-20 bg-white w-full shadow-none sm:shadow">
            <div className="container m-auto p-3 flex justify-between items-center text-gray-700">
            <div className="flex lg:hidden md:hidden sm:hidden">
                    <a
                        href="#"
                        className="block text-md text-center w-10 h-10 py-2 text-black lg:mt-0"
                    >
                        {" "}
                        <span className="px-2">
                            <AiOutlineArrowLeft fontSize='20px' className="absolute z-10 text-center mx-3" />
                        </span>
                    </a>
                </div>
                <a
                    href="#"
                    className="md:block hidden mt-2 w-28 h-8 bg-purple-700 hover:bg-gray-200 lg:mt-0"
                ></a>
                <div className="flex-1 relative mx-5 text-gray-600">
                <form>
                <label>
                <input
                    type="text"
                    name="name"
                    className="shadow-md border-gray-300 bg-gray-100 w-full md:w-auto h-10 pl-4 pr-14 border-0 rounded-xl text-sm focus:outline-none"
                    placeholder="Cari di sini ..."
                  />
                  <button
                    type="submit"
                    className="absolute right top-0 mt-3 -ml-8 "
                  >
                    <BsSearch className="text-gray-600 h-4 w-4 fill-current" />
                  </button>
                </label>
              </form>
                </div>
                <div className="flex sm:block hidden">
                    <a
                        href="#"
                        className="block text-md text-center w-10 h-10 py-2 text-black lg:mt-0"
                    >
                        {" "}
                        <span className="px-2">
                            <MdFormatListBulleted fontSize='20px' className="absolute z-10 text-center" />
                        </span>
                    </a>
                </div>
                <div className="flex sm:block hidden">
                    <a
                        href="#"
                        className="block text-md text-center w-10 h-10 py-2 text-black lg:mt-0"
                    >
                        {" "}
                        <span className="px-2">
                            <AiOutlineBell fontSize='20px' className="absolute z-10 text-center" />
                        </span>
                    </a>
                </div>
                <div className="flex sm:block hidden">
                    <a
                        href="#"
                        className="block text-md text-center w-10 h-10 py-2 text-black lg:mt-0"
                    >
                        {" "}
                        <span className="px-2">
                            <VscAccount fontSize='20px' className="absolute z-10 text-center" />
                        </span>
                    </a>
                </div>
                <button className="block sm:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>
              <div
                className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
              >
                <ul className="flex-col items-center p-8 text-black w-full text-base cursor-pointer pt-10 inline">
                    <li className="mb-5 hover:bg-purple-700 hover:text-white">ini apa ya</li>
                    <li className="mb-5 hover:bg-purple-700 hover:text-white">Notifikasi</li>
                    <li className="mb-5 hover:bg-purple-700 hover:text-white">Akun</li>
                </ul>
              </div>
            </button>
            </div>
        </div>
        </div>
        {/* Content */}
        <Outlet/>
        </>
    );
};

export default Sidebar;