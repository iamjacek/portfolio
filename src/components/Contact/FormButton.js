import styled from 'styled-components';


const FormButton = styled.button`
    cursor: pointer;
    position: relative;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.white};
    width: 70%;
    max-width: 300px;
    height: 50px;
    margin: 10px auto;
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.white};
    transition: font-size 200ms ease-in, background-color 200ms ease-in, letter-spacing 200ms ease-in;

  
    letter-spacing: normal;

    :hover{
        background-color: ${({theme}) => theme.colors.red};
        font-size: 1.4rem;
        transition: all 200ms ease-in;
        letter-spacing: 1px;
        color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.red};
    }

  
    
    ${({theme}) => theme.media.tablet} {
        max-width: 350px;
        height: 60px;
        font-size: 1.2rem;

        :hover{
        font-size: 1.3rem;
        }
    }

    ${({theme}) => theme.media.tabletVertical} {
        height: 50px;
    }

    ${({theme}) => theme.media.laptop} {  
        max-width: unset;
        width: calc(4vw + 300px);
        height: 6vh;
        position: absolute;
        font-size: 1.3vw;
        top: 15vh;
        left: 0;
        right: 0;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: auto;
        margin-right: auto;
        :hover{
        font-size: 1.4vw;
        }
    }

    ${({theme}) => theme.media.hd} {  
        width: 22vw;
    }
`

  
  export default FormButton;