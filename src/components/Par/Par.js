import styled from 'styled-components';


const Par = styled.p`
    
    
    text-align: center;
    color: ${({theme}) => theme.colors.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3rem;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    ${({theme}) => theme.media.tabletVertical} {
     width: 40%;
     position: absolute;
     top: 30vh;
     left: 2vw;
    }
    ${({theme}) => theme.media.laptop} {
     position: relative;
     margin: 0 auto;
     margin-top: 2vw;
     right: 0;
     left: 0;
     width: 80%;
     font-size: 3.2vh;
     line-height: 2rem;
     top: 250px;
    }
    ${({theme}) => theme.media.hd} {  
      top: 25vh;
      font-size: 3vh;
     line-height: 3rem;
    }
`

  
  export default Par;