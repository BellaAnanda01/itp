import React from 'react'
import { styled } from 'styled-components'
import logo from '../assets/Logo ITP.png'
import img1 from '../assets/Ito (1).png'
import img2 from '../assets/Ita (1).png'

const Hero = () => {
    const FirstDiv = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        @media only screen and (max-width: 600px) {
            /* For everything bigger than 768px */
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
    `

    const LeftFirstDiv = styled.div`
        width: 45vw;
        @media only screen and (max-width: 600px) {
            /* For everything bigger than 768px */
            width: 90vw;
        }
    `

    const LeftFirstDivDiv = styled.div`
        opacity: 1.0;
        display: flex;
        width: 40vw;
        padding: 5vw;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        @media only screen and (max-width: 600px) {
            /* For everything bigger than 768px */
            width: 85vw;
        }
    `

    const LeftFirstDivP1 = styled.p`
        font-family: 'Sniglet', cursive;
        font-size: 7.6vw;
        text-shadow: 0.05237211em 0.00366221em 0.0075em rgba(41, 38, 35, 0.820000);
        display: flex;
        margin-block-start: 0px;
        margin-block-end: 0px;
        @media only screen and (max-width: 600px) {
            width: 85vw;
            font-size: 60px;
        }
    `

    const LeftFirstDivP2 = styled.p`
        font-family: 'Chewy', cursive;
        font-size: 22px;
        text-shadow: 0.04419417em 0.04419417em 0em rgba(0, 0, 0, 0.780000);
        display: flex;
        gap: 10px;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-top: 5px;
        letter-spacing: 0.11em;
        flex-wrap: wrap;
    `

    const LeftFirstDivP3 = styled.p`
        font-family: 'Sniglet', cursive;
        font-size: 18px;
        text-shadow: 0em 0.05452766em 0.3380715em rgba(0, 0, 0, 0.490000);
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-top: 5px;
        color: white;
        text-align: justify;
        letter-spacing: 0.055em;
        line-height: 1.38462071em;
    `

    const RightFirstDiv = styled.img`
        width: 32vw;
        height: 32vw;
        @media only screen and (max-width: 600px) {
            width: 70vw;
            height: 70vw;
        }
    `

    const LeftImg = styled.img`
        position: absolute;
        width: 25vw;
        top: calc(100vh - 150px);
        left: -90px;
        transform: rotate(36.44758613deg);
        @media only screen and (max-width: 640px) {
            /* For everything bigger than 768px */
            display: none;
        }
    `

    const RightImg = styled.img`
        position: relative;
        width: 25vw;
        top: -210px;
        left: 80vw;
        transform: rotate(-36.44758613deg);
        @media only screen and (max-width: 640px) {
            /* For everything bigger than 768px */
            display: none;
        }
    `

    const P = styled.p`
        margin: 0;
    `

    return (
        <div>
            <FirstDiv>
            <LeftFirstDiv>
              <LeftFirstDivDiv>
                <LeftFirstDivP1>
                  <P style={{color:'#ff7b58'}}>I</P>
                  <P style={{color:'#98d672'}}>T</P>
                  <P style={{color:'#a6ddfa'}}>P</P>
                  <P style={{width:'7.6vw'}}> </P>
                  <P style={{color:'#f6cd46'}}>2023</P>
                </LeftFirstDivP1>
                <LeftFirstDivP2>
                  <P style={{color: '#ff7b58'}}>Introduction</P>
                  <P style={{color: '#a6ddfa'}}>to</P>
                  <P style={{color: '#98d672'}}>Psychology</P>
                </LeftFirstDivP2>
                <LeftFirstDivP3>
                ITP merupakan program kerja Biro Hubungan Masyarakat BEM Fakultas Psikologi UI yang bertujuan untuk mengenalkan ilmu Psikologi dan Fakultas Psikologi UI ke siswa-siswi SMA/sederajat. 
                </LeftFirstDivP3>
              </LeftFirstDivDiv>
            </LeftFirstDiv>
            <RightFirstDiv src={logo}/>
          </FirstDiv>
          <LeftImg src={img1}/>
          <RightImg src={img2}/>
        </div>
    )
}

export default Hero