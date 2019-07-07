import styled from 'styled-components';


const JumpToTop = styled.img`
        position: fixed;
        right: 25px;
        bottom: 25px;
        width: 60px;
        margin: 0;
        z-index: 1010;
        opacity: 0;
        transition: opacity 200ms ease-in;
        padding: 1vw;
    
    ${({theme}) => theme.media.tablet} {
        right: 35px;
        bottom: 35px;
        width: 70px;
    }
    ${({theme}) => theme.media.tabletVertical} {
        right: 40px;
        bottom: 40px;
        width: 80px;
    }

    ${({theme}) => theme.media.hd} {
        right: 40px;
        bottom: 40px;
        width: calc(75px + 1vw);
    }

    ${({theme}) => theme.media.fourK} {  
        right: 40px;
        bottom: 40px;
        width: calc(75px + 2vw);
    }
`

  
  export default JumpToTop;