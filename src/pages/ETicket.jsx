import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import sponsor from '../assets/sponsor.png'
import medpar from '../assets/medpar.png'
var Barcode = require('react-barcode');

const ETicket = () => {
  let [data, setData] = useState([])
  const { id } = useParams();

  const fetchTicketData = async () => {
    try {
        let response = await fetch(`https://itp-ticketbackend.vercel.app/ticket/${id}`);
        const result = await response.json();
        const theResult = Object.values(result)
        setData(theResult)
    }
    catch (error){
        setData("")
        console.log(error)
    }
  }

  useEffect(() => {
    fetchTicketData([])
    window.scrollTo(0, 0)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {data && 
      <div>
        <div style={{minHeight: "calc(100vh - 120px)", backgroundColor: "#faf0db", padding: "20px 0"}}>
          <p className='text-center font-sniglet text-[40px] pb-[20px]'>Your Ticket</p>
          <div style={{marginTop: "30px", marginBottom: "40px", width: "calc(100vw - 100px)", maxWidth: "400px", borderRadius: "15px", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <div style={{backgroundImage: "url('/img/tickettemplate.png')", padding: '20px 0', borderTopLeftRadius: "15px", borderTopRightRadius: "15px",}} className='bg-bottom bg-cover'>
              <p className='font-poppins text-center text-[13px] sm:text-[18px] pt-[5px] px-[25px] text-[#ffffff] sm:leading-[45px]' style={{textShadow: "0.08838835em 0.08838835em 0em rgba(0, 0, 0, 0.400000)"}}>INTRODUCTION TO PSYCHOLOGY 2023</p>
              <p className='font-berkshireSwash text-center text-[28px] sm:text-[35px] sm:leading-[45px] pt-[20px] px-[25px] text-[#ffefb8]' style={{textShadow: "1.5px 1.5px 0 #807039, -1.5px 1.5px 0 #807039, -1.5px -1.5px 0 #807039, 1.5px -1.5px 0 #807039"}}>Open House Fakultas Psikologi UI</p>
              <p className='font-codecpro text-center pt-[30px] px-[25px] text-[20px] text-[#ffefb8] font-bold' style={{textShadow: "0.7px 0.7px 0 #807039, -0.7px 0.7px 0 #807039, -0.7px -0.7px 0 #807039, 0.7px -0.7px 0 #807039", letterSpacing: "0.12em"}}>MATA ACARA</p>
              <div style={{backgroundColor: "#faf0db", textAlign: "center", width: "max-content", margin: "auto", marginTop: "1px", marginBottom: "45px", borderRadius: "10px", textShadow: "0.04419417em 0.04419417em 0em rgba(165, 190, 215, 1.000000)"}} className='font-poppins p-[10px] px-[18px] text-[#5e86af] textstroke'>
                <p>Sharing Fakultas</p>
                <p>Talk Show</p>
                <p>Tur Fakultas</p>
                <p>Simulasi Kuliah</p>
                <p>Psyquiz</p>
              </div>
              <div className='mt-[40px] font-codecpro px-[25px] flex gap-[30px] justify-between pt-[90px]'>
                <div>
                  <p style={{color: "white"}}>Sponsor</p>
                  <img alt={"Open House Psikologi UI"} src={sponsor}/>
                </div>
                <div>
                  <p style={{color: "white"}} className='text-right'>Media Partner</p>
                  <img alt={"Open House Psikologi UI"} src={medpar}/>
                </div>
              </div>
            </div>
            <div style={{
              background: "transparent",
              backgroundImage: "radial-gradient(circle at 10px 10px, #faf0db 10px, #A2A2A2 0)",
              backgroundSize: "40px 40px",
              backgroundPosition: "-10px 0",
              height: '40px',
              paddingTop: "20px",
              zIndex: "100"
              }}>
            </div>
            <div style={{backgroundColor: "#A2A2A2", borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px", paddingBottom: "20px"}}>
              <div style={{display: 'grid', gridTemplateColumns: "auto auto", justifyContent: "center", paddingTop: "5px"}} className='font-codecpro px-[25px]'>
                <p style={{paddingRight: "15px"}}>Ticket Owner</p>
                <p>: {data[2]}</p>
                <p>Date</p>
                <p>: Saturday, 11 November 2023</p>
                <p>Open Gate</p>
                <p>: {data[1] === "Open House - Offline" ? "08:00 WIB" : "08:40 WIB"}</p>
                <p>Place</p>
                <p>: {data[1] === "Open House - Offline" ? "Fakultas Psikologi UI" : "Zoom Meeting"}</p>
              </div>
              <div className="flex justify-center items-center my-[10px]">
                <Barcode value={data[4]} height="40" displayValue="true" background="transparent"/>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {!data && <PageNotFound />}
    </div>
  )
}

export default ETicket