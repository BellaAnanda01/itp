import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Div3 = () => {
    const ThirdDiv = styled.div`
        min-height: 100vh;
        min-width: 100vw;
        display: grid;
        // grid-template-columns: 50vw 50vw;
        grid-template-columns: 100vw;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 1000px) {
            display: flex;
            flex-direction: column;
            gap: 100px;
        }
    `

    const ThirdDivDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    `

    const ThirdDivH = styled.div`
        font-family: 'Chewy', cursive;
        font-size: 2vw;
        color: #91b3dc;
        line-height: 1.08638864em;
        text-align: center;
        letter-spacing: 0.02em;
        text-shadow: 0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 1.000000);
        background-color: white;
        border-radius: 30px;
        width: max-content;
        max-width: 350px;
        padding: 30px;
        @media only screen and (max-width: 1000px) {
            font-size: 30px;
        }
    `

    const ThirdDivButton = styled.div`
        width: 20vw;
        padding: 5px 0;
        font-family: 'Sniglet', cursive;
        font-size: 1.5vw;
        border-radius: 30px;
        color: white;
        letter-spacing: 0.055em;
        text-align: center;
        @media only screen and (max-width: 1000px) {
            font-size: 20px;
            width: 35vw;
        }
        @media only screen and (max-width: 600px) {
            font-size: 20px;
            width: 50vw;
        }
    `

  return (
    <div>
        <ThirdDiv>
            <ThirdDivDiv>
                <ThirdDivH style={{color: "#ff7b58", textShadow: "0.04419417em 0.04419417em 0em rgba(0, 0, 0, 1.000000)"}}>Beli tiket Open House ITP di sini!!</ThirdDivH>
                <Link to={`/tickettypes`} style={{textDecoration: "none"}}><ThirdDivButton style={{backgroundColor: "#FF678B"}}>BUY TICKETS</ThirdDivButton></Link>
            </ThirdDivDiv>
             <ThirdDivDiv>
                <ThirdDivH>Yuk, lihat-lihat merch yang kami jual!</ThirdDivH>
                <Link to={`/products`} style={{textDecoration: "none"}}><ThirdDivButton style={{backgroundColor: "#FF678B"}}>SHOP NOW</ThirdDivButton></Link>
            </ThirdDivDiv>
            {/* <ThirdDivDiv>
                <ThirdDivH>Jangan lupa untuk check out merch kami, ya!</ThirdDivH>
                <Link to={`/`} style={{textDecoration: "none"}}><ThirdDivButton disabled style={{backgroundColor: "#fb97ae", cursor: "default"}}>COMING SOON</ThirdDivButton></Link>
            </ThirdDivDiv> */}
        </ThirdDiv>
    </div>
  )
}

export default Div3
