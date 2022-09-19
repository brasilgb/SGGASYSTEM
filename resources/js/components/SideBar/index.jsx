import React, { Fragment, useState } from 'react';
import {
    IoSpeedometerOutline,
    IoPeopleOutline,
    IoTimeOutline,
    IoMenu,
    IoClose
} from 'react-icons/io5';
import { FaWarehouse } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from '@inertiajs/inertia-react';

const SideBar = () => {

    const [showSide, setShowSide] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Fragment>

            <div className="h-screen w-10 absolute left-0 top-0 items-start z-50 md:hidden">
                <div onClick={() => setShowSide(!showSide)} className="h-10 w-10 pt-3 overflow-hidden grid place-items-center cursor-pointer">
                    {!showSide && <IoMenu size={20} color='#555' />}
                    {showSide && <IoClose size={20} color='#555' />}
                </div>
            </div>

            <div className={`md:flex flex-col z-40 w-64 h-screen p-2 bg-white border-r border-gray-300 shadow-lg fixed ease-in-out duration-300
            ${showSide ? 'translate-x-0' : 'md:translate-x-0 -translate-x-64'}
            `}>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auhref=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 hover:underline">Minha empresa</h4>
                </div>

                <hr className="my-6 border-gray-200" />
                <div className="flex flex-col justify-between flex-1 mt-6 text-base">
                    <nav>
                        <Link
                            className={`flex items-center px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-600 hover:bg-gray-200`}
                            href={route('home')}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoSpeedometerOutline />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Dashboard</span>
                        </Link>
                        <Link
                            className={`flex items-center px-4 py-2 mt-2 transition-colors duration-200 transform rounded-md text-gray-600 hover:bg-gray-200`}
                            href={route('ciclos.index')}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoTimeOutline />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Ciclos</span>
                        </Link>
                        <div>
                            <a
                                onClick={() => setShowMenu(!showMenu)}
                                className="flex items-center px-4 py-2 mt-2 cursor-pointer text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200"
                                href="#"
                            >
                                <FaWarehouse size={20} />
                                <span className="mx-4 font-normal">Lotes/Aviários</span>
                            </a>
                            <div className="pt-2 pl-4">
                                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col pl-2 pr-2 text-gray-500 border-l border-gray-200`}>
                                    <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                                        <IoMenu size={20} />
                                        <span className="mx-4 font-normal">Lotes</span>
                                    </Link>
                                    <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                                        <IoMenu size={20} />
                                        <span className="mx-4 font-normal">Aviários</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            className={`flex items-center px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-600 hover:bg-gray-200`}
                            href={route('home')}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoSpeedometerOutline />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Coletas</span>
                        </Link>

                        <hr className="my-6 border-gray-200" />
                        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoTimeOutline />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Settings</span>
                        </Link>

                        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                            <IoPeopleOutline size={20} />
                            <span className="mx-4 font-normal">Accounts</span>
                        </Link>
                    </nav>
                </div>
            </div>

        </Fragment>
    )
}

export default SideBar;
