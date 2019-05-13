import styled from 'styled-components';


const ParSkills = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: calc(.2rem + 2vh);
    line-height: 1.5rem;
    font-weight: 300;
    margin: 0 auto;
    width: 90%; 
    padding: 7vw;
    
 
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default ParSkills;