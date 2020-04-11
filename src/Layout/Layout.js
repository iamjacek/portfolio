import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
@import url('https://fonts.googleapis.com/css?family=Rubik');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre');
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.gray};
    min-height: 100vh;
    height: 100%;
    min-height: -webkit-fill-available;
    ::-webkit-scrollbar {
      width: 10px;
      height: 15px;
      }
      ::-webkit-scrollbar-track-piece  {
      background-color: #F0EBE7;
      }
      ::-webkit-scrollbar-thumb:vertical {
      height: 30px;
      background-color: 	#2e2c2c;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    
  }

  html{
    
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
  
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`

const StyleWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    to left,
    black -150%,
    ${({ theme }) => theme.colors.gray} 150%
  );
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyleWrapper>{children}</StyleWrapper>
    </>
  </ThemeProvider>
)

export default Layout
