import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/background2.png'
import element from '../assets/element.png'
import element2 from '../assets/element2.png'

const SelectClass = () => {
    const [pilihanKelas, setPilihanKelas] = useState({
        kelas: [],
        response: [],
    })
    const form = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        let ticketData = JSON.parse(localStorage.getItem('ticketsDataB'))
        if(ticketData === null) {
            navigate('/tickettypes')
        } else {
            let getKelasPilihan = JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan
            if (getKelasPilihan === undefined) {
                setPilihanKelas({
                    kelas: [],
                    response: [],
                });
            } else {
                setPilihanKelas({
                    kelas: getKelasPilihan,
                    response: getKelasPilihan,
                });
            }
        }
        window.scrollTo(0, 0)
      // eslint-disable-next-line
    }, []);

    function Submit(e) {
        e.preventDefault();
        let ticketsData = JSON.parse(localStorage.getItem("ticketsDataB"));
        let ticketsDataB = {...ticketsData, KelasPilihan: pilihanKelas.response}
        localStorage.setItem("ticketsDataB", JSON.stringify(ticketsDataB));
        navigate('/ticketpayment')
    }

    const back = (e) => {
        e.preventDefault();
        let ticketsData = JSON.parse(localStorage.getItem("ticketsDataB"));
        let ticketsDataB = {...ticketsData, KelasPilihan: pilihanKelas.response}
        localStorage.setItem("ticketsDataB", JSON.stringify(ticketsDataB));
        navigate('/buyticket')
    }

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { kelas } = pilihanKelas;
        
        console.log(`${value} is ${checked}`);
        
        if (pilihanKelas.kelas.filter((i) => i).length >= 3 && e.target.checked) {
            alert("Anda sudah memilih 3 kelas");
            e.target.checked = false
            return;
        } else if (checked) {
            setPilihanKelas({
                kelas: [...kelas, value],
                response: [...kelas, value],
            });
        }else {
            setPilihanKelas({
                kelas: kelas.filter((e) => e !== value),
                response: kelas.filter((e) => e !== value),
            });
        }
    }

    return (
        <div>
            <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "scroll", backgroundSize: 'cover', backgroundPosition: "top center", minHeight: "100vh"}}>
                <div style={{minHeight: "calc(100vh - 64px)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "max-content"}}>
                    <p className="font-chewy pt-[40px] text-center text-[40px] sm:text-[5vw] text-white tracking-[0.11em] drop-shadow-[0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.82)] m-0" >PENDAFTARAN</p>
                    <img style={{
                    width: '20vw',
                    textAlign: 'center',
                    marginTop: '-10px',
                    }} src={element} alt='Tiket Open House Psikologi UI'/>
                </div>
                <form ref={form} className="form" onSubmit={(e) => Submit(e)}>
                <div className='flex items-center content-center sm:gap-[5vw] sm:flex-row gap-0 flex-col'>
                    <div>
                    {/* Jenis Tiket */}
                    <div style={{margin: "20px 0"}}>
                        <div style={{display: "flex", alignItems: "center", marginBottom: "8px"}}>
                        <img style={{height: "30px"}} src={element2} alt='Tiket Open House Psikologi UI'/>
                        <p style={{
                            fontSize: '20px',
                            color: 'white',
                            lineHeight: '1.1em',
                            letterSpacing: '0.03em',
                            textShadow: '0.04419417em 0.04419417em 0.0075em rgba(0, 0, 0, 1.000000)',
                            margin: '0',
                            fontFamily: 'Sniglet, cursive',
                            marginLeft: '5px',
                        }}>Pilihan Kelas:<br/><span style={{lineHeight: '0',fontSize: "14px", margin: "0"}}>Pilihlah maksimal 3 kelas</span></p>
                        </div>
                        <div style={{
                            backgroundColor: '#fff3d7',
                            borderRadius: '15px',
                            color: 'black',
                            fontFamily: 'Sniglet, cursive',
                            border: 'none',
                            height: 'max-content',
                            fontSize: '16px',
                            padding: '10px'
                        }} className="w-[70vw] sm:w-[30vw] sm:max-w-[300px]">
                            <div>
                                <label
                                    className="form-check-label"
                                    htmlFor="klinis"
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="kelas"
                                        value="Klinis"
                                        id="klinis"
                                        onChange={handleChange}
                                        style={{marginRight: "5px"}}
                                        defaultChecked={JSON.parse(localStorage.getItem("ticketsDataB")) === null ? false : JSON.parse(localStorage.getItem("ticketsDataB")).KelasPilihan === undefined ? false : JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan.includes("Klinis") ? true : false}
                                        />
                                    Psikologi Klinis
                                </label>
                            </div>
                            <div>
                                <label
                                    className="form-check-label"
                                    htmlFor="pendidikan"
                                    >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="kelas"
                                        value="Pendidikan"
                                        id="pendidikan"
                                        onChange={handleChange}
                                        style={{marginRight: "5px"}}
                                        defaultChecked={JSON.parse(localStorage.getItem("ticketsDataB")) === null ? false : JSON.parse(localStorage.getItem("ticketsDataB")).KelasPilihan === undefined ? false : JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan.includes("Pendidikan") ? true : false}
                                        />
                                Psikologi Pendidikan
                                </label>
                            </div>
                            <div>
                                <label
                                    className="form-check-label"
                                    htmlFor="perkembangan"
                                >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="kelas"
                                        value="Perkembangan"
                                        id="perkembangan"
                                        onChange={handleChange}
                                        style={{marginRight: "5px"}}
                                        defaultChecked={JSON.parse(localStorage.getItem("ticketsDataB")) === null ? false : JSON.parse(localStorage.getItem("ticketsDataB")).KelasPilihan === undefined ? false : JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan.includes("Perkembangan") ? true : false}
                                        />
                                    Psikologi Perkembangan
                                </label>
                            </div>
                            <div>
                                <label
                                    className="form-check-label"
                                    htmlFor="pio"
                                    >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="kelas"
                                        value="IndustridanOrganisasi"
                                        id="pio"
                                        onChange={handleChange}
                                        style={{marginRight: "5px"}}
                                        defaultChecked={JSON.parse(localStorage.getItem("ticketsDataB")) === null ? false : JSON.parse(localStorage.getItem("ticketsDataB")).KelasPilihan === undefined ? false : JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan.includes("IndustridanOrganisasi") ? true : false}
                                        />
                                    Psikologi Industri dan Organisasi
                                </label>
                            </div>
                            <div>
                                <label
                                    className="form-check-label"
                                    htmlFor="sosial"
                                    >
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="kelas"
                                        value="Sosial"
                                        id="sosial"
                                        onChange={handleChange}
                                        style={{marginRight: "5px"}}
                                        defaultChecked={JSON.parse(localStorage.getItem("ticketsDataB")) === null ? false : JSON.parse(localStorage.getItem("ticketsDataB")).KelasPilihan === undefined ? false : JSON.parse(localStorage.getItem('ticketsDataB')).KelasPilihan.includes("Sosial") ? true : false}
                                    />
                                    Psikologi Sosial
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "10px"}}>
                    <button style={{
                    backgroundColor: '#df7273',
                    marginTop: '25px',
                    padding: '5px 20px',
                    border: 'none',
                    borderRadius: '30px',
                    fontFamily: 'Sniglet, cursive',
                    fontSize: '16px',
                    color: 'white',
                    cursor: 'pointer',
                    }} onClick={(e) => back(e)}>Back</button>
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
                    }} type='submit' value='Next'/>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default SelectClass