import React from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../assets/theme';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
@import url('https://fonts.googleapis.com/css?family=Rubik');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Averia+Serif+Libre');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.gray};
    
  }

  *, *::before, *::after {
    box-sizing: border-box;
    
  }
  html{
    scroll-behavior: smooth;
  }
`;

const StyleWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    min-height: 720px;
    background: ${({theme}) => theme.colors.gray};
    position: relative;
    overflow: hidden;
    transition: 250ms all ease-out;
    right: 0px;
  ${({theme}) => theme.media.tablet}{
    height: initial;
    min-height: 100vh;
  }
  ${({theme}) => theme.media.tabletVertical}{
    height: 100vh;
    min-height: 720px;
  }

`;


const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <StyleWrapper id="sectionAbout">
                {children}
            </StyleWrapper>
        </>
    </ThemeProvider>
);

export default Layout;