import React, { useEffect, useRef, useState } from 'react'
import QRIS from '../assets/QRIS.png'
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import emailjs from '@emailjs/browser';

const Payment = ({values}) => {
  let [loadingChange, setLoadingChange] = useState(false);
  let [loadingSubmit, setLoadingSubmit] = useState(false);
  let [imgUrl, setImgUrl] = useState("")
  const image = useRef("")
  const form = useRef();
  const navigate = useNavigate();

  let formValues = values
  let formValuesReturn = Object.entries(formValues).map(([key, value]) => {
    return (<input style={{display: "none"}} key={key} name={key} type='text' defaultValue={value}/>)
  })
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, [])

  function formatRupiah(money) {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
  }

  function Submit(e) {
    e.preventDefault()
    setLoadingSubmit(true)
    const valueData = {
        Merch: `${values.Merch}`,
        TotalPrice: `${values.TotalPrice}`,
        TotalItem: `${values.TotalItem}`,
        BiayaLainnya: `${values.BiayaLainnya}`,
        CatatanPesanan: `${values.CatatanPesanan}`,
        Name: `${values.Name}`,
        NoTelepon: `${values.NoTelepon}`,
        Email: `${values.Email}`,
        PengambilanBarang: `${values.PengambilanBarang}`,
        Provinsi: `${values.Provinsi}`,
        Wilayah: `${values.Wilayah}`,
        AlamatLengkap: `${values.AlamatLengkap}`,
        KodePos: `${values.KodePos}`,
        Ongkir: `${values.Ongkir}`,
        TotalKeseluruhan: `${values.TotalKeseluruhan}`,
        BuktiBayar: imgUrl,
    }

    fetch("http://localhost:5505/order/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(valueData)
        }
    ).then(response => response.json())

    emailjs.sendForm('service_7bnwm9p', 'template_0khh89b', e.target, '2PopVggoSVmjI1C5w')
    .then((result) => {
        console.log(result.text);
        localStorage.removeItem('merch')
        navigate("/merchsuccess")
    }, (error) => {
        console.log(error.text);
    });
  }

  // URUSAN FIREBASE
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
                setImgUrl(downloadURL)
                setLoadingChange(false)
            });
        }
    );
  }

  return (
    <div>
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
            <p className="font-chewy text-3xl text-center tracking-wide mb-2">Upload Bukti Pembayaran</p>
            <p className='m-0'>Total yang perlu dibayar: {formatRupiah(localStorage.getItem("totalKeseluruhan"))}</p>
            <form ref={form} className="form" onSubmit={(e) => Submit(e)}>
                {formValuesReturn}
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
  )
}

export default Payment