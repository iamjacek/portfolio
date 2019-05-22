import styled from 'styled-components';


const H1Skills = styled.h2`
    font-family: 'Averia Serif Libre', cursive;
    font-size: 30px;
    width: 200px;
    margin: 0 auto;
    margin-top: 30px;
    padding-left: 30px;
    transform: ${(props) => props.left ? "rotate(11deg)" : "rotate(-12deg)"};
    transition: all 600ms ease-in;
    
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
      font-size: calc(50px + 0.5vw);
      left: ${(props) => props.left ? "unset" : "5vw"};
      right: ${(props) => props.left ? "7vw" : "unset"};
      top: ${(props) => props.left ? "20vh" : "71vh"};
      transform: ${(props) => props.left ? "rotate(0deg)" : "rotate(0deg)"};
    }

    ${({theme}) => theme.media.laptop} {
      margin: 0;
      padding: 0;
      position: absolute;
      font-size: 100px;
      left: ${(props) => props.left ? "unset" : "-50px"};
      right: ${(props) => props.left ? "-50px" : "unset"};
      top: ${(props) => props.left ? "unset" : "450px"};
      bottom: ${(props) => props.left ? "50px" : "unset"};
      opacity: ${(props) => props.left ? "0.3" : "1"};
    }
    ${({theme}) => theme.media.hd} {  
      font-size: ${(props) => props.left ? "170px" : "120px"};
      top: ${(props) => props.left ? "unset" : "570px"};
      bottom: ${(props) => props.left ? "30px" : "unset"};
      left: ${(props) => props.left ? "unset" : "-30px"};
      right: ${(props) => props.left ? "-20px" : "unset"};
    }
`

  
  export default H1Skills;