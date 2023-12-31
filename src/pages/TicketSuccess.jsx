import React, { useEffect } from 'react'
import background from '../assets/background2.png'
import { Link } from 'react-router-dom'

const TicketSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "bottom center", minHeight: "100vh"}}>
        <div style={{
          height: "70vh",
          width: "70vw",
          backgroundColor: "#E9E3D7",
          borderRadius: "20px",
          position: "absolute",
          top: "calc(45% + 64px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: 'Sniglet, cursive',
          letterSpacing: '0.03em',
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          textAlign: 'center',
        }}>
          <p style={{lineHeight: "24px"}}>Open House<br/><span style={{backgroundColor: "rgba(239, 162, 162, 0.40)", padding: "1.5px"}}><b>Sabtu, 11 November 2023</b></span></p>
          <p style={{
            fontFamily: "Chewy, cursive",
            fontSize: "21px",
            width: "60vw"
          }} className='successNote'>Terima Kasih Telah Melakukan Pembelian Tiket Open House!</p>
          <p style={{lineHeight: "24px"}}>Silakan bergabung dengan grup WhatsApp berikut:<br/><Link target="_blank" to={localStorage.getItem('tipetiket') === "Offline" ? "https://chat.whatsapp.com/C9qH4i2u1zpHjntRDZI5yS" : localStorage.getItem('tipetiket') === "Online" ? "https://chat.whatsapp.com/D6JenRUzBTV7m2oZIctCEa" : "Loading..."}><span style={{padding: "1.5px", cursor: localStorage.getItem('tipetiket') === "Offline" ? "pointer" : localStorage.getItem('tipetiket') === "Online" ? "pointer" : "default", textDecoration: localStorage.getItem('tipetiket') === "Offline" ? "underline" : localStorage.getItem('tipetiket') === "Online" ? "underline" : "none", color: localStorage.getItem('tipetiket') === "Offline" ? "#0563C1" : localStorage.getItem('tipetiket') === "Online" ? "#0563C1" : "black"}}>{localStorage.getItem('tipetiket') === "Offline" ? "https://chat.whatsapp.com/C9qH4i2u1zpHjntRDZI5yS" : localStorage.getItem('tipetiket') === "Online" ? "https://chat.whatsapp.com/D6JenRUzBTV7m2oZIctCEa" : "Loading..."}</span></Link></p>
          <p>Contact Person: <br/>
            Kemal (WA:  081315276216 | ID LINE: kemal_81) <br/>
            Dini (WA: 08111031614 | ID LINE: dinisaurus.)
          </p>
          <Link to={`/`}>
            <button style={{border: "none", fontFamily: 'Sniglet, cursive', letterSpacing: '0.03em', backgroundColor: '#df7273', color: "white", padding: "8px", borderRadius: "8px"}}>Back to Home</button>
          </Link>
        </div>
        <div style={{
          position: 'absolute',
          bottom: "calc(40px - 64px)",
          left: '50%',
          transform: 'translate(-50%, 0%)'
        }}>
          <p style={{textAlign: "center", fontFamily: 'Sniglet, cursive', letterSpacing: '0.03em',}}><i>Introduction to Psychology<br/>#AnyoneCanBeAnything</i></p>
        </div>
      </div>
    </div>
  )
}

export default TicketSuccess
