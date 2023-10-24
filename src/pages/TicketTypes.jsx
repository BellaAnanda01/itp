import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import background from '../assets/background2.png'
import element from '../assets/element.png'
import { useNavigate } from 'react-router-dom'

const TicketTypes = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Background = styled.div`
        background-image: url(${background});
        background-attachment: scroll;
        background-size: cover;
        background-position: top center;
        min-height: 100vh;
    `

    const Div = styled.div`
        min-height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `

    const DivTitle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: max-content;
        margin-bottom: 70px;
        @media only screen and (max-width: 600px) {
            margin-bottom: 30px;
        }
    `

    const DivH1 = styled.p`
        font-family: 'Chewy', cursive;
        /* padding-top: 40px; */
        text-align: center;
        font-size: 5vw;
        color: white;
        letter-spacing: 0.11em;
        text-shadow: 0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.820000);
        margin: 0;
        @media only screen and (max-width: 600px) {
            font-size: 40px;
            padding-top: 40px;
        }
    `
    const DivH1el = styled.img`
        width: 20vw;
        text-align: center;
        margin-top: -10px;
    `

    const SecondDivTickets = styled.div`
        display: flex;
        padding: 0 20px;
        gap: 30px;
        margin-bottom: 50px;
        justify-content: center;
        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }
    `

    const SecondDivTicketsBackground = styled.div`
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 300px;
        padding: 50px 0;
        background-color: #FFF3D7;
        border-radius: 30px;
        @media only screen and (max-width: 600px) {
            width: 70vw;
        }
    `

    const SecondDivTicketsH = styled.p`
        font-family: 'Sniglet', cursive;
        text-align: center;
        margin: 0;
        margin-bottom: 10px;
        font-size: 28px;
        text-shadow: 0.04419417em 0.04419417em 0em rgba(0, 0, 0, 0.500000);
    `

    const SecondDivTicketsP = styled.button`
        font-family: 'Sniglet', cursive;
        text-align: center;
        margin: 0;
    `

    const navigate = useNavigate()

    function buttonValue(e, value) {
        e.preventDefault();
        localStorage.setItem('tipetiket', value);
        navigate("/buyticket");
    }

    return (
        <div>
            <Background>
                <Div>
                    <DivTitle>
                        <DivH1>JENIS TIKET</DivH1>
                        <DivH1el src={element}/>
                    </DivTitle>
                    <SecondDivTickets>
                        <SecondDivTicketsBackground>
                            <SecondDivTicketsH style={{color: "#2f6eed"}}>Open House</SecondDivTicketsH>
                            <SecondDivTicketsP style={{marginBottom: 0}}>Sabtu, 11 November 2023</SecondDivTicketsP>
                            <b><SecondDivTicketsP style={{marginTop: 0}}>at Fakultas Psikologi UI</SecondDivTicketsP></b>
                            <SecondDivTicketsP style={{margin: "10px 0 0"}}>Normal Price:</SecondDivTicketsP>
                            <SecondDivTicketsP style={{margin: "0 0 15px"}}>Rp55.000</SecondDivTicketsP>
                            <button onClick={(e) => buttonValue(e, 'Offline')} style={{fontFamily: "'Sniglet', cursive", textAlign: "center", margin: 0, backgroundColor: "#ff9494", color: "white", padding: "8px", borderRadius: "8px"}} disabled>SOLD OUT</button>
                        </SecondDivTicketsBackground>
                        <SecondDivTicketsBackground>
                            <SecondDivTicketsH style={{color: "#2f6eed"}}>Open House</SecondDivTicketsH>
                            <SecondDivTicketsP style={{marginBottom: 0}}>Sabtu, 11 November 2023</SecondDivTicketsP>
                            <b><SecondDivTicketsP style={{marginTop: 0}}>via Zoom Meeting</SecondDivTicketsP></b>
                            <SecondDivTicketsP style={{margin: "10px 0 0"}}>Normal Price:</SecondDivTicketsP>
                            <SecondDivTicketsP style={{margin: "0 0 15px"}}>Rp37.000</SecondDivTicketsP>
                            <button onClick={(e) => buttonValue(e, 'Online')} style={{fontFamily: "'Sniglet', cursive", textAlign: "center", margin: 0, backgroundColor: "#ff4747", color: "white", padding: "8px", borderRadius: "8px"}}>Get Your Tickets Now!</button>
                        </SecondDivTicketsBackground>
                    </SecondDivTickets>
                </Div>
            </Background>
        </div>
    )
}

export default TicketTypes
