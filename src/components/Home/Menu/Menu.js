import styled from 'styled-components';


const Menu = styled.span`
    cursor: pointer;
    z-index: 1001;
    height: 60px;
    width: 60px;
    background: none;
    position: fixed;
    top: 4vh;
    right: 12vw;
    margin: 0;
    padding: 10px 10px;
    
    ${({theme}) => theme.media.laptop} {
      display: none;
    }
    * {
      opacity: 1;
      transition: 250ms all ease-out;
    }
`



  
  export default Menu;