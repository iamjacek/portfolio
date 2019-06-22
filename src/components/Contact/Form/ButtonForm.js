import styled from 'styled-components';


const ButtonForm = styled.button`
    cursor: pointer;
    position: relative;
    display: block;
    margin: 0 auto;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.white};
    width: 90%;
    height: 7vh;
    margin-top: 10vw;
    max-width: 500px;
    font-family: 'Rubik', sans-serif;
    font-size: 1.1rem;
    color: ${({theme}) => theme.colors.white};
    letter-spacing: normal;
    transition: all 200ms ease-in;
    z-index: 1;
   
    :hover{
        background-color: ${({theme}) => theme.colors.red};
        font-size: 1.4rem;
        transition: all 200ms ease-in;
        letter-spacing: 1px;
        color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.red};
    }

    ${({theme}) => theme.media.tablet} {
        font-size: 1.3rem;
        margin: 5vh 0 0 auto;
        width: 40vw;
        max-width: 325px;
        height: 6vh;

        :hover{
        font-size: 1.4rem;
        }
    }
    ${({theme}) => theme.media.hd} {
        font-size: 1.6rem;

        :hover{
        font-size: 1.7rem;
        }
        max-width: 425px;
    }
    ${({theme}) => theme.media.fourK} {
        font-size: 2.5rem;
        border: 3px solid ${({theme}) => theme.colors.white};

        :hover{
        font-size: 2.8rem;
        }
        max-width: 600px;
    }
`

export default ButtonForm;