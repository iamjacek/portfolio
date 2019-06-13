import styled from 'styled-components';




 const Scroll = styled.img`


  cursor: pointer;
  position: absolute;
  left: 0; 
  right: 0; 
  top: 64vh;
  margin-left: auto;
  margin-right: auto;
  ${({theme}) => theme.media.tabletVertical} {
    top: 70vh;
  }
  ${({theme}) => theme.media.laptop} {
    position: absolute;
    top: initial;
    bottom: 5vh;
  }
  ${({theme}) => theme.media.hd} {
    bottom: 3vh;
  }
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  `

  
  export default Scroll;