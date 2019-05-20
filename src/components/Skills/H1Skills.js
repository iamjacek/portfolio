import styled from 'styled-components';


const H1Skills = styled.h2`
    font-family: 'Averia Serif Libre', cursive;
    font-size: 30px;
    width: 200px;
    margin: 0 auto;
    margin-top: 30px;
    padding-left: 30px;
    transform: ${(props) => props.left ? "rotate(11deg)" : "rotate(-12deg)"};

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      font-size: 50px;
      padding-left: 0px;
      left: 0;
      right: 0;
      top: ${(props) => props.left ? "52vh" : "5vh"};
      margin-right: auto;
      margin-left: auto;
    }

     ${({theme}) => theme.media.tabletVertical} {
      font-size: 50px;
      left: 0;
      right: 0;
      top: ${(props) => props.left ? "52vh" : "5vh"};

    }

    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default H1Skills;