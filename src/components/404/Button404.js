import styled from 'styled-components';




 const Button404 = styled.button`
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
        border: 2px solid ${({theme}) => theme.colors.red};
    }



  

${({theme}) => theme.media.tablet} {
    
}
${({theme}) => theme.media.tabletVertical} {
    width: 40%;
}
${({theme}) => theme.media.laptop} {
    
}
${({theme}) => theme.media.hd} {
    width: 30%;
    font-size: 1.8rem;
    height: 90px;
    :hover{
       
        font-size: 2rem;
    
    }
}
  `

  
  export default Button404;