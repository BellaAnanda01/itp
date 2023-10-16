import React from 'react'
import background from '../assets/background2.png'
import { Link } from 'react-router-dom'

const MerchSuccess = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "bottom center", minHeight: "100vh"}}>
        <div style={{
          height: "70vh",
          width: "70vw",
          backgroundColor: "#E9E3D7",
          borderRadius: "20px",
          position: "absolute",
          top: "45%",
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
          <p style={{lineHeight: "24px"}}>Pre-Order Merchandise Batch 1<br/><span style={{backgroundColor: "rgba(239, 162, 162, 0.40)", padding: "1.5px"}}><b>21 Agustus-25 Agustus 2023</b></span></p>
          <p style={{
            fontFamily: "Chewy, cursive",
            fontSize: "21px",
            width: "60vw"
          }}>Terima Kasih Telah Melakukan Pembelian Merchandise ITP 2023!</p>
          <p>Contact Person: <br/>
            Dinda (WA:  085967070964| ID LINE: dinda072) <br/>
            Kayfa (WA: 081383576134| ID LINE: kayfa_puti)
          </p>
          <Link to={`/`}>
            <button style={{border: "none", fontFamily: 'Sniglet, cursive', letterSpacing: '0.03em', backgroundColor: '#df7273', color: "white", padding: "8px", borderRadius: "8px"}}>Back to Home</button>
          </Link>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translate(-50%, 0%)'
        }}>
          <p style={{textAlign: "center", fontFamily: 'Sniglet, cursive', letterSpacing: '0.03em',}}><i>Introduction to Psychology<br/>#AnyoneCanBeAnything</i></p>
        </div>
      </div>
    </div>
  )
}

export default MerchSuccess