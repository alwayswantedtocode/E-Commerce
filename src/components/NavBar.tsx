import React from 'react'
import Logo from "@/components/Navbar Component/Logo"
import Menu from "@/components/Navbar Component/Menu"
import MenuBar from "@/components/Navbar Component/MenuBar"
import User from "@/components/Navbar Component/User Dropdown/User"
import Cart from "@/components/Navbar Component/Cart/Cart"
import Search from './Navbar Component/Search'
const NavBar = () => {
    return (
        <header className="lg:flex items-center justify-center sticky top-0 z-50  bg-white">
        <nav className='flex items-center lg:w-[95%] h-[4rem]'>
            <div className="flex items-center flex-[2] py-[5px]">
                <MenuBar />
                <Logo />
            </div>
            <div className="flex justify-between md:justify-end items-center flex-[5] gap-[50px] ">
                <div className="hidden lg:flex">
                    <Menu />
                </div>
                <div className="hidden md:flex">
                    <Search />
                </div>


            </div>
            <div className="flex flex-[1.6] lg:flex-[1] items-center p-[10px] justify-end gap-[10px] md:gap-[25px]">
                <User />
                <Cart />
            </div>
            </nav>
        </header>
    )
}

export default NavBar