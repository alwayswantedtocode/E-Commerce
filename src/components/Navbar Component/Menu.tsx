"use client"
import Link from 'next/link'
import React from 'react'

type Menutype = {
    id: number,
    Menu: string
    link:string
}
const Menu = () => {
    const data: Menutype[] = [
        { id: 1, Menu: "Homepage", link: "" }, { id: 2, Menu: "Shop", link: "" }, { id: 3, Menu: "Deals", link: "" }, { id: 4, Menu: "About", link: "" }, { id: 5, Menu: "Contact", link: "" }
    ]
    return (
        <div>
            <div className="hidden lg:flex gap-[30px] ">
                {data.map((menu, index) => {
                    return (
                        <span className="font-semibold" key={index}><Link href={menu.link}>{menu.Menu}</Link></span>
                    )
                })}
            </div>

        </div>
    )
}

export default Menu