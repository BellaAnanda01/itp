import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
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
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {data && <div>
          <div>
            Tipe Tiket: {data[1]}
          </div>
          <div>
            Nama Lengkap: {data[2]}
          </div>
          <div>
            Pilihan Kelas: {data[3]}
          </div>
          <div>
            Barcode: {data[4]}
          </div>
        </div>}
      {!data && <PageNotFound />}
      <Barcode value={data[4]}/>
    </div>
  )
}

export default ETicket