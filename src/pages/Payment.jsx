import React, { useState, useRef } from 'react'
import QRIS from '../assets/QRIS.png'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import PulseLoader from "react-spinners/PulseLoader";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

import {FundraiseProducts} from '../data.js'

const Payment = () => {
  let [loadingChange, setLoadingChange] = useState(false);
  let [loadingSubmit, setLoadingSubmit] = useState(false);
  let counter = 0;
  const item = JSON.parse(localStorage.getItem("productQuantities"))
  const image = useRef("")
  const form = useRef();
  const navigate = useNavigate();

  function merchMapping(index) {
    const resMerch = `${counter + 1}. ${FundraiseProducts[index]?.name} berjumlah ${item[FundraiseProducts[index]?.code]}`
    counter++
    return resMerch
  }


  function Submit(e) {
    e.preventDefault()
    setLoadingSubmit(true)
    const formDatab = new FormData(e.target)
    emailjs.sendForm('service_7bnwm9p', 'template_ynxk2u7', e.target, '2PopVggoSVmjI1C5w')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    fetch(
      "https://script.google.com/macros/s/AKfycbxEXcCrD3WGJexwZP8fOam0NBOuKOVl7MqIO8R60qL-cfHSh2XLGGdkQYIdeeN0m1ji/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then(() => navigate("/merchsuccess"))
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
      <div className="bg-[url('assets/background5.png')] bg-bottom min-h-screen bg-no-repeat bg-cover bg-scroll">
        <div className='p-[20px]'>
          <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
            <p className="font-chewy text-3xl text-center tracking-wide">Pembayaran</p>
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
          <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
            <p className="font-chewy text-3xl text-center tracking-wide">Upload Bukti Pembayaran</p>
            <form ref={form} className="form" onSubmit={(e) => Submit(e)}>
              <div>
                <input style={{
                  textAlign: 'center',
                  width: '30vw',
                  maxWidth: '300px',
                  fontFamily: 'Sniglet, cursive',
                  fontSize: '16px',
                  color: 'black',
                  marginTop: "30px"
                }} type='file' onChange={(e) => HandleChange(e)}/>
                <PulseLoader
                  color="black"
                  loading={loadingChange}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  style={{textAlign: "center"}}
                />
                <input name='BuktiBayar' type='text' style={{display: "none"}} className='imageurl' required/>
                {FundraiseProducts.map((product, index) => {
                  if(item[product.code]){
                    return  <input name={`Merch${counter}`} type='text' style={{display: "none"}}
                    key={`${counter}`}
                    defaultValue={merchMapping(index)}/>
                  }
                })
                }
                <input name='Name' type='text' style={{display: "none"}} defaultValue={localStorage.getItem("Name")}/>
                <input name='Email' type='text' style={{display: "none"}} defaultValue={localStorage.getItem("Email")}/>
                <input name='TotalKeseluruhan' type='text' style={{display: "none"}} defaultValue={localStorage.getItem("totalKeseluruhan")}/>
              </div>
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginBottom: "20px"}}>
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
                }} type='submit' value="Kirim Bukti Bayar"/>
                <PulseLoader
                  style={{display: "inline-block"}}
                  color="black"
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
    </div>
  )
}

export default Payment
