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
      bottom: 2vh;
    }
 
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default ParSkills;