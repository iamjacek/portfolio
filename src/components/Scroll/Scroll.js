import styled from 'styled-components';




 const Logo = styled.img`
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
  `

  
  export default Logo;