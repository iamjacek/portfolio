import styled from 'styled-components';


const AboutWrapper = styled.div`
        position: relative;

        height: 100%;
        width: 100%;
    
    
    ${({theme}) => theme.media.laptop} {
      width: 40%;
      margin-left:  4vw;
    }
    ${({theme}) => theme.media.hd} {  
      margin-left:  2vw;
    }
`

  
  export default AboutWrapper;