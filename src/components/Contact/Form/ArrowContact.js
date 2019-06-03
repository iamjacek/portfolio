import styled from 'styled-components';


const ArrowContact = styled.img`
    position: absolute;
    top: 5vh;
    left: 5vw;
    cursor: pointer;
    z-index: 1001;
    :hover{
      animation: wooble .25s ease-in-out infinite;
    }
    
    ${({theme}) => theme.media.tabletVertical} {
       top: calc(50vh - 40px);
       left: -40px;
    }
    ${({theme}) => theme.media.hd} {
      
       
    }
`

  export default ArrowContact;
