import styled from 'styled-components';


const Skills = styled.div`
@media (max-width: 325px) {
  overflow-y: auto;
    }
    transition: 250ms transform ease-out;
    width: 100vw;
    min-height: 795px;
    height: 100vh;
    display: block;
    background: ${({theme}) => theme.colors.gray};
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 1003;
    opacity: 0;
    transform: translateX(100vw);
    ${({theme}) => theme.media.tabletVertical} {
      width: 87vw;
      margin-left: 13vw;
    }
    ${({theme}) => theme.media.hd} {
       
       
    }
`

  export default Skills;

