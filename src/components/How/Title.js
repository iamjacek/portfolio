import styled from 'styled-components';


const Title = styled.h3`
    font-family: 'Montserrat Semibold', sans-serif;
    text-align: center;
    padding: 20px 0 20px 60px;
    font-size: 2rem;
    margin: 0;
    text-align: center;
    
    ${({theme}) => theme.media.tablet} {
      
    }

    ${({theme}) => theme.media.laptop} {
     
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default Title;