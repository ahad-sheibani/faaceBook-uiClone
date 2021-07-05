import React from 'react';
import 'boxicons'
import "../styles/app.css"
import { ThemeContext } from '../context/themeContext'


function NavBar(props) {

    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <nav className="bg-white dark:bg-dark-second h-max md:h-14 shadow flex flex-col md:flex-row items-center justify-center md:justify-between
            fixed top-0 z-50 border-b dark:border-dark-third w-screen "
        >
            {/* leftnav */}
            <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
                <a href="#" className="mr-2 hidden md:inline-block" >
                    <img src="/images/fb-logo.png" alt="facebook-logo" className="w-24 sm:w-20 lg:w-10 h-auto" />
                </a>
                <a href="#" >
                    <img src="/images/fb-logo-mb.png" className="w-32 h-auto" />
                </a>
                <div className="flex items-center justify-between space-x-1">
                    <div className="relative ml-3 bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10
                    xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer
                    ">
                        <box-icon name='search-alt-2' className="bx bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt"></box-icon>
                        <input type="text" placeholder="Search Facebook" className="outline-none bg-transparent hidden xl:inline-block" />
                    </div>
                    <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark-text-dark-txt">
                        <box-icon name='messenger' type='logo' ></box-icon>
                    </div>
                    <span className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark-text-dark-txt">
                        <box-icon name='moon' type='solid' id="dark-mode-mb" ></box-icon>
                    </span>
                </div>

            </div>
            {/* mainNav */}
            <ul className="flex w-full lg:w-max items-center justify-center">
                <li className="w-1/5 md:w-max  text-center">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer  text-center inline-block
                            text-blue-500 border-b-4 border-blue-500" >
                        <box-icon type='solid' name='home' ></box-icon>
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer  text-center inline-block
                           rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt-relative "  >
                        <box-icon name='movie-play' ></box-icon>
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer  text-center inline-block
                           rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt-relative " >
                        <box-icon name='store' ></box-icon>
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer  text-center inline-block
                           rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt-relative " >
                        <box-icon name='group'></box-icon>
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center hidden md:inline-block">
                    <a href="#" className="w-full text-3xl py-2 px-4 xl:px-12 cursor-pointer  text-center inline-block
                           rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt-relative " >
                        <box-icon name='layout' >
                            <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">6+</span>
                        </box-icon>
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center inline-block md:hidden">
                    <a href="#" className="w-full text-3xl py-2 px-4 xl:px-12 cursor-pointer  text-center inline-block
                           rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt-relative " >
                        <box-icon name='menu' ></box-icon>
                    </a>
                </li>

            </ul>
            {/* rightNav */}
            <ul className="hidden md:flex mx-4 items-center justify-center">
                <li className="h-full hidden xl:flex">
                    <a href="#" className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1">
                        <img src="./images/avatar.jpg" alt="profile picture" className="rounded-full h-7 w-7" />
                            <span className="mx-2 font-semibold dark:text-dark-txt">Ahad</span>

                      
                    </a>
                </li>
                <li>
                    <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <box-icon name='plus'></box-icon>
                    </div>
                </li>
                <li>
                    <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <box-icon name='messenger' type='logo' ></box-icon>

                    </div>

                </li>
                <li>
                    <div className="text-xl  grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <box-icon name='bell' type='solid' ></box-icon>
                        <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">9</span>
                    </div>
                </li>
                <li className="w-1/5 md:w-max text-center">

                    {theme === "dark" ? (<div onClick={() => setTheme(theme === "dark" ? "light" : 'dark')} className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        {console.log("🚀 ~ file: NavBar.js ~ line 110 ~ NavBar ~ setTheme", setTheme)}
                        <box-icon name='moon' type='solid' id="dark-mode" ></box-icon>
                    </div>
                    ) : <div onClick={() => setTheme(theme === "dark" ? "light" : 'dark')} className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <box-icon name='bell' type='solid' ></box-icon>
                    </div>}


                </li>
            </ul>

        </nav>
    );
}

export default NavBar;