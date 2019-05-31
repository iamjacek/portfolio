import styled from 'styled-components';


const FormP = styled.p`
    transition: all 200ms ease-in;
    position: relative;     
    font-family: "Rubik";
    font-size: 1.3rem;
    text-align: center;
    width: 80%;
    margin: 40px auto 5vh auto;
    line-height: 1.8rem;
    z-index: 1;
    ${({theme}) => theme.media.tablet} {
        font-size: 1.5rem;
        margin: 60px auto 8vh auto;
        max-width: 700px;
        line-height: 2rem;
    }
    ${({theme}) => theme.media.hd} {
        font-size: 2rem;
        line-height: 3rem;
        width: 50%;
        max-width: 1200px;
    }
`

export default FormP;