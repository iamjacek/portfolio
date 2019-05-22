import styled from 'styled-components';


const SkillPic1 = styled.img`
    
    position: relative;
    width: calc(50px + 15vw);
    transition: all 600ms ease-in;
    ${({theme}) => theme.media.tablet} {
      position: absolute;
      top: calc(10vh + 90px);
      right: 10vw;
      
    }
    ${({theme}) => theme.media.tabletVertical} {
      position: absolute;
      top: 0;
      left: calc(30vw + 6vw);
      margin: 7vh 0;
      width: calc(50px + 10vw);
    }
    ${({theme}) => theme.media.laptop} {
      position: absolute;
      top: 270px;
      left: calc(250px + 2vw);
    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default SkillPic1;