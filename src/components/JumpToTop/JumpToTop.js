import styled from 'styled-components';


const JumpToTop = styled.img`
        position: fixed;
        right: unset;
        bottom: unset;
        top: 4.5vh;
        left: calc(50vw - 30px);
        width: 60px;
        margin: 0;
        z-index: 1001;
        opacity: 0;
        transition: opacity 150ms ease-in;
        padding: .8vw;
    
    ${({theme}) => theme.media.tablet} {
        
        width: 70px;
    }
    ${({theme}) => theme.media.tabletVertical} {
       
        width: 80px;
    }
    ${({theme}) => theme.media.laptop} {
        top: unset;
        left: unset;
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