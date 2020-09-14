import React from 'react'
import styled from 'styled-components'
import {FaFacebookSquare} from 'react-icons/fa'
import {IconContext} from 'react-icons'


const Footer = (props) => {

  const Container = styled.div`
    background-color: #212121;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
  `

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4px 20% 4px 20%;
  `


  return (
    <Container>
      <FlexContainer>
        <IconContext.Provider value={{size: '30px'}}>
          <FaFacebookSquare/>
        </IconContext.Provider>
      </FlexContainer>
    </Container>
  )
}

export default Footer
