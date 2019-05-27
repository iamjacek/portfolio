import styled from 'styled-components';


const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    margin-left: auto;
    max-width: 220px; 
    text-align: center;
   
    /* padding: 23px 0 15px 60px; */
    padding-top: ${({padding}) => padding};
    ${({theme}) => theme.media.tablet} {
        max-width: 300px;
      
    }          

    ${({theme}) => theme.media.laptop} {
     
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default Text;