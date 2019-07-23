import styled from 'styled-components';


const Polish = styled.h2`
    cursor: pointer;
    position: absolute;
    top: 4vh;
    left: 12vw;
    margin: 0;
    height: 50px;
    width: 60px;
    padding: 10px;
    font-family: 'Rubik', sans-serif;
    font-size: 2.2rem;
    
    text-align: center;
    text
    ${({theme}) => theme.media.laptop} {
      font-size: 1rem;
    }
    ${({theme}) => theme.media.hd} {  
      font-size: calc(.8rem + .5vw);
    }
    &:hover{
      color: ${({theme}) => theme.colors.red};
    }
`

  
  export default Polish;