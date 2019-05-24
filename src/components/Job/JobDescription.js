import styled from 'styled-components';


const JobDescription = styled.div`
        position: relative;
        font-family: 'Rubik';
        width: 160px;
        margin: 20px 0;
        padding: 0 10px 0 20px;
        white-space: pre-wrap;
        text-align: left;
        line-height: 2rem;
    
    
    ${({theme}) => theme.media.laptop} {
   
    }
    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default JobDescription;