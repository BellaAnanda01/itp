import React from 'react'
import { styled } from 'styled-components'
import Hero from '../components/Div1'
import background from '../assets/background-top.png'
import Div2 from '../components/Div2'
import Div3 from '../components/Div3'
import Navbar from '../components/Navbar'

const Home = () => {
  const Background = styled.div`
    background-image: url(${background});
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
  `

  return (
    <div style={{overflowX: "hidden", margin: 0, maxWidth: "100vw"}}>
      <div style={{width: "100vw", margin: 0, padding:0}}>
          <Background>
              <Hero/>
              <Div2/>
              <Div3/>
          </Background>
      </div>
    </div>
  )
}

export default Home