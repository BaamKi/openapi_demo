import React from 'react'
import styled from 'styled-components'
import PangImage from '../assets/calendar.png'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <Wrapper>
    <div>Home</div>
    <Contents>
      <img src={PangImage} width={350} height={350}  className='rounded-circle'/>
      <Desc>cqwedjkqldjkwqljdklq</Desc>
      <Button>Button</Button>
      </Contents>
    </Wrapper>
    
    
  )
}

export default Home;


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SimKyungha";
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "SimKyungha";
`

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "SimKyungha";
`