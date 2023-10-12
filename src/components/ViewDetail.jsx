import React, { useState } from 'react'
import { FundraiseProducts } from '../data';
import sizeImg from '../assets/Size.png'

const ViewDetail = ({code, viewDetail, setViewDetail}) => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedLengan, setSelectedLengan] = useState("");
    const [selectedKeychain, setSelectedKeychain] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [addAnother, setAddAnother] = useState(false);
    
    let product = {}
    let option = []

    if(code) {
        product = FundraiseProducts.find(element => element.Code === code);
        option = product.Type
    }
    const [totalPrice, setTotalPrice] = useState(code ? product.Price : "");

    const cancel = (e) => {
        e.preventDefault()
        setViewDetail(!viewDetail)
    }

    let merchandise = JSON.parse(localStorage.getItem("merch")) === null ? "" : JSON.parse(localStorage.getItem("merch"))

    const buy = (e, code) => {
        e.preventDefault()
        
        let merch = JSON.parse(localStorage.getItem("merch"))
        
        if(merch === null) {
            localStorage.setItem("merch", JSON.stringify({}))
            merch = JSON.parse(localStorage.getItem("merch"))
        }

        const newItem = {
            size: selectedSize,
            lengan: selectedLengan,
            keychain: selectedKeychain,
            quantity: Number(selectedQuantity),
            price: totalPrice * selectedQuantity
        }

        if (merch[code]) {
            let check = true
            for (let index = 0; index < merch[code].length; index++) {
                const element = merch[code][index];
                if(element.size === selectedSize && element.lengan === selectedLengan && element.keychain === selectedKeychain) {
                    element.quantity = element.quantity + selectedQuantity
                    element.price = element.price + totalPrice * selectedQuantity
                    check = false
                    break
                }
            }
            if (check) {
                merch[code].push(newItem)
            }
        } else {
            merch[code] = [newItem]
        }

        localStorage.setItem("merch", JSON.stringify(merch))
        setViewDetail(!viewDetail)
    }

    function formatRupiah(money) {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    function handleAddAnother(e) {
        e.preventDefault();
        setAddAnother(true)
    }

    function deleteItem(e, index) {
        e.preventDefault();
        merchandise[code].splice(index, 1);
        if(merchandise[code].length === 0) {
            delete merchandise[code]
        }
        localStorage.setItem("merch", JSON.stringify(merchandise));
        setViewDetail(!viewDetail)
    }

  return (
    <div id='viewDetail'>
        <div className='font-sniglet flex flex-col justify-center items-center w-[80vw] max-w-[1200px] bg-white p-[20px] mx-[auto] rounded-t-xl my-0 fixed bottom-0 left-[50%] translate-x-[-50%] max-h-[50vh]'>

            {merchandise[code] ? (
                <div style={{width: "100%", display: addAnother && "none", overflowY: "auto", position: "relative"}}>
                    <div style={{width: "98%"}}>
                    <p style={{fontWeight: "600", textAlign: "center", display: "block"}}>{code ? product.Name : ""}</p>
                    <div style={{textAlign: "right", display: "block"}}>
                        {merchandise[code].map((item, index) =>
                            (
                                <div key={index} style={{borderBottom: "1.5px solid black", display: "block"}}>
                                    {item.size ? <p>Size: {item.size}</p> : ""}
                                    {item.lengan ? <p>Lengan: {item.lengan}</p> : ""}
                                    {item.keychain ? <p>Keychain: {item.keychain}</p> : ""}
                                    {item.quantity ? <p>Jumlah: {item.quantity}</p> : ""}
                                    {item.price ? <p>Harga: {formatRupiah(item.price)}</p> : ""}
                                    <button style={{
                                    backgroundColor: "#EE6F22",
                                    padding: "1px 15px",
                                    border: "none",
                                    borderRadius: "10px",
                                    fontFamily: 'Sniglet, cursive',
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    color: "white",
                                    margin: "5px 0"
                                    }} onClick={code ? e => {deleteItem(e, index)} : ""}>Delete</button>
                                </div>
                            )
                        )}
                        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                            <button style={{
                            backgroundColor: "#EE6F22",
                            padding: "1px 15px",
                            border: "none",
                            borderRadius: "10px",
                            fontFamily: 'Sniglet, cursive',
                            fontSize: "15px",
                            cursor: "pointer",
                            marginTop: "30px",
                            color: "white"
                            }} onClick={code ? e => {cancel(e)} : ""}>Cancel</button>
                            <button style={{
                                backgroundColor: "#87B1D6",
                                padding: "1px 15px",
                                border: "none",
                                borderRadius: "10px",
                                fontFamily: 'Sniglet, cursive',
                                fontSize: "15px",
                                cursor: "pointer",
                                marginTop: "30px",
                                color: "black"
                            }} onClick={(e) => handleAddAnother(e)}>Add Another</button>
                        </div>
                    </div>
                    </div>
                </div>
            ) : <div className='flex flex-col justify-center items-center' style={{overflowY: "auto", position: "relative", width: "100%"}}>
            <p style={{fontWeight: "600", marginTop: !code ? "0px" : product.Detail ? "calc(50vh + 50px)" : "0px"}}>{code ? product.Name : ""}</p>
            {!code ? "" : product.Detail ? (
                <div>
                    <img src={sizeImg} alt="" style={{width: "70vw", maxWidth: "300px", display: "block", margin: "0 auto", marginTop: "10px"}}/>
                    <p>Jika memilih ukuran XXL, maka akan dikenakan biaya tambahan Rp10.000</p>
                    <p>Jika memilih lengan panjang, maka akan dikenakan biaya tambahan Rp10.000</p>
                    <p style={{marginBottom: "30px"}}>Jika ingin memilih ukuran lain, silakan hubungi xyz</p>
                </div>
            ) : ""}
            <p>{!code ? "" : option.size ? (
                <div>
                    <p>Pilihan Ukuran</p>
                    <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                        onChange={(e) => {
                            setSelectedSize(e.target.value); // Simpan pilihan ukuran dalam state
                            let newTotalPrice = code ? product.Price : 0;
                            if (e.target.value === "XXL" && selectedLengan !== "Panjang") {
                                newTotalPrice += 10000; // Tambah 10.000 jika ukuran XXL dipilih
                            } else if (e.target.value !== "XXL" && selectedLengan === "Panjang") {
                                newTotalPrice += 10000; // Tambah 10.000 jika lengan panjang dipilih
                            } else if (e.target.value === "XXL" && selectedLengan === "Panjang") {
                                newTotalPrice += 20000; // Tambah 20.000 jika ukuran XXL dan lengan panjang dipilih
                            }
                            setTotalPrice(newTotalPrice); // Simpan harga total dalam state
                        }}
                    >
                        <option value="" selected disabled>Pilih Ukuran</option>
                        {option.size.map((i) => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>
                </div>
            ) : ""}</p>
            <p>{!code ? "" : option.lengan ? (
                <div>
                    <p>Pilihan Lengan</p>
                    <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                        onChange={(e) => {
                            setSelectedLengan(e.target.value); // Simpan pilihan lengan dalam state
                            let newTotalPrice = code ? product.Price : 0;
                            if (e.target.value === "Panjang" && selectedSize !== "XXL") {
                                newTotalPrice += 10000; // Tambah 10.000 jika ukuran XXL dipilih
                            } else if (e.target.value !== "Panjang" && selectedSize === "XXL") {
                                newTotalPrice += 10000; // Tambah 10.000 jika lengan panjang dipilih
                            } else if (e.target.value === "Panjang" && selectedSize === "XXL") {
                                newTotalPrice += 20000; // Tambah 20.000 jika ukuran XXL dan lengan panjang dipilih
                            }
                            setTotalPrice(newTotalPrice); // Simpan harga total dalam state
                        }}
                    >
                        <option value="" selected disabled>Pilih Lengan</option>
                        {option.lengan.map((i) => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>
                </div>
            ) : ""}</p>
            <p>{!code ? "" : option.keychain ? (
                <div>
                    <p>Pilihan Keychain</p>
                    <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                        onChange={(e) => {
                            setSelectedKeychain(e.target.value);
                        }}
                    >
                        <option value="" selected disabled>Pilih Keychain</option>
                        {option.keychain.map((i) => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>
                </div>
            ) : ""}</p>
            <p>Jumlah</p>
            <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                onChange={(e) => {
                    setSelectedQuantity(Number(e.target.value));
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p>Total Harga: {code ? formatRupiah(selectedQuantity * totalPrice) : ""}</p>
            <div style={{display: "flex", gap: "10px"}}>
                <button style={{
                    backgroundColor: "#EE6F22",
                    padding: "1px 15px",
                    border: "none",
                    borderRadius: "10px",
                    fontFamily: 'Sniglet, cursive',
                    fontSize: "15px",
                    cursor: "pointer",
                    marginTop: "30px",
                    color: "white"
                }} onClick={code ? e => {cancel(e)} : ""}>Cancel</button>
                <button style={{
                    backgroundColor: "#87B1D6",
                    padding: "1px 15px",
                    border: "none",
                    borderRadius: "10px",
                    fontFamily: 'Sniglet, cursive',
                    fontSize: "15px",
                    cursor: "pointer",
                    marginTop: "30px",
                    color: "black"
                }} onClick={code ? e => {buy(e, code)} : ""}>Beli</button>
            </div>
        </div>}
            {addAnother && 
            <div className='flex flex-col justify-center items-center' style={{overflowY: "auto", position: "relative", width: "100%"}}>
            <p style={{fontWeight: "600", marginTop: !code ? "0px" : product.Detail ? "calc(50vh + 50px)" : "0px"}}>{code ? product.Name : ""}</p>
                {!code ? "" : product.Detail ? (
                    <div>
                        <img src={sizeImg} alt="" style={{width: "70vw", maxWidth: "300px", display: "block", margin: "0 auto", marginTop: "10px"}}/>
                        <p>Jika memilih ukuran XXL, maka akan dikenakan biaya tambahan Rp10.000</p>
                        <p>Jika memilih lengan panjang, maka akan dikenakan biaya tambahan Rp10.000</p>
                        <p style={{marginBottom: "30px"}}>Jika ingin memilih ukuran lain, silakan hubungi xyz</p>
                    </div>
                ) : ""}
                <p>{!code ? "" : option.size ? (
                    <div>
                        <p>Pilihan Ukuran</p>
                        <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                            onChange={(e) => {
                                setSelectedSize(e.target.value); // Simpan pilihan ukuran dalam state
                                let newTotalPrice = code ? product.Price : 0;
                                if (e.target.value === "XXL" && selectedLengan !== "Panjang") {
                                    newTotalPrice += 10000; // Tambah 10.000 jika ukuran XXL dipilih
                                } else if (e.target.value !== "XXL" && selectedLengan === "Panjang") {
                                    newTotalPrice += 10000; // Tambah 10.000 jika lengan panjang dipilih
                                } else if (e.target.value === "XXL" && selectedLengan === "Panjang") {
                                    newTotalPrice += 20000; // Tambah 20.000 jika ukuran XXL dan lengan panjang dipilih
                                }
                                setTotalPrice(newTotalPrice); // Simpan harga total dalam state
                            }}
                        >
                            <option value="" selected disabled>Pilih Ukuran</option>
                            {option.size.map((i) => (
                                <option value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                ) : ""}</p>
                <p>{!code ? "" : option.lengan ? (
                    <div>
                        <p>Pilihan Lengan</p>
                        <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                            onChange={(e) => {
                                setSelectedLengan(e.target.value); // Simpan pilihan lengan dalam state
                                let newTotalPrice = code ? product.Price : 0;
                                if (e.target.value === "Panjang" && selectedSize !== "XXL") {
                                    newTotalPrice += 10000; // Tambah 10.000 jika ukuran XXL dipilih
                                } else if (e.target.value !== "Panjang" && selectedSize === "XXL") {
                                    newTotalPrice += 10000; // Tambah 10.000 jika lengan panjang dipilih
                                } else if (e.target.value === "Panjang" && selectedSize === "XXL") {
                                    newTotalPrice += 20000; // Tambah 20.000 jika ukuran XXL dan lengan panjang dipilih
                                }
                                setTotalPrice(newTotalPrice); // Simpan harga total dalam state
                            }}
                        >
                            <option value="" selected disabled>Pilih Lengan</option>
                            {option.lengan.map((i) => (
                                <option value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                ) : ""}</p>
                <p>{!code ? "" : option.keychain ? (
                    <div>
                        <p>Pilihan Keychain</p>
                        <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                            onChange={(e) => {
                                setSelectedKeychain(e.target.value);
                            }}
                        >
                            <option value="" selected disabled>Pilih Keychain</option>
                            {option.keychain.map((i) => (
                                <option value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                ) : ""}</p>
                <p>Jumlah</p>
                <select style={{width: "140px", border: "solid 1px black", borderRadius: "20px", padding: "0 5px"}}
                    onChange={(e) => {
                        setSelectedQuantity(Number(e.target.value));
                    }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p>Total Harga: {code ? formatRupiah(selectedQuantity * totalPrice) : ""}</p>
                <div style={{display: "flex", gap: "10px"}}>
                    <button style={{
                        backgroundColor: "#EE6F22",
                        padding: "1px 15px",
                        border: "none",
                        borderRadius: "10px",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px",
                        cursor: "pointer",
                        marginTop: "30px",
                        color: "white"
                    }} onClick={code ? e => {cancel(e)} : ""}>Cancel</button>
                    <button style={{
                        backgroundColor: "#87B1D6",
                        padding: "1px 15px",
                        border: "none",
                        borderRadius: "10px",
                        fontFamily: 'Sniglet, cursive',
                        fontSize: "15px",
                        cursor: "pointer",
                        marginTop: "30px",
                        color: "black"
                    }} onClick={code ? e => {buy(e, code)} : ""}>Beli</button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default ViewDetail