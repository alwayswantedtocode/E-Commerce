import { useEffect, useState } from 'react'

const useMobileMenu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        // setOpenMenu(!openMenu)
        setOpenMenu((prev) => !prev)
    }
    return { openMenu, handleOpenMenu }
}

export default useMobileMenu