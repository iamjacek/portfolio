import styled from 'styled-components';


const Menu = styled.span`
    cursor: pointer;
    z-index: 1001;
    height: 40px;
    width: 40px;
    background: none;
    position: fixed;
    top: 5vh;
    right: 12vw;
    margin: 0;
    
    ${({theme}) => theme.media.laptop} {
      display: none;
    }
    * {
      opacity: 1;
      transition: 250ms all ease-out;
    }
`



  
  export default Menu;