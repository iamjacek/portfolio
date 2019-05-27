import styled from 'styled-components';


const Number = styled.div`
    position: absolute;
    font-family: 'Montserrat Semibold', sans-serif;
    top: 10px;
    left: 10px;
    font-size: 3rem;

    ::after {
        content: "";
        position: absolute;
        left: 20px;
        top: 70px;
        height: 150px;
        width: 5px;
        background: ${({theme}) => theme.colors.white};;
    }
    
    ${({theme}) => theme.media.tablet} {
      
    }

    ${({theme}) => theme.media.laptop} {
     
    }

    ${({theme}) => theme.media.hd} {  
    
    }
`

  
  export default Number;