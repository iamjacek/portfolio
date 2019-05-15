import styled from 'styled-components';


const ParSkills = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: calc(.2rem + 2vh);
    line-height: 1.5rem;
    font-weight: 300;
    margin: 2vh auto;
    width: 90%; 
    padding: 0;
    white-space: pre-wrap;
    text-align: center;

    ${({theme}) => theme.media.tablet} {
      margin: 10vh auto;
      width: 85%; 
      position: absolute;
      top: unset;
      bottom: 10vh;
      left: initial;
      right: -50px;
    }
 
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default ParSkills;