"use client"
import Image from 'next/image'
import React from 'react'
import useMobileMenu from '../../hooks/useMobileMenu'
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import Link from 'next/link';

type Menutype = {
    id: number,
    Menu: string
    link: string
}

const MenuBar = () => {
    const data: Menutype[] = [
        { id: 1, Menu: "Homepage", link: "" }, { id: 2, Menu: "Shop", link: "" }, { id: 3, Menu: "Deals", link: "" }, { id: 4, Menu: "About", link: "" }, { id: 5, Menu: "Contact", link: "" }
    ]
    const { openMenu, handleOpenMenu } = useMobileMenu()
    return (

        <>
            <div className="flex lg:hidden" onClick={handleOpenMenu}>{!openMenu ? <BsList className='text-[2.1rem] md:text-[2.8rem]' /> :
                <BsX className='text-[2.1rem] md:text-[2.8rem]' />
            }
            </div>
            <aside className={`fixed top-[4rem] right-0 w-full h-full z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30 lg:hidden gap-[20px] ${openMenu ? "visible" : "invisible"
                } `}>
                <div
                    className={` h-[100%] w-[70%] top-[0rem] left-0 fixed justify-center bg-black text-white transition-all duration-500 ease-in-out lg:hidden ${openMenu ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col justify-center items-center border-2 border-red-500 ">
                        {data.map((menu, index) => {
                        return (
                            <span className="font-semibold flex justify-center" key={index}><Link href={menu.link}>{menu.Menu}</Link></span>
                        )
                    })}
                    </div>

                </div>
            </aside>
        </>


    )
}

export default MenuBar