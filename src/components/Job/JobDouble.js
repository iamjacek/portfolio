import styled from 'styled-components';


const JobDouble = styled.div`
        
        
    ${({theme}) => theme.media.tabletVertical} {
        position: relative;
        width: 50%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    
    ${({theme}) => theme.media.laptop} {
        width: 400px;
    }
    ${({theme}) => theme.media.hd} {  
        position: relative;

        width: 250px;
        height: 500px;
        margin: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

  
  export default JobDouble;