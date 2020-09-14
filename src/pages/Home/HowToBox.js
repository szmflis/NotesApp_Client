import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '../../components/Box/Box'
import { P } from '../../components/P/P'
import { Button } from '../../components/Button/Button'
import { theme } from '../../styles/theme'

const HowToBox = () => {
  return (
    <Box width="50rem" justify="center" align="center">
      <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
        How to use
      </P>
      <P>Press either navbar button, or the one below.</P>
      <P>Notes made while not being logged in won't be saved.</P>
      <P>Either register and login or use account</P>
      <Box color={theme.colors.white} opacity={0.5}>
        <P>Username : testuser</P>
        <P>Password : qweqweqwe</P>
      </Box>
      <Button as={Link} to="/notes" type="button" variant="primary">
        <P fontSize={theme.fontSize.big} color={theme.colors.white}>
          Start Noting
        </P>
      </Button>
    </Box>
  )
}

export default HowToBox
