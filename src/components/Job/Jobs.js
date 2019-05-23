import styled from 'styled-components';


const Jobs = styled.div`
        position: relative;

        width: 100vw;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        margin: 20px 0; 
        
        
    
    
    ${({theme}) => theme.media.laptop} {
   
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default Jobs;