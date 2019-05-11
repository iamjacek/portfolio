import styled from 'styled-components';




 const Button = styled.button`
    cursor: pointer;
    position: relative;
    background-color: ${({theme}) => theme.colors.gray};
    border: 2px solid ${({theme}) => theme.colors.white};
    width: 70%;
    height: 60px;
    margin-top: 10vw;
    font-family: 'Rubik', sans-serif;
    font-size: 1.3rem;
    color: ${({theme}) => theme.colors.white};
    transition: font-size 200ms ease-in, background-color 200ms ease-in, letter-spacing 200ms ease-in;

  
    letter-spacing: normal;

    :hover{
        background-color: ${({theme}) => theme.colors.red};
        font-size: 1.4rem;
        transition: all 200ms ease-in;
        letter-spacing: 1px;
        color: ${({theme}) => theme.colors.white};
    }



  

${({theme}) => theme.media.tablet} {
    margin-top: 5vw;
    margin-bottom: 5vw;
    width: 50%;
}
${({theme}) => theme.media.tabletVertical} {
    width: 30%;
    position: absolute;
    top: 60vh;
    left: 7vw;
    height: 50px;
    margin-top: calc(5vw);
}
${({theme}) => theme.media.laptop} {
    position: relative;
    top: calc(300px + 2vw);
    left: 0;
    margin: 0;
    width: 60%;
}
${({theme}) => theme.media.hd} {
    height: 60px;
    width: 65%;
}
  `

  
  export default Button;