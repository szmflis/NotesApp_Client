import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${theme.fontSizeBase};
  }

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: ${theme.fonts.montserrat};
    background: ${theme.colors.white};
    font-size: ${theme.fontSizeBaseRem};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.fontColorBase};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>
      {children}
    </StyledWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
