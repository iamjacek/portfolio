import styled from 'styled-components';


const LastWrapper = styled.div`
        position: relative;

        width: 100%;
        
        min-height: 100vh;
    
    
    ${({theme}) => theme.media.laptop} {
   
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default LastWrapper;