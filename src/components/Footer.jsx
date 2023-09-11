import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='w-[100vw] bg-white'>
            <div className='p-2'>
                <p>Contact us:</p>
                <p>Kirana (ID LINE: kiran.aa / WhatsApp: 085712370457)</p>
                <p>@itp_psikoui</p>
            </div>
            <p style={{backgroundColor: "black", color: "white"}} className='p-1 text-center'>© Introduction to Psychology 2023</p>
        </div>
    )
}

export default Footer