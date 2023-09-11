import React from 'react'
import { styled } from 'styled-components'
import element1 from '../assets/element.png'
import fotoRoadshow from '../assets/Roadshow.png'
import fotoSharingS1 from '../assets/Sharing S-1.png'
import fotoOpenHouse from '../assets/Open House.png'

const Div2 = () => {
    const SecondDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
    `

    const SecondDivH1 = styled.p`
        font-family: 'Sniglet', cursive;
        padding-top: 40px;
        text-align: center;
        font-size: 5vw;
        color: white;
        letter-spacing: 0.02em;
        text-shadow: 0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.820000);
        margin: 0;
        @media only screen and (max-width: 600px) {
            font-size: 40px;
        }
    `
    const SecondDivH1el = styled.img`
        width: 20vw;
        text-align: center;
        margin-top: -10px;
    `

    const SecondDivEvents = styled.div`
        display: flex;
        padding: 0 20px;
        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }
    `

    const SecondDivEventsImg = styled.img`
        padding: 40px 0 25px;
        width: 15vw;
        margin: auto;
        display: flex;
        @media only screen and (max-width: 600px) {
            width: 40vw;
        }
    `

    const SecondDivEventsH = styled.p`
        font-family: 'Chewy', cursive;
        text-align: center;
        font-size: 20px;
        margin: 0;
        letter-spacing: 0.1em;
        text-shadow: 0.04419417em 0.04419417em 0em rgba(0, 0, 0, 1.000000);
        line-height: 0.88634651em;
        text-transform: uppercase;
        @media only screen and (max-width: 600px) {
            font-size: 25px;
        }
    `

    const SecondDivEventsP = styled.p`
        font-family: 'Sniglet', cursive;
        text-align: justify;
        font-size: 16px;
        margin: 0;
        padding: 15px 30px;
        max-width: 300px;
        @media only screen and (max-width: 600px) {
            font-size: 17px;
        }
    `


    return (
        <div className='mt-0 sm:mt-[-250px]'>
            <SecondDiv>
                <SecondDivH1>OUR EVENTS</SecondDivH1>
                <SecondDivH1el src={element1}/>
                <SecondDivEvents>
                    <div>
                    </div>
                    <div>
                        <SecondDivEventsImg src={fotoRoadshow}/>
                        <SecondDivEventsH style={{color: "#ff7b58"}}>Roadshow</SecondDivEventsH>
                        <SecondDivEventsP>Pada kegiatan ini, ITP akan menjelaskan Ilmu Psikologi, Fasilitas yang dimiliki Fakultas Psikologi UI, dan hal-hal apa saja yang dipelajari  di Fakultas Psikologi UI lho!</SecondDivEventsP>
                    </div>
                    <div>
                    <SecondDivEventsImg src={fotoSharingS1}/>
                        <SecondDivEventsH style={{color: "#f6cd46"}}>Sharing S-1</SecondDivEventsH>
                        <SecondDivEventsP>Dalam kegiatan ini, ITP akan bincang-bincang asik seputar kehidupan menjadi mahasiswa di Fakultas Psikologi UI nih! Acara ini akan diselenggarakan secara online melalui Zoom Meeting. Kedengarannya seru banget, ngga, sih?</SecondDivEventsP>
                    </div>
                    <div>
                        <SecondDivEventsImg src={fotoOpenHouse}/>
                        <SecondDivEventsH style={{color: "#97ef62"}}>Open House</SecondDivEventsH>
                        <SecondDivEventsP>Beberapa mata acara dari Open House adalah Sharing Fakultas, Talk Show, Tur Fakultas, Simulasi Kuliah, dan PsyQuiz. Acara akan sekaligus dilaksanakan secara offline dan online, lho! Kapan lagi, kan, bisa ketemu calon mahasiswa baru secara langsung? Belum lagi, bisa ketemu bintang tamu Talk Show-nya juga, lho!</SecondDivEventsP>
                    </div>
                    <div></div>
                </SecondDivEvents>
            </SecondDiv>
        </div>
    )
}

export default Div2