import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from '../styles/theme'
import montLight from '../assets/fonts/mont-light.woff2'
import montRegular from '../assets/fonts/mont-regular.woff2'
import montBold from '../assets/fonts/mont-bold.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${montLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

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
