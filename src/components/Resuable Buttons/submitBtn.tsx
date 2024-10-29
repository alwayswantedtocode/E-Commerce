import React from 'react'
import Link from 'next/link';

interface buttonProps {
    Label: string;
    btnClass: string;
    linkClass?: string;
    link?: string;
    loading?: boolean;
    disable?: boolean;
    alert?: boolean;
    type: "submit" | "reset" | "button" | undefined
}
const SubmitBtn = ({ Label, btnClass, linkClass, link, loading, alert, type, disable }: buttonProps) => {
    return (
        <button type={type} className={` ${loading ? "bg-gradient-to-b from-[#6b2d0e8a] to-[#3211007d]" : "bg-gradient-to-b from-[#f9f9f9] to-[#f4f3f2]"}${btnClass}`} disabled={disable}>
            {link ? <Link href={link} className={`${linkClass}`}>{Label}</Link> : <span>{Label}</span>}
        </button>
    )
}

export default SubmitBtn