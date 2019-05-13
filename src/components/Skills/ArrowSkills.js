import styled from 'styled-components';


const ArrowSkills = styled.img`
    position: absolute;
    top: 5vh;
    left: 5vw;
    cursor: pointer;
    z-index: 1001;
    :hover{
      animation: wooble .25s ease-in-out infinite;
    }
    
    ${({theme}) => theme.media.laptop} {
       
       
    }
    ${({theme}) => theme.media.hd} {
      
       
    }
`

  export default ArrowSkills;

