import styled from 'styled-components';


const SkillPic4 = styled.img`
    width: calc(50px + 10vw);
  display: none;
    ${({theme}) => theme.media.hd} {  
      display: block;
      position: absolute;
      bottom: 2vh;
      left: calc(40vw - 90px);
      
    }
`

  
  export default SkillPic4;