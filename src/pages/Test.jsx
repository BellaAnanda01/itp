import React, { useEffect, useState } from 'react'

const Test = () => {
    const [provinsiData, setProvinsiData] = useState([]);
    const [kotaData, setKotaData] = useState([]);
    const [ongkir, setOngkir] = useState([]);

    function loadProvinsi() {
        fetch('https://backend-itp.vercel.app/api/provinsi')
        .then(res => res.json())
        .then(data => {
            setProvinsiData(data.rajaongkir.results);
        })
        .catch(err => console.error(err));
    }

    function loadKota(id) {
        fetch(`https://backend-itp.vercel.app/api/kota/${id}`)
        .then(res => res.json())
        .then(data => {
            setKotaData(data.rajaongkir.results);
        })
        .catch(err => console.error(err));
    }

    function cekOngkir(id) {
        console.log(id)
        if(id !== "") {
            const asal = 115
            const berat = 1000
            const kurir = "jne"
            fetch(`https://backend-itp.vercel.app/api/ongkos/${asal}/${id}/${berat}/${kurir}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.rajaongkir)
                setOngkir(data.rajaongkir.results[0].costs[0].cost[0].value);
            })
            .catch(err => console.error(err));
        }
    }

    useEffect(() => {
        loadProvinsi()
    }, [])

    return (
        <div>
            <p>Provinsi</p>
            <select onChange={(e) => loadKota(e.target.value)}>
                <option value="" selected disabled>Pilih Provinsi</option>
                {provinsiData.map((provinsi) => (
                    <option key={provinsi.province_id} value={provinsi.province_id}>{provinsi.province}</option>
                ))}
            </select>
            <p>Kota</p>
            <select onChange={(e) => cekOngkir(e.target.value)}>
                <option value="" selected disabled>Pilih Kota</option>
                {kotaData.map((kota) => (
                    <option key={kota.city_id} value={kota.city_id}>{kota.city_name}</option>
                ))}
            </select>
            <p>Harga ongkir: {ongkir}</p>
        </div>
    )
}

export default Test