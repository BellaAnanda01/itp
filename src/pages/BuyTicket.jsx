import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import PulseLoader from "react-spinners/PulseLoader";
import emailjs from '@emailjs/browser';
import background from '../assets/background2.png'
import element from '../assets/element.png'
import element2 from '../assets/element2.png'
import { Link } from 'react-router-dom'

const Ticket = () => {
    let [loadingChange, setLoadingChange] = useState(false);
    let [loadingSubmit, setLoadingSubmit] = useState(false);
    const image = useRef("")
    const form = useRef();

    const navigate = useNavigate();

    function Submit(e) {
        setLoadingSubmit(true)
        const formEle = document.querySelector("form");
        e.preventDefault()
        emailjs.sendForm('service_o5lgt4j', 'template_pouartl', form.current, 'd8x-mPmAnuZlVbPY6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbzmte0ciIZzwtiZYdxW8pd9_clNAGWx-0czCQr6UyFhgM9BwfL7vliS0P41mRpgLQYJ3w/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then(() => navigate("/ticketsuccess"))
          .catch((error) => {
            console.log(error);
        });
    }

    function HandleChange(e) {
        e.preventDefault()
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

  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "top center", minHeight: "100vh"}}>
        <div style={{minHeight: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "max-content"}}>
            <p className="font-chewy pt-[40px] text-center text-[40px] sm:text-[5vw] text-white tracking-[0.11em] drop-shadow-[0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.82)] m-0" >PENDAFTARAN</p>
            <img style={{
              width: '20vw',
              textAlign: 'center',
              marginTop: '-10px',
            }} src={element}/>
          </div>
          <form ref={form} className="form" onSubmit={(e) => Submit(e)}>
          <div className='flex items-center content-center sm:gap-[5vw] sm:flex-row gap-0 flex-col'>
            <div>
              {/* Jenis Tiket */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2}/>
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
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" value="Sharing S-1" disabled/>
              </div>
              {/* Nama Lengkap */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2}/>
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
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='NamaLengkap' type='text' required/>
              </div>
              {/* Email */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2}/>
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
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='Email' type='text' required/>
              </div>
            </div>
            <div>
              {/* ID LINE */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2}/>
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
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='IDLINE' type='text' required/>
              </div>
              {/* No. WhatsApp */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2}/>
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
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='NoWhatsApp' type='number' required/>
              </div>
              {/* Asal Sekolah */}
              <div style={{margin: "20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                  <img style={{height: "30px"}} src={element2}/>
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
                }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]" name='AsalSekolah' type='text' required/>
              </div>
            </div>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px", marginTop: "15px"}}>
            <img style={{height: "30px"}} src={element2}/>
            <p style={{
              fontSize: '20px',
              color: 'white',
              lineHeight: '1.57904787em',
              letterSpacing: '0.03em',
              textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
              margin: '0',
              fontFamily: 'Sniglet, cursive',
              marginLeft: '5px',
            }}>Bukti follow Instagram <Link to="https://www.instagram.com/itp_psikoui/" target="_blank" style={{color: "white"}}>@itp_psikoui</Link></p>
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
            <input placeholder='ScreenShot' name='ScreenShot' type='text' style={{display: "none"}} className='imageurl' required/>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginBottom: "50px"}}>
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
            }} type='submit'/>
            <PulseLoader
              style={{display: "inline-block"}}
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

export default Ticket