import styled from 'styled-components';




 const SmallPic = styled.img`
  position: absolute;
  width: 170px;
  top: 150px;
  filter: drop-shadow(0px -1px 5px ${({theme}) => theme.colors.white});


  

${({theme}) => theme.media.tablet} {
  width: 90vw;
  margin-top: 20px;
  filter: drop-shadow(0px 0px 0px ${({theme}) => theme.colors.white});
}
${({theme}) => theme.media.tabletVertical} {
  width: 50vw;
  max-width: 700px;
  margin-top: calc(90px - 3vw);
  position: absolute;
  right: -5vw;
  top: 30vh;
}
${({theme}) => theme.media.laptop} {
  width: 50vw;
  max-width: 850px;
  margin-top: 0;
  position: absolute;
  right: -4vw;
  top: calc(22vh - 2vw);
}
${({theme}) => theme.media.hd} {
  width: 50vw;
  max-width: 1600px;
  top: calc(22vh - 4vw);
}


  
 
  @keyframes wooble {
    0% {
      transform: skew(0deg, 0deg);
    }
    25% {
      transform: skew(1deg, 1deg);
    }
   
    75% {
      transform: skew(-1deg, -1deg);
    }
    100% {
      transform: skew(0deg, 0deg);
    }
  }

  `

  
  export default SmallPic;