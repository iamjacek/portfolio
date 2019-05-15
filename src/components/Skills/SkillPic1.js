import styled from 'styled-components';


const SkillPic1 = styled.img`
    
    position: relative;
    width: calc(50px + 15vw);

    ${({theme}) => theme.media.tablet} {
      position: absolute;
      top: calc(10vh + 90px);
      right: 10vw;
      
    }
    ${({theme}) => theme.media.laptop} {

    }
    ${({theme}) => theme.media.hd} {  

    }
`

  
  export default SkillPic1;