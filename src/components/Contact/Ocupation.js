import styled from 'styled-components';


const Ocupation = styled.p`
    font-family: 'Montserrat Semibold', sans-serif;
    font-size: 1rem;
    margin: -10px auto 40px auto;
    text-align: center;

    ${({theme}) => theme.media.tablet} {
        font-size: 1.7rem;
        margin: -20px auto 40px auto;
    }

    ${({theme}) => theme.media.tabletVertical} {
        margin: -3vh auto 40px auto;
    }
    
    ${({theme}) => theme.media.laptop} {
        position: absolute;
        top: 77vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.6vw;
    }
`

  
  export default Ocupation;