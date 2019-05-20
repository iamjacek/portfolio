import styled from 'styled-components';


const ParSkills = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: calc(.2rem + 2vh);
    line-height: calc(1.5rem + .5vh);
    font-weight: 300;
    margin: 2vh auto;
    width: 90%; 
    padding: 0;
    white-space: pre-wrap;
    text-align: center;

    ${({theme}) => theme.media.tablet} {
      font-size: calc(.2rem + 2vh);
      margin: 10vh auto;
      width: 50%; 
      position: absolute;
      top: 10vh;
      left: 5vw;
    }
 
    ${({theme}) => theme.media.tabletVertical} {
      font-size: calc(.2rem + 2vh);
      margin: 10vh 0;
      width: 30vw; 
      position: absolute;
      top: 1vh;
      left: 2vw;
    }

    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default ParSkills;