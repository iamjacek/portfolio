import styled from 'styled-components';


const ParSkills = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: calc(.2rem + 2vh);
    line-height: calc(1.5rem + .5vh);
    font-weight: 300;
    margin: 4vh auto;
    width: 90%; 
    padding: 0;
    white-space: pre-wrap;
    text-align: center;
    transition: all 600ms ease-in;

    ${({theme}) => theme.media.tablet} {
      margin: 10vh auto;
      width: 50%; 
      position: absolute;
      top: unset;
      bottom: 5vh;
      left: unset;
      right: 5vw;
    }

    ${({theme}) => theme.media.tabletVertical} {
      width: 30vw; 
      position: absolute;
      top: unset;
      left: unset;
      right: 2vw;
      bottom: 5vh;
    }
 
    ${({theme}) => theme.media.laptop} {
      bottom: -20px;
      right: calc(250px + 7vw);
    }
    ${({theme}) => theme.media.hd} {  
      font-size: calc(.5rem + 2vh);
      right: 170px;
      bottom: 20px;
      line-height: calc(1.5rem + 1vw);
    }
`

  
  export default ParSkills;