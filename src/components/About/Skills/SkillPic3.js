import styled from 'styled-components';


const SkillPic3 = styled.img`
    
    display: none;
    width: calc(50px + 10vw);
    ${({theme}) => theme.media.hd} {  
      display: block;
      position: absolute;
      top: 50px;
      left: 150px;
      
    }
`

  export default SkillPic3;