import React from 'react'
import Link from 'next/link';

interface buttonProps{
    Label: string;
    btnClass: string;
    linkClass?: string;
    link?: string;
    loading?: boolean;
    disable?: boolean;
    alert?: boolean;
    type: "submit" | "reset" | "button" | undefined
}
const ActionBtn = ({ Label, btnClass, linkClass, link, loading, alert, type, disable }: buttonProps) => {
    return (
        <button type={type} className={`${btnClass}`} disabled={disable}>
            {link ? <Link href={link } className={`${linkClass}`}>{Label}</Link> : <span>{Label}</span>}
        </button>
  )
}

export default ActionBtn