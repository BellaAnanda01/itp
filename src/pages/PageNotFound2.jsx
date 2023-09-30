import React from 'react'
import background from '../assets/background2.png'
import { Link } from 'react-router-dom'

const PageNotFound2 = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "bottom center", minHeight: "100vh"}}>
        <div style={{
          height: "70vh",
          width: "68vw",
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
          padding: "20px"
        }}>
          <p style={{
            fontFamily: "Chewy, cursive",
            // fontSize: "50px",
            width: "60vw"
          }} className='text-[40px] sm:text-[50px] successNote'>Halaman belum dapat dibuka</p>
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

export default PageNotFound2