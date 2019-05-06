import styled from 'styled-components';




 const Logo = styled.img`

 z-index: 300;
  width: calc(150px + 32vw);
  margin-top: calc(20vh - 5vw);
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto;
  margin-right: auto;
  

${({theme}) => theme.media.tablet} {
    max-width: 420px;
}
${({theme}) => theme.media.tabletVertical} {
    max-width: 450px;
    margin-top: calc(20vh - 3vw);
}
${({theme}) => theme.media.laptop} {
    max-width: 470px;
    margin-top: 25vh;

   
}
${({theme}) => theme.media.hd} {
    max-width: 520px;
}
  `

  
  export default Logo;