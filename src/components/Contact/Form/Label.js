import styled from 'styled-components';


const Label = styled.label`
    transition: all 200ms ease-in;
    position: relative;
    width: 90%;
    margin: 0 auto 10px auto;
    display: block;
    max-width: 500px;
    z-index: 1;
    
    ${({theme}) => theme.media.tablet} {
        width: 80%;
        max-width: 650px;
    }
    ${({theme}) => theme.media.hd} {
        width: 80%;
        max-width: 950px;
        font-size: 1.8rem;
    }
    ${({theme}) => theme.media.fourK} {
        width: 80%;
        max-width: 1200px;
        font-size: 2.2rem;
    }
`

  export default Label;

