import React from 'react'
import { styled } from 'styled-components'
import background from '../assets/background2.png'
import element from '../assets/element.png'
import { Link } from 'react-router-dom'

const TicketTypes = () => {
    const Background = styled.div`
        background-image: url(${background});
        background-attachment: scroll;
        background-size: cover;
        background-position: top center;
        min-height: 100vh;
    `

    const Div = styled.div`
        height: 100vh;
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
        margin-bottom: 100px;
        @media only screen and (max-width: 600px) {
            margin-bottom: 60px;
        }
    `

    const DivH1 = styled.p`
        font-family: 'Chewy', cursive;
        padding-top: 40px;
        text-align: center;
        font-size: 5vw;
        color: white;
        letter-spacing: 0.11em;
        text-shadow: 0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.820000);
        margin: 0;
        @media only screen and (max-width: 600px) {
            font-size: 40px;
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

    const SecondDivTicketsP = styled.p`
        font-family: 'Sniglet', cursive;
        text-align: center;
        margin: 0;
    `


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
                            <SecondDivTicketsH style={{color: "#2f6eed"}}>Sharing S-1</SecondDivTicketsH>
                            <SecondDivTicketsP style={{marginBottom: 0}}>Sabtu, 23 September 2023</SecondDivTicketsP>
                            <SecondDivTicketsP style={{marginTop: 0}}>(Via Zoom Meeting)</SecondDivTicketsP>
                            <SecondDivTicketsP style={{margin: "10px 0 15px"}}>Free</SecondDivTicketsP>
                            <Link to={`/buyticket`} style={{textDecoration: "none"}}><SecondDivTicketsP style={{backgroundColor: "#ff4747", color: "white", padding: "8px", borderRadius: "8px"}}>Get Your Tickets Now!</SecondDivTicketsP></Link>
                        </SecondDivTicketsBackground>
                        <SecondDivTicketsBackground>
                            <SecondDivTicketsH style={{color: "#61ab4b"}}>Open House</SecondDivTicketsH>
                            <SecondDivTicketsP>Sabtu, 11 November 2023</SecondDivTicketsP>
                            <SecondDivTicketsP style={{color: "#ff4747", marginTop: "10px"}}>Available Soon!</SecondDivTicketsP>
                        </SecondDivTicketsBackground>
                    </SecondDivTickets>
                </Div>
            </Background>
        </div>
    )
}

export default TicketTypes
