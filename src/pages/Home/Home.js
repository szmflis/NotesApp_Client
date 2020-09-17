import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import 'react-calendar/dist/Calendar.css';
import laptop from '../../assets/workspace.jpg'
import { theme } from '../../styles/theme'
import { P } from '../../components/P/P'
import { Box } from '../../components/Box/Box'
import { Button } from '../../components/Button/Button'
import { Span } from '../../components/Span/Span'
import HowToBox from './HowToBox'
import StackBox from './StackBox'
import Contact from './Contact'

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackgroundPicture = styled.div`
  background-image: url(${laptop});
  height: 500px;
  width: 100vw;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextWrapper = styled.div`
  border-radius: ${theme.space[4]}px;
  background-color: rgba(117, 117, 117, 0.6);
  padding: 40px;
`

const Home = () => {
  return (
    <StyledWrapper
      initial="out"
      animate="in"
      exit="out"
      variants={theme.framerVar.fadeInOut}
      transition={theme.framerTrans.fastTrans}
    >
      <BackgroundPicture>
        <TextWrapper>
          <P fontSize="3rem" color={theme.colors.white}>
            Simple note taking application
          </P>
          <P fontSize="2.5rem" color={theme.colors.white}>
            Made with React & Node
          </P>
          <P fontSize="2rem" color={theme.colors.white}>
            MongoDB as database
          </P>
        </TextWrapper>
      </BackgroundPicture>
      <Box width="auto" color={theme.colors.white} direction="row" margin="0">
        <Box width="auto" color={theme.colors.white} margin="0" padding="0">
          <HowToBox />
          <Contact />
          <Box width="50rem" justify="center" align="center" textAlign="center">
            <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
              Lorem ipsum
            </P>
            <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nunc vel ipsum tempus suscipit. Proin consequat felis vitae est efficitur sagittis. Nullam eget metus eu felis porttitor ullamcorper. Maecenas malesuada lorem justo, vitae condimentum nibh ultricies at. Cras posuere tortor lorem, quis elementum dui pharetra sed.</Span>
          </Box>
        </Box>
        <Box width="auto" color={theme.colors.white} margin="0" padding="0">
          <StackBox />
          <Box width="50rem" justify="center" align="center" textAlign="center">
            <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
              Lorem ipsum
            </P>
            <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nunc vel ipsum tempus suscipit. Proin consequat felis vitae est efficitur sagittis. Nullam eget metus eu felis porttitor ullamcorper. Maecenas malesuada lorem justo, vitae condimentum nibh ultricies at. Cras posuere tortor lorem, quis elementum dui pharetra sed.</Span>
            <Box color={theme.colors.white} opacity={0.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nunc vel ipsum tempus suscipit. Proin consequat felis vitae est efficitur sagittis. Nullam eget metus eu felis porttitor ullamcorper. Maecenas malesuada lorem justo, vitae condimentum nibh ultricies at. Cras posuere tortor lorem, quis elementum dui pharetra sed.
            </Box>
            <Button variant="disabled" disabled>
              <P fontSize={theme.fontSize.big} color={theme.colors.black}>
                Do nothing
              </P>
            </Button>
          </Box>
        </Box>
      </Box>

    </StyledWrapper>
  )
}

export default Home
