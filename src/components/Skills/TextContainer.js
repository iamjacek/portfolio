import styled from 'styled-components';


const TextContainer = styled.div`
    position: relative;
    
    

    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default TextContainer;