import React, {useState} from 'react';
import CheckOut2 from './CheckOut2';
import { Link } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import Payment from './Payment';

const values = {
    "CatatanPesanan" : ""
}
const CheckOut = () => {
    const [checkoutview, setCheckoutview] = useState(true);
    const [paymentview, setPaymentview] = useState(false);
    let [loadingSubmit, setLoadingSubmit] = useState(false);
    
    function Submit(e) {
        // e.preventDefault()
        const formDatab = new FormData(e.target)
        for (const pair of formDatab.entries()) {
            // if(pair[0] == "CatatanPesanan"){
                console.log(`${pair[0]}, ${pair[1]}`);
                values[pair[0]] = pair[1]
            // }
          }
        //   localStorage.setItem(`${pair[0]}`, pair[1])
        //   console.log(values)
        setLoadingSubmit(true);
        setCheckoutview(!checkoutview);
        setPaymentview(!paymentview);
    }
    
    return (
        <div>
            <div className="bg-[url('assets/background5.png')] bg-bottom min-h-screen bg-no-repeat bg-cover bg-scroll">
                <div className='p-[20px]'>
                    {checkoutview && (
                        <div>
                            <Link to={`/products`}><button className='bg-orange-300 px-4 py-2 rounded-lg cursor-pointer'>Kembali ke produk!</button></Link>
                            <form className="form" onSubmit={(e) => Submit(e)}>
                                <CheckOut2 />
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
                                        margin: 'auto',
                                        display: 'block'
                                    }} type='submit' value='Pembayaran'/>
                                    <PulseLoader
                                        color="black"
                                        loading={loadingSubmit}
                                        size={10}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                        className='mt-[5px]'
                                    />
                                </div>
                            </form>
                        </div>
                    )}
                    {paymentview && <Payment values={values}/>}
                </div>
            </div>
        </div>
    )
}

export default CheckOut