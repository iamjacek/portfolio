import styled from 'styled-components';


const TextContainer = styled.div`
    position: relative;
    
    

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default TextContainer;