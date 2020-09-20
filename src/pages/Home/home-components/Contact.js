import React from 'react'
import { Box, Card } from '../../../components/Box/Box'
import { P } from '../../../components/P/P'
import { A } from '../../../components/A/A'
import { Img } from '../../../components/Img/Img'
import { theme } from '../../../styles/theme'
import icons from '../../../utils/icons'

const Contact = () => {
  return (
    <Card>
      <P fontSize={theme.fontSize.bigger} borderBottom="1px solid grey" padding="2px" margin="0px 0px 7px 0px">
        Contact
      </P>
      <P>
        Happy to talk about any work, projects or web in general.
      </P>
      <Box direction="row" justify="center">
        <A href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=szmflis@gmail.com">
          <Img src={icons.gmailIcon} alt="Gmail icon" size="50px" />
        </A>
        <A href="https://www.linkedin.com/in/szymon-flis-a72680195/">
          <Img src={icons.linkedInIcon} alt="LinkedIn icon" size="50px" />
        </A>
        <A href="https://github.com/szmflis">
          <Img src={icons.gitIcon} alt="Github icon" size="50px" />
        </A>
      </Box>
    </Card>
  )
}

export default Contact
