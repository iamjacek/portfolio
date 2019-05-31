import styled from 'styled-components';


const H1Form = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.colors.red};
    font-family: 'Montserrat Semibold', sans-serif;
    font-size: calc(30px + 1vw);
    margin: 50px auto 0 auto;
    width: 250px;
    transition: all 200ms ease-in;
    z-index: 1;

    ${({theme}) => theme.media.tablet} {
        font-size: calc(40px + 1vw);
        width: unset;
        margin: 100px auto 25px auto;
    }

    ${({theme}) => theme.media.tabletVertical} {
        margin: 5vh auto 25px auto;
    }
    ${({theme}) => theme.media.hd} {
        font-size: calc(40px + 2vw);
    }
`

export default H1Form;