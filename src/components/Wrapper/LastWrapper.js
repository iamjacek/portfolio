import styled from 'styled-components';


const LastWrapper = styled.div`
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 100vh;
    
    ${({theme}) => theme.media.laptop} {
      
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default LastWrapper;