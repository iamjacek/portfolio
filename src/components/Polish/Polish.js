import styled from 'styled-components';


const Polish = styled.h2`
    cursor: pointer;
    position: absolute;
    top: 5vh;
    left: 12vw;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 2.2rem;
    ${({theme}) => theme.media.laptop} {
      font-size: 1rem;
    }
    ${({theme}) => theme.media.hd} {  
      font-size: 1.2rem;
    }
    &:hover{
      color: ${({theme}) => theme.colors.red};
    }
`

  
  export default Polish;