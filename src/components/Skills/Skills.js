import styled from 'styled-components';


const Skills = styled.div`
    transition: 600ms left ease-in;
    width: 100vw;
    height: 100vh;
    display: block;
    background: ${({theme}) => theme.colors.gray};
    position: fixed;
    top: 0; 
    right: 0;
    left: 100vw;
    margin: 0;
    padding: 0;
    z-index: 1000;
    ${({theme}) => theme.media.tabletVertical} {
      width: 87vw;
      margin-left: 13vw;
    }
    ${({theme}) => theme.media.hd} {
       
       
    }
`

  export default Skills;

  /*  const SkillsWrapper = styled.div`
  
 `

  exports SkillsWrapper;

  const Pic1 = styled.div`
  
  `

  export Pic1;

  const Pic2 = styled.div`
  
  `

  export Pic2; */