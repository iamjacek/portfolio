import styled from 'styled-components';


const JobWrapper = styled.div`
        position: relative;

        width: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    
    
    ${({theme}) => theme.media.laptop} {
   
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default JobWrapper;