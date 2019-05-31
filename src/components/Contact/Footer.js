import styled from 'styled-components';


const Footer = styled.p`
  text-align: center;
  font-family: "Rubik";
  font-size: .7rem;
  color: ${({theme}) => theme.colors.white};
 
    
    ${({theme}) => theme.media.tablet} {
        font-size: .9rem;
    }

    ${({theme}) => theme.media.laptop} {
        position: absolute;
        top: unset;
        
        bottom: 8vh;
        left: 12vw;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.1vw;
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default Footer;