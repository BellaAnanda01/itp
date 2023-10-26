import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
        <Link to={`/`} className="block md:inline-block px-3 py-2 rounded-md hover:text-black hover:bg-[#E9E3D7] focus:outline-none focus:text-black focus:bg-[#E9E3D7]">
        Home
        </Link>
        <Link to={`/tickettypes`} className="block md:inline-block px-3 py-2 rounded-md hover:text-black hover:bg-[#E9E3D7] focus:outline-none focus:text-black focus:bg-[#E9E3D7]">
        Ticket
        </Link>
{/*         <Link to={`/products`} className="block md:inline-block px-3 py-2 rounded-md hover:text-black hover:bg-[#E9E3D7] focus:outline-none focus:text-black focus:bg-[#E9E3D7]">
        Merchandise
        </Link> */}
    </div>
  )
}

export default NavbarMenu
