import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FundraiseProducts } from '../data2';

const Product = () => {
    const [viewBeli, setViewBeli] = useState(false)
    const [sizeValue, setSizeValue] = useState("")
    const [lenganValue, setLenganValue] = useState("")
    const [quantityValue, setQuantityValue] = useState(0)
    const [barangDibeli, setBarangDibeli] = useState("")
    var path = window.location.pathname;
    var str = path.split("/");
    let productDetail = FundraiseProducts.find(o => o.code === str[2]);
    
    function setSize(e) {
        setSizeValue(e.target.value)
        setBarangDibeli(`${str[2]}${e.target.value}${lenganValue}: ${quantityValue}`)
    }

    function setLengan(e) {
        setLenganValue(e.target.value)
        setBarangDibeli(`${str[2]}${sizeValue}${e.target.value}: ${quantityValue}`)
    }

    function setQuantity(e) {
        setQuantityValue(e.target.value)
        setBarangDibeli(`${str[2]}${sizeValue}${lenganValue}: ${e.target.value}`)
    }

    function beliBarang(e) {
        e.preventDefault();
        setViewBeli(false)
        alert(barangDibeli)
        setSizeValue("")
        setLenganValue("")
        setQuantityValue(0)
    }
  
    return (
        <div>
            <div className="bg-[url('assets/background5.png')] bg-bottom min-h-screen bg-no-repeat bg-cover bg-scroll">
                <div className='p-[20px]'>
                    <div>
                        <Link to={`/products2`}><button className='bg-orange-300 px-4 py-2 rounded-lg cursor-pointer'>Kembali ke produk!</button></Link>
                        <div className='flex flex-col justify-center items-center w-[80vw] max-w-[1200px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
                            <p className="font-chewy text-3xl text-center tracking-wide mb-[15px]">Baju Putih</p>
                            <img src={productDetail.img} style={{maxWidth: "20vw"}}/>
                            <p style={{marginTop: "10px"}}>Deskripsi: {productDetail.desc}</p>
                            <button style={{
                                backgroundColor: "white",
                                padding: "1px 15px",
                                border: "none",
                                borderRadius: "10px",
                                color: "black",
                                fontFamily: 'Sniglet, cursive',
                                fontSize: "15px",
                                cursor: "pointer",
                                marginTop: "30px"
                            }} onClick={(e) => setViewBeli(true)}>Beli</button>
                        </div>
                    </div>
                </div>
            </div>
            {viewBeli && <div>
                <div className='flex flex-col justify-center items-center w-[80vw] max-w-[1200px] bg-white p-[20px] mx-[auto] rounded-xl font-[Sniglet, cursive] my-0 fixed bottom-0 left-[50%] translate-x-[-50%]'>
                    <p>Ukuran</p>
                    <select onChange={(e) => setSize(e)}>
                        <option value="" selected disabled>Pilih Size</option>
                        {productDetail.size.map((i) => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>
                    <p>{sizeValue}</p>
                    <p>Lengan</p>
                    <select onChange={(e) => setLengan(e)}>
                        <option value="" selected disabled>Pilih Size</option>
                        {productDetail.lengan.map((i) => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>
                    <p>{lenganValue}</p>
                    <p>Jumlah</p>
                    <select onChange={(e) => setQuantity(e)}>
                        <option value="" selected disabled>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button style={{
                        backgroundColor: "blue",
                        padding: "1px 15px",
                        border: "none",
                        borderRadius: "10px",
                        color: "black",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px",
                        cursor: "pointer",
                        marginTop: "30px"
                    }} onClick={(e) => beliBarang(e)}>Beli</button>
                </div>
            </div>}
        </div>
    )
}

export default Product