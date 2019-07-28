import styled from 'styled-components';




 const Button = styled.button`
    cursor: pointer;
    position: relative;
    background-color: ${({theme}) => theme.colors.gray};
    border: 2px solid ${({theme}) => theme.colors.white};
    width: 300px;
    height: 50px;
    font-family: 'Rubik', sans-serif;
    font-size: 1.3rem;
    color: ${({theme}) => theme.colors.white};
    transition: font-size 200ms ease-in, background-color 200ms ease-in, letter-spacing 200ms ease-in;
    letter-spacing: normal;
    :hover{
        background-color: ${({theme}) => theme.colors.red};
        font-size: 1.4rem;
        transition: all 200ms ease-in;
        letter-spacing: 1px;
        color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.red};
    }
  
    ${({theme}) => theme.media.tablet} {
        
    }
    ${({theme}) => theme.media.tabletLandscape} {
    
    }
    ${({theme}) => theme.media.desktop} {
    
    }
    ${({theme}) => theme.media.bigDesktop} {
    
    }
  `

  
  export default Button;

