import styled from 'styled-components';


const NameForm = styled.input`
    transition: all 200ms ease-in;
    position: relative;
    display: block;
    margin : 10px auto 0px auto;
    width: 90%;
    max-width: 500px;
    height: 5vh;
    background: transparent;
    border: none;
    border-bottom: solid 2px ${({theme}) => theme.colors.white};
    text-align: center;
    z-index: 1;
    font-family: "Roboto";
    font-size: 1.3rem;
    color: ${({theme}) => theme.colors.white};

    :focus {
    outline: none !important;
    border: solid 2px ${({theme}) => theme.colors.white};
    box-shadow: 0 0 3px #719ECE;
    }

    ${({theme}) => theme.media.tablet} {
        width: 80vw;
        max-width: 650px;
    }
    ${({theme}) => theme.media.tabletVertical} {
        font-size: 1.5rem;
    }
    ${({theme}) => theme.media.hd} {
        width: 80%;
        max-width: 950px;
        border-bottom: solid 3px ${({theme}) => theme.colors.white};
        font-size: 1.9rem;
    }
    ${({theme}) => theme.media.fourK} {
        width: 80%;
        max-width: 1200px;
        border-bottom: solid 3px ${({theme}) => theme.colors.white};
        font-size: 3rem;
    }
`

export default NameForm;