import styled from 'styled-components';


const SkillPic2 = styled.img`
    
    position: relative;
    width: calc(50px + 15vw);

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      top: initial;
      bottom: 20vh;
      right: initial;
      left: 10vw;
    }
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default SkillPic2;