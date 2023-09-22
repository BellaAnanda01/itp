import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import background from '../assets/background2.png'
import element from '../assets/element.png'
import element2 from '../assets/element2.png'
import PulseLoader from "react-spinners/PulseLoader";
import QRIS from '../assets/QRIS.png'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import emailjs from '@emailjs/browser';

const TicketPayment = () => {
  let [loadingChange, setLoadingChange] = useState(false);
  let [loadingSubmit, setLoadingSubmit] = useState(false);
  let [TheBarcodeNumber, setTheBarcodeNumber] = useState(0)
  const image = useRef("")
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("ticketsDataB") === null) {
      navigate('/tickettypes')
    }
    window.scrollTo(0, 0)
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTheBarcodeNumber(Math.floor(1000000000 + Math.random() * 9999999999));
  // eslint-disable-next-line
  }, []);

  let UrlBarcodeNumber = `http://localhost:3000/eticket/${TheBarcodeNumber}`

  let ticketsData = JSON.parse(localStorage.getItem("ticketsDataB"));
  let ticketDataReturn = ""

  if(ticketsData !== null) {
    ticketDataReturn = Object.entries(ticketsData).map(([key, value]) => {
      return (<input style={{display: "none"}} key={key} name={key} type='text' defaultValue={value}/>)
    })
  }

  function HandleChange(e) {
    e.preventDefault();
    setLoadingChange(true)
    image.current = e.target.files[0]
    const fileName = new Date().getTime() + image.current.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image.current);

    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        // eslint-disable-next-line
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
        }
        }, 
        (error) => {
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                document.querySelector(".imageurl").value = downloadURL
                setLoadingChange(false)
            });
        }
    );
  }

  function Submit(e) {
    e.preventDefault();
    setLoadingSubmit(true)
    const postData = {
      JenisTiket: `${ticketsData.JenisTiket}`,
      NamaLengkap: `${ticketsData.NamaLengkap}`,
      KelasPilihan: `${ticketsData.KelasPilihan}`,
      NoWhatsApp: `${ticketsData.NoWhatsApp}`,
      BarcodeNumber: TheBarcodeNumber
  }
  
  fetch(
    "https://itp-ticketbackend.vercel.app/ticket/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
      body: JSON.stringify(postData)
    }
    ).then(response => response.json())
    
    const formEle = document.querySelector("form");
    e.preventDefault()
    emailjs.sendForm('service_xctzzvd', 'template_95gj8rw', form.current, 'TZhEcRcr-wp0i3YYA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyuWo0bt1iuXht86OpmnpZsqkvb3B4KYWddWCOEvo4XLrHCT2ZQI9dUPjxAM8D60_93Vg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then(() => {
        localStorage.removeItem('ticketsDataB')
        navigate("/ticketsuccess")}
      )
      .catch((error) => {
        console.log(error);
    });
  }

  const back = (e) => {
      e.preventDefault();
      if(localStorage.getItem('tipetiket') === "Offline") {
        navigate('/selectclass');
      } else {
        navigate('/buyticket');
      }
  }
  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "top center", minHeight: "100vh"}}>
          <div style={{minHeight: "calc(100vh - 64px)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "max-content"}}>
              <p className="font-chewy pt-[40px] text-center text-[40px] sm:text-[5vw] text-white tracking-[0.11em] drop-shadow-[0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.82)] m-0" >PEMBAYARAN</p>
              <img style={{
              width: '20vw',
              textAlign: 'center',
              marginTop: '-10px',
              }} src={element} alt='Tiket Open House Psikologi UI'/>
          </div>
          <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
            <p className="font-chewy text-3xl text-center tracking-wide mb-2">Cara Pembayaran</p>
            <div className='mx-[auto] font-sniglet my-2 bg-white w-[70vw] max-w-[700px] pl-2 tracking-wide rounded-md'>
              <p className='mb-1 py-2'><b>Mandiri</b></p>
              <p>Atas Nama: <b>Kayfa Puti Naya</b></p>
              <p className='mb-1'>No. Rekening: <b>1330023979438</b></p>
            </div>
            <div className='mx-[auto] font-sniglet my-2 bg-white w-[70vw] max-w-[700px] pl-2 tracking-wide rounded-md'>
              <p className='mb-1 py-2'><b>BNI</b></p>
              <p>Atas Nama: <b>Renoadhi Taufiqulhakim</b></p>
              <p className='mb-1'>No. Rekening: <b>1627235093</b></p>
            </div>
            <div className='mx-[auto] font-sniglet my-2 bg-white w-[70vw] max-w-[700px] pl-2 tracking-wide rounded-md'>
              <p className='mb-1 py-2'><b>BCA</b></p>
              <p>Atas Nama: <b>Renoadhi Taufiqulhakim</b></p>
              <p className='mb-1'>No. Rekening: <b>6030554335</b></p>
            </div>
            <div className='mx-[auto] font-sniglet my-2 bg-white w-[70vw] max-w-[700px] pl-2 tracking-wide rounded-md'>
              <p className='mb-1 py-2'><b>QRIS</b></p>
              <img src={QRIS} alt="" style={{display: "block", margin: "auto", width: "60vw", maxWidth: "600px", paddingBottom: "20px"}}/>
            </div>
          </div>
          <form ref={form} className="form" onSubmit={(e) => Submit(e)}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px", marginTop: "15px"}}>
            <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
            <p style={{
              fontSize: '20px',
              color: 'white',
              lineHeight: '1.1em',
              letterSpacing: '0.03em',
              textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
              margin: '0',
              fontFamily: 'Sniglet, cursive',
              marginLeft: '5px',
              marginBottom: "10px"
            }}>Bukti pembayaran<br/><span style={{lineHeight: '0',fontSize: "14px", margin: "0"}}>Yang harus dibayar: {localStorage.getItem('tipetiket') === "Offline" ? "Rp40.000" : "Rp25.000"}</span></p>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <PulseLoader
              style={{display: "inline-block"}}
              color="white"
              loading={loadingChange}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <input style={{
              textAlign: 'center',
              fontFamily: 'Sniglet, cursive',
              fontSize: '16px',
              color: 'white',
            }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" type='file' onChange={(e) => HandleChange(e)}/>
            <div className='flex flex-col'>
            <input placeholder='BuktiBayar' name='BuktiBayar' type='text' style={{display: "none"}} className='imageurl' required/>
            <input name='BarcodeNumber' type='number' style={{display: "none"}} value={TheBarcodeNumber}/>
            <input name='ETicket' type='text' style={{display: "none"}} value={UrlBarcodeNumber}/>
            <input name='GrupWA' type='text' style={{display: "none"}} value={localStorage.getItem('tipetiket') === "Offline" ? "Link grup offline" : "Link grup online"}/>
            {ticketDataReturn}
            </div>
          </div> 
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "10px", marginBottom: "50px", marginTop: '25px'}}>
              <button style={{
              backgroundColor: '#df7273',
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
              padding: '5px 20px',
              border: 'none',
              borderRadius: '30px',
              fontFamily: 'Sniglet, cursive',
              fontSize: '16px',
              color: 'white',
              cursor: 'pointer',
              }} type='submit' value='Submit'/>
              <PulseLoader
                color="white"
                loading={loadingSubmit}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
          </div>
          </form>
          </div>
      </div>
    </div>
  )
}

export default TicketPayment