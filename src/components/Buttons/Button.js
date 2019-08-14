import styled from 'styled-components';




 const Button = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: -23px;
    background-color: ${({theme}) => theme.colors.gray};
    border: none;
    width: ${ props => props.width || "200px"};
    height: ${ props => props.height || "60px"};
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.red};
    transition: font-size 200ms ease-in, background-color 200ms ease-in, letter-spacing 200ms ease-in;
    letter-spacing: normal;
    :hover{
        background-color: ${({theme}) => theme.colors.red};
        font-size: 1.1rem;
        transition: all 200ms ease-in;
        letter-spacing: 1px;
        color: ${({theme}) => theme.colors.white};
       
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

