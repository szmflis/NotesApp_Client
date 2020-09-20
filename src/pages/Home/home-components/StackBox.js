import React from 'react'
import { Box, Card } from '../../../components/Box/Box'
import { P } from '../../../components/P/P'
import { A } from '../../../components/A/A'
import { theme } from '../../../styles/theme'
import { Img } from '../../../components/Img/Img'
import { Span } from '../../../components/Span/Span'
import icons from '../../../utils/icons'

const StackBox = () => {
  return (
    <Card>
      <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
        Stack of this application
      </P>
      <Box direction="row" justify="center">
        <A href="https://reactjs.org/">
          <Img src={icons.reactIcon} alt="React Icon" size="50px" />
        </A>
        <A href="https://nodejs.org/">
          <Img src={icons.nodeIcon} alt="Node.js Icon" size="50px" />
        </A>
        <A href="https://developer.mozilla.org/docs/Web/JavaScript">
          <Img src={icons.jsIcon} alt="Javascript Icon" size="50px" />
        </A>
        <A href="https://developer.mozilla.org/docs/Web/CSS">
          <Img src={icons.cssIcon} alt="CSS3 Icon" size="50px" />
        </A>
        <A href="https://developer.mozilla.org/docs/Web/html">
          <Img src={icons.htmlIcon} alt="HTML5 Icon" size="50px" />
        </A>
      </Box>
      <P fontSize={theme.fontSize.big} borderBottom="1px solid grey">
        Client Side
      </P>
      <Span>
        Frontend is being written in React.js with Redux for state management,
        styled-components for CSS.
      </Span>
      <P fontSize={theme.fontSize.big} borderBottom="1px solid grey">
        Server Side
      </P>
      <Span>
        Server side is NodeJS with express library. MongoDB is being used
        as Database with the help of mongoose library.
        User authentication is done with jsonwebtoken and bcrypt libraries.
        Example requests are within requests folder at my github in this project repo.
      </Span>
    </Card>
  )
}

export default StackBox
