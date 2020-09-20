import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import 'react-calendar/dist/Calendar.css';
import laptop from '../../assets/workspace.jpg'
import { theme } from '../../styles/theme'
import { P } from '../../components/P/P'
import { Box, Card } from '../../components/Box/Box'
import { Button } from '../../components/Button/Button'
import { Span } from '../../components/Span/Span'
import HowToBox from './home-components/HowToBox'
import StackBox from './home-components/StackBox'
import Contact from './home-components/Contact'

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

const BackgroundPicture = styled(StyledWrapper)`
  justify-content: center;

  background-image: url(${laptop});
  background-size: cover;
  background-position: center;
  height: 800px;
`

const TextWrapper = styled.div`
  border-radius: ${theme.space[4]}px;
  background-color: rgba(117, 117, 117, 0.6);
  padding: 40px;
`

const Content = styled(Box)`
  flex-direction: row;
  margin: 0;

  @media (max-width: 840px) {
    flex-direction: column;
  }
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
      <Content color="transparent" direction="row" mar="0">
        <Box color="transparent" mar="0" pad="0">
          <HowToBox />
          <Contact />
          <Card>
            <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
              Lorem ipsum
            </P>
            <Span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac nunc vel ipsum tempus suscipit.
              Proin consequat felis vitae est efficitur sagittis.
              Nullam eget metus eu felis porttitor ullamcorper.
              Maecenas malesuada lorem justo, vitae condimentum nibh ultricies at.
              Cras posuere tortor lorem, quis elementum dui pharetra sed.
            </Span>
          </Card>
        </Box>
        <Box color="transparent" mar="0" pad="0">
          <StackBox />
          <Card>
            <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
              Lorem ipsum
            </P>
            <Span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac nunc vel ipsum tempus suscipit.
              Proin consequat felis vitae est efficitur sagittis.
              Nullam eget metus eu felis porttitor ullamcorper.
              Maecenas malesuada lorem justo, vitae condimentum nibh ultricies at.
              Cras posuere tortor lorem, quis elementum dui pharetra sed.
            </Span>
            <Box color={theme.colors.white} opacity={0.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ac nunc vel ipsum tempus suscipit.
              Proin consequat felis vitae est efficitur sagittis.
              Nullam eget metus eu felis porttitor ullamcorper.
              Maecenas malesuada lorem justo, vitae condimentum nibh ultricies at.
              Cras posuere tortor lorem, quis elementum dui pharetra sed.
            </Box>
            <Button variant="disabled" disabled>
              <P fontSize={theme.fontSize.big} color={theme.colors.black}>
                Do nothing
              </P>
            </Button>
          </Card>
        </Box>
      </Content>
    </StyledWrapper>
  )
}

export default Home
