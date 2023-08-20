import React, {useState, useEffect, useRef} from 'react'
import { FundraiseProducts } from '../data'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const CheckOut = () => {
    const [productQuantities, setProductQuantities] = useState({});
    const [provinsiData, setProvinsiData] = useState([]);
    const [kotaData, setKotaData] = useState([]);
    const [ongkir, setOngkir] = useState([]);
    const [hargaLain, setHargaLain] = useState(0);
    const [sumHarga, setSumHarga] = useState(0);
    const [pengiriman, setPengiriman] = useState(false);
    let [loadingSubmit, setLoadingSubmit] = useState(false);
    const check = useRef(false)
    const navigate = useNavigate();

    useEffect(() => {
      const storedQuantities = localStorage.getItem('productQuantities');
      if (storedQuantities) {
        let productQuant = JSON.parse(storedQuantities)
        const asArray = Object.entries(productQuant);
        const filtered = asArray.filter(([key, value]) => value > 0);
        const justStrings = Object.fromEntries(filtered);
        localStorage.setItem('productQuantities', JSON.stringify(justStrings));
        setProductQuantities(justStrings)
      }
      loadProvinsi()
    }, []);

    const calculateTotalPrice = () => {
        return FundraiseProducts.reduce((total, product) => {
          const quantity = productQuantities[product.code] || 0;
          return total + quantity * product.price;
        }, 0);
    };

    const calculateTotalItem = () => {
        return FundraiseProducts.reduce((total, product) => {
          const quantity = productQuantities[product.code] || 0;
          return total + quantity;
        }, 0);
    };

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
            setOngkir(0)
            document.querySelector(".pilihKota").value = "pilihkota"
        })
        .catch(err => console.error(err));
    }

    function cekOngkir(id) {
        if(id !== "") {
            const asal = 115
            const berat = 1000
            const kurir = "jne"
            fetch(`https://backend-itp.vercel.app/api/ongkos/${asal}/${id}/${berat}/${kurir}`)
            .then(res => res.json())
            .then(data => {
                setOngkir(data.rajaongkir.results[0].costs[0].cost[0].value);
                handleSumHarga()
            })
            .catch(err => console.error(err));
        }
    }

    const totalPrice = calculateTotalPrice();
    const totalItem = calculateTotalItem();

    function bubblewrap(e) {
      check.current = e
      if(check.current === true) {
        setHargaLain(2000)
        handleSumHarga()
      } else if(check.current === false){
        setHargaLain(0)
        handleSumHarga()
      }
    }

    const handleSumHarga = () => {
      if(typeof ongkir !== "object") {
        const total = totalPrice + ongkir + hargaLain;
        setSumHarga(total);
      } else {
        return
      }
    };

    useEffect(() => {
      if(typeof ongkir !== "object") {
        handleSumHarga();
      }
      // eslint-disable-next-line
    }, [totalPrice, ongkir, hargaLain]);

    function handleRadio(e) {
      if(e === "Fakultas Psikologi UI") {
        setOngkir(0);
        setPengiriman(false)
      } else if (e === "Dikirim berdasarkan alamat") {
        setPengiriman(true)
      }
    }

    function formatRupiah(money) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(money);
   }

  function Submit(e) {
    setLoadingSubmit(true)
    localStorage.setItem('totalKeseluruhan', sumHarga)
    const formEle = document.querySelector("form");
    e.preventDefault()
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxEXcCrD3WGJexwZP8fOam0NBOuKOVl7MqIO8R60qL-cfHSh2XLGGdkQYIdeeN0m1ji/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then(() => navigate("/payment"))
      .catch((error) => {
        console.log(error);
    });
  }

    return (
        <div>
          <div className="bg-[url('assets/background5.png')] bg-bottom min-h-screen bg-no-repeat bg-cover bg-scroll">
            <div className='p-[20px]'>
          <Link to={`/products`}><button className='bg-orange-300 px-4 py-2 rounded-lg cursor-pointer'>Kembali ke produk!</button></Link>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
              <p className="font-chewy text-3xl text-center tracking-wide mb-[15px]">Pesanan</p>
              <div className='flex justify-start flex-col mb-3'>
                {/* eslint-disable-next-line */}
                {FundraiseProducts.map((product) => {
                  if(productQuantities[product.code]){
                    return (
                      <div key={product.code} className='flex items-center w-[70vw] max-w-[700px]'>
                        <img className='w-[20vw] my-[10px] max-w-[200px]' src={product.img} alt={product.name}/>
                        <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                          <div>
                            <p className='text-xl'>{product.name}</p>
                            <p className='text-l mb-[5px]'>{formatRupiah(product.price)}</p>
                          </div>
                          <div>
                            Jumlah: <input
                              type='number'
                              name={product.code}
                              value={productQuantities[product.code] || ''}
                              className='bg-transparent'
                              style={{width: "25px", color: "black"}}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
              <div className='flex justify-between font-sniglet w-[70vw] max-w-[700px] mb-3'>
                <div>
                  <p>Extra Bubble Wrap</p>
                  <p>Rp 2.000</p>
                </div>
                <input type='checkbox' name="bubblewrap" onChange={(e) => bubblewrap(e.target.checked)} className='w-[20px]'/>
              </div>
              <div className='mx-[auto] font-sniglet my-2'>
                <p className='mb-1'>Catatan Pemesanan</p>
                <input type='text' name='CatatanPesanan' className='w-[70vw] max-w-[700px] px-1'/>
              </div>
              <hr style={{backgroundColor: 'black', width: '100%', height: "3px"}}/>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium'>
                <p className='font-sniglet mt-1'>Total Item:</p>
                <p className='font-sniglet mt-1'>{totalItem}</p>
                <input type='text' name='TotalItem' style={{display: "none"}} value={totalItem}/>
              </div>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium'>
                <p className='font-sniglet mt-1'>Total Harga Barang:</p>
                <p className='font-sniglet mt-1'>{formatRupiah(totalPrice)}</p>
                <input type='text' name='TotalPrice' style={{display: "none"}} value={totalPrice}/>
              </div>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium'>
                <p className='font-sniglet mt-1'>Biaya Lainnya:</p>
                <p className='font-sniglet mt-1'>{formatRupiah(hargaLain)}</p>
                <input type='text' name='HargaLain' style={{display: "none"}} value={hargaLain}/>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
              <p className="font-chewy text-3xl text-center tracking-wide">Data Diri</p>
              <div className='mx-[auto] font-sniglet my-2'>
                <p className='mb-1'>Nama Lengkap</p>
                <input type='text' name='Name' className='w-[70vw] max-w-[700px] px-1' onChange={(e) => localStorage.setItem('Name', e.target.value)} required/>
              </div>
              <div className='mx-[auto] font-sniglet my-2'>
                <p className='mb-1'>No. Telepon Aktif</p>
                <input type='text' name='NoTelepon' className='w-[70vw] max-w-[700px] px-1' required/>
              </div>
              <div className='mx-[auto] font-sniglet my-2'>
                <p className='mb-1'>Email</p>
                <input type='text' name='Email' className='w-[70vw] max-w-[700px] px-1' onChange={(e) => localStorage.setItem('Email', e.target.value)} required/>
              </div>
              <div className='mx-[auto] font-sniglet my-2'>
                <p className='mb-1'>ID LINE</p>
                <input type='text' name='IDLINE' className='w-[70vw] max-w-[700px] px-1' required/>
              </div>
              <div className='mx-[auto] font-sniglet my-2 w-[70vw] max-w-[700px]'>
                <p className='mb-1'>Pengambilan Barang</p>
                <div className='flex'><input type='radio' name='PengambilanBarang' className='w-[15px] mr-[5px]' value="Fakultas Psikologi UI" onChange={(e) => handleRadio(e.target.value)} required/>Fakultas Psikologi UI</div>
                <div className='flex'><input type='radio' name='PengambilanBarang' className='w-[15px] mr-[5px]' value="Dikirim berdasarkan alamat" onChange={(e) => handleRadio(e.target.value)} required/>Dikirim berdasarkan alamat</div>
              </div>
            </div>
            <div className='detailAlamat' style={{display: pengiriman ? "block" : "none"}}>
              <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
                <p className="font-chewy text-3xl text-center tracking-wide">Alamat Pengiriman</p>
                <div className='mx-[auto] font-sniglet my-2'>
                  <p className='mb-1'>Provinsi</p>
                  <select onChange={(e) => loadKota(e.target.value)} name="Provinsi" className='w-[70vw] max-w-[700px]'>
                    <option value="" selected disabled>Pilih Provinsi</option>
                    {provinsiData.map((provinsi) => (
                        <option key={provinsi.province_id} value={provinsi.province_id}>{provinsi.province}</option>
                    ))}
                  </select>
                </div>
                <div className='mx-[auto] font-sniglet my-2'>
                  <p className='mb-1'>Wilayah</p>
                  <select className='pilihKota w-[70vw] max-w-[700px]' name='Wilayah' onChange={(e) => cekOngkir(e.target.value)}>
                    <option value="pilihkota" selected disabled>Pilih Wilayah</option>
                    {kotaData.map((kota) => (
                        <option key={kota.city_id} value={kota.city_id}>{kota.city_name}</option>
                    ))}
                  </select>
                </div>
                <div className='mx-[auto] font-sniglet my-2'>
                  <p className='mb-1'>Alamat Lengkap</p>
                  <input type='text' name='AlamatLengkap' className='w-[70vw] max-w-[700px] px-1'/>
                </div>
                <div className='mx-[auto] font-sniglet my-2'>
                  <p className='mb-1'>Kode Pos</p>
                  <input type='text' name='KodePos' className='w-[70vw] max-w-[700px] px-1'/>
                </div>
                <hr style={{backgroundColor: 'black', width: '100%', height: "3px"}} className='mt-2'/>
                <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium mb-2'>
                  <p className='font-sniglet mt-1'>Biaya Pengiriman:</p>
                  <p className='font-sniglet mt-1'>{formatRupiah(ongkir)}</p>
                  <input type='text' name='Ongkir' style={{display: "none"}} value={ongkir}/>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-[80vw] max-w-[800px] bg-[#E9E3D7] p-[20px] mx-[auto] my-[30px] rounded-xl font-[Sniglet, cursive]'>
              <p className="font-chewy text-3xl text-center tracking-wide mb-[15px]">Total Harga</p>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium'>
                <p className='font-sniglet mt-1'>Total Item:</p>
                <p className='font-sniglet mt-1'>{totalItem}</p>
              </div>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium'>
                <p className='font-sniglet mt-1'>Total Harga Barang:</p>
                <p className='font-sniglet mt-1'>{formatRupiah(totalPrice)}</p>
              </div>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium'>
                <p className='font-sniglet mt-1'>Biaya Lainnya:</p>
                <p className='font-sniglet mt-1'>{formatRupiah(hargaLain)}</p>
              </div>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium mb-2'>
                <p className='font-sniglet mt-1'>Biaya Pengiriman:</p>
                <p className='font-sniglet mt-1'>{formatRupiah(ongkir)}</p>
              </div>
              <hr style={{backgroundColor: 'black', width: '100%', height: "3px"}}/>
              <div className='grid grid-cols-[150px_200px] w-[70vw] max-w-[700px] mt-1 mx-0 font-medium mb-2'>
                <p className='font-sniglet mt-1'>Total Keseluruhan:</p>
                <p className='font-sniglet mt-1'>{formatRupiah(sumHarga)}</p>
                <input type='number' style={{display: "none"}} name='TotalKeseluruhan' value={sumHarga}/>
              </div>
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
          </div>
        </div>
    );
}

export default CheckOut