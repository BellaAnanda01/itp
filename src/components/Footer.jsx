import React from 'react'
import { BsInstagram, BsLine, BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-[100vw] bg-[#E9E3D7]'>
            <div className='p-2 text-center'>
                <p>Contact us:</p>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div>
                        <p style={{display: "flex", alignItems: "center"}}>Kirana (<span style={{padding: "2px"}}/><BsLine/><span style={{padding: "2px"}}/>kiran.aa / <span style={{padding: "2px"}}/><Link to={`https://wa.me/6285712370457`} target='_blank' style={{display: "flex", alignItems: "center"}}><BsWhatsapp/><span style={{padding: "2px"}}/>085712370457</Link><span style={{padding: "2px"}}/>)</p>
                    </div>
                    <div>
                        <Link to={`https://instagram.com/itp_psikoui`} target='_blank'><p style={{display: "flex", alignItems: "center"}}><BsInstagram/><span style={{padding: "2px"}}/>@itp_psikoui</p></Link>
                    </div>
                </div>
            </div>
            <p style={{backgroundColor: "black", color: "white"}} className='p-1 text-center'>© Introduction to Psychology 2023</p>
        </div>
    )
}

export default Footer