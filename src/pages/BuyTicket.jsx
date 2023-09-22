import React, { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import background from '../assets/background2.png'
import element from '../assets/element.png'
import element2 from '../assets/element2.png'

const Ticket = () => {
    const form = useRef();

    const navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("tipetiket") === null) {
          navigate('/tickettypes')
      }
      window.scrollTo(0, 0)
    // eslint-disable-next-line
    }, []);

    const ticketsData = {
      "JenisTiket": ""
    }

    function back(e) {
      e.preventDefault()
      navigate('/tickettypes')
    }
    function Submit(e) {
      e.preventDefault();
      const formDatab = new FormData(e.target);
      for (const pair of formDatab.entries()) {
        ticketsData[pair[0]] = pair[1];
      }
      let getKelasPilihan = JSON.parse(localStorage.getItem("ticketsDataB"))
      if (getKelasPilihan === null) {
        let ticketsDataB = JSON.stringify(ticketsData);
        localStorage.setItem("ticketsDataB",ticketsDataB);
      } else {
        let getPilihanKelas = JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan
        ticketsData.KelasPilihan = getPilihanKelas
        let ticketsDataB = JSON.stringify(ticketsData)
        localStorage.setItem("ticketsDataB",ticketsDataB);
      }
      const tipetiket = localStorage.getItem('tipetiket');
      if(tipetiket === 'Offline') {
        navigate('/selectclass');
      }
      if(tipetiket === 'Online') {
        navigate('/ticketpayment');
      }
    }

  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "top center", minHeight: "100vh"}}>
        <div style={{minHeight: "calc(100vh - 64px)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "max-content"}}>
            <p className="font-chewy sm:pt-[40px] text-center text-[40px] sm:text-[5vw] text-white tracking-[0.11em] drop-shadow-[0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.82)] m-0" >PENDAFTARAN</p>
            <img style={{
              width: '20vw',
              textAlign: 'center',
              marginTop: '-10px',
            }} src={element} alt='Tiket Open House Psikologi UI'/>
          </div>
          <form ref={form} className="form" onSubmit={(e) => Submit(e)}>
          <div className='flex items-center content-center sm:gap-[5vw] sm:flex-row gap-0 flex-col'>
            <div>
              {/* Jenis Tiket */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                  <p style={{
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.57904787em',
                    letterSpacing: '0.03em',
                    textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                    margin: '0',
                    fontFamily: 'Sniglet, cursive',
                    marginLeft: '5px',
                  }}>Jenis Tiket:</p>
                </div>
                <input style={{
                  textAlign: 'center',
                  backgroundColor: '#fff3d7',
                  borderRadius: '30px',
                  color: 'black',
                  fontFamily: 'Sniglet, cursive',
                  border: 'none',
                  height: '38px',
                  fontSize: '16px',
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='JenisTiket' value={`Open House - ${localStorage.getItem('tipetiket')}`}/>
              </div>
              {/* Nama Lengkap */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                  <p style={{
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.57904787em',
                    letterSpacing: '0.03em',
                    textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                    margin: '0',
                    fontFamily: 'Sniglet, cursive',
                    marginLeft: '5px',
                  }}>Nama Lengkap:</p>
                </div>
                <input style={{
                  textAlign: 'center',
                  backgroundColor: '#fff3d7',
                  borderRadius: '30px',
                  color: 'black',
                  fontFamily: 'Sniglet, cursive',
                  border: 'none',
                  height: '38px',
                  fontSize: '16px',
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='NamaLengkap' type='text' defaultValue={localStorage.getItem('ticketsDataB') === null ? "" : JSON.parse(localStorage.getItem('ticketsDataB')).NamaLengkap} required/>
              </div>
              {/* Email */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                  <p style={{
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.57904787em',
                    letterSpacing: '0.03em',
                    textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                    margin: '0',
                    fontFamily: 'Sniglet, cursive',
                    marginLeft: '5px',
                  }}>Email:</p>
                </div>
                <input style={{
                  textAlign: 'center',
                  backgroundColor: '#fff3d7',
                  borderRadius: '30px',
                  color: 'black',
                  fontFamily: 'Sniglet, cursive',
                  border: 'none',
                  height: '38px',
                  fontSize: '16px',
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='Email' type="email" defaultValue={localStorage.getItem('ticketsDataB') === null ? "" : JSON.parse(localStorage.getItem('ticketsDataB')).Email} required/>
              </div>
            </div>
            <div>
              {/* ID LINE */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                  <p style={{
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.57904787em',
                    letterSpacing: '0.03em',
                    textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                    margin: '0',
                    fontFamily: 'Sniglet, cursive',
                    marginLeft: '5px',
                  }}>ID LINE:</p>
                </div>
                <input style={{
                  textAlign: 'center',
                  backgroundColor: '#fff3d7',
                  borderRadius: '30px',
                  color: 'black',
                  fontFamily: 'Sniglet, cursive',
                  border: 'none',
                  height: '38px',
                  fontSize: '16px',
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='IDLINE' type='text' defaultValue={localStorage.getItem('ticketsDataB') === null ? "" : JSON.parse(localStorage.getItem('ticketsDataB')).IDLINE} required/>
              </div>
              {/* No. WhatsApp */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                  <p style={{
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.57904787em',
                    letterSpacing: '0.03em',
                    textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                    margin: '0',
                    fontFamily: 'Sniglet, cursive',
                    marginLeft: '5px',
                  }}>No. WhatsApp:</p>
                </div>
                <input style={{
                  textAlign: 'center',
                  backgroundColor: '#fff3d7',
                  borderRadius: '30px',
                  color: 'black',
                  fontFamily: 'Sniglet, cursive',
                  border: 'none',
                  height: '38px',
                  fontSize: '16px',
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='NoWhatsApp' type='number' defaultValue={localStorage.getItem('ticketsDataB') === null ? "" : JSON.parse(localStorage.getItem('ticketsDataB')).NoWhatsApp} required/>
              </div>
              {/* Asal Sekolah */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                  <p style={{
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.57904787em',
                    letterSpacing: '0.03em',
                    textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                    margin: '0',
                    fontFamily: 'Sniglet, cursive',
                    marginLeft: '5px',
                  }}>Asal Sekolah:</p>
                </div>
                <input style={{
                  textAlign: 'center',
                  backgroundColor: '#fff3d7',
                  borderRadius: '30px',
                  color: 'black',
                  fontFamily: 'Sniglet, cursive',
                  border: 'none',
                  height: '38px',
                  fontSize: '16px',
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='AsalSekolah' type='text' defaultValue={localStorage.getItem('ticketsDataB') === null ? "" : JSON.parse(localStorage.getItem('ticketsDataB')).AsalSekolah} required/>
              </div>
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "10px"}}>
            <button style={{
            backgroundColor: '#df7273',
            marginTop: '25px',
            padding: '5px 20px',
            border: 'none',
            borderRadius: '30px',
            fontFamily: 'Sniglet, cursive',
            fontSize: '16px',
            color: 'white',
            cursor: 'pointer',
            }} onClick={(e) => back(e)}>Back</button>
            <input style={{
            backgroundColor: '#df7273',
            marginTop: '25px',
            padding: '5px 20px',
            border: 'none',
            borderRadius: '30px',
            fontFamily: 'Sniglet, cursive',
            fontSize: '16px',
            color: 'white',
            cursor: 'pointer',
            }} type='submit' value='Next'/>
        </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Ticket