import React, { useEffect, useState } from 'react'

const Test = () => {
    let [TheBarcodeNumber, setTheBarcodeNumber] = useState(0)
    
    useEffect(() => {
        setTheBarcodeNumber(Math.floor(1000000000 + Math.random() * 9999999999));
    }, [])
    
    let ticketsData = JSON.parse(localStorage.getItem("ticketsDataB"));

    function submit (e) {
        e.preventDefault();
        const postData = {
            JenisTiket: ticketsData.JenisTiket,
            NamaLengkap: ticketsData.NamaLengkap,
            KelasPilihan: ticketsData.KelasPilihan,
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
        )
    }
    return (
        <div>
            <button onClick={(e) => submit(e)}></button>
        </div>
    )
}

export default Test