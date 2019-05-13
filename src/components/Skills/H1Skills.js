import styled from 'styled-components';


const H1Skills = styled.h2`
    font-family: 'Averia Serif Libre', cursive;
    font-size: 30px;
    width: 200px;
    margin: 0 auto;
    margin-top: 30px;
    padding-left: 30px;
    transform: ${(props) => props.left ? "rotate(11deg)" : "rotate(-12deg)"};

    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default H1Skills;